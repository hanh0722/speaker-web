import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import React, { FC, useEffect, useState } from "react";
import { PAGE_SIZE_ADDRESS } from "../../../../constants/string";
import useCallApi from "../../../../hook/useCallApi";
import { createAddress, getAddress } from "../../../../service/address";
import { AddressProps, InfoForm } from "../../../../types/components/AddressCheckout";
import {
  AddressCreateResponse,
  AddressResponse,
  SingleAddress,
  SingleAddressProps,
} from "../../../../types/request";
import { generateArray } from "../../../../utils/array";
import {
  Button,
  Grid,
  Image,
  Pagination,
  SkeletonLoading,
} from "../../../core";
import { IconPlus } from "../../../core/Icons";
import AddressForm from "./AddressForm";
import AddressItem from "./AddressItem";
import styles from "./styles.module.scss";

const Address: FC<AddressProps> = (props) => {
  const { onMove } = props;
  const router = useRouter();
  const page = router.query["page"];
  const [total, setTotal] = useState<null | number>(null);
  const [data, setData] = useState<null | Array<SingleAddressProps>>(null);
  const [showForm, setShowForm] = useState(false);

  const onCreateSuccess = (dataCreate: AddressCreateResponse) => {
    const address = new SingleAddress(dataCreate.data);
    if (data) {
      if (data.length >= PAGE_SIZE_ADDRESS) {
        const sliceData = data.slice(0, -1);
        setData([address, ...sliceData])
      } else {
        setData(prevState => {
          return [address, ...(prevState || [])];
        })
      }
      setTotal(prevState => (prevState || 0) + 1);
    }
    onHide();
  };
  const onHandleCreate = (formData: InfoForm) => {
    return createAddress(formData);
  };
  const { isLoading: isLoadingCreate, onSendRequest: onRequestCreate } =
    useCallApi<AddressCreateResponse>({
      request: onHandleCreate,
      onSuccess: onCreateSuccess,
      isToastNotification: true,
    });

  const onHandleSuccess = (data: AddressResponse) => {
    setData(data.data);
    setTotal(data.total_documents);
  };
  const onFetchAddress = (page: number) => {
    return getAddress({
      page: page,
      page_size: PAGE_SIZE_ADDRESS
    });
  };
  const { isLoading, onSendRequest } = useCallApi<AddressResponse>({
    request: onFetchAddress,
    onSuccess: onHandleSuccess,
  });
  useEffect(() => {
    onSendRequest(page || 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  const onOpenForm = () => {
    setShowForm(true);
  };
  const onHide = () => {
    setShowForm(false);
  };
  const onHandleRequest = (data: InfoForm) => {
    const {
      address,
      city,
      country,
      isDefault,
      name,
      phoneNumber,
      place,
      zipCode,
    } = data;
    onRequestCreate({
      address,
      city,
      country,
      is_default: isDefault,
      full_name: name,
      phone_number: phoneNumber,
      place: place,
      zip_code: zipCode,
    });
  };
  const onHandleNextStep = (address: SingleAddressProps) => {
    onMove(address);
  };
  return (
    <>
      <AddressForm
        isLoading={isLoadingCreate}
        onCollectAddress={onHandleRequest}
        show={showForm}
        onHide={onHide}
      />
      <Grid cols={1} prefix="lg" className={styles.address}>
        {isLoading &&
          generateArray(5).map((item) => (
            <SkeletonLoading key={item} className={styles.loading} />
          ))}
        {!isLoading &&
          data &&
          data?.length > 0 &&
          data?.map((item) => {
            return (
              <AddressItem
                onClick={onHandleNextStep}
                data={item}
                key={item?._id}
              />
            );
          })}
      </Grid>
      {!isLoading && data && data.length === 0 && (
        <div className={`d-flex justify-center align-center flex-column ${styles.empty}`}>
          <Image src="/image/illustration_empty_cart.svg" alt="" />
          <p className="f-16 lh-24 color-gray">You {"haven't"} had any address</p>
        </div>
      )}
      <div className={`d-flex justify-between align-center ${styles.button}`}>
        <Button
          onClick={onOpenForm}
          variant="text"
          color="inherit"
          prefix="normal"
        >
          <IconPlus variant="sm" />
          Add New Address
        </Button>
        {!isLoading && !!total && (
          <Pagination
            className={styles.pagination}
            totalItems={total}
            itemPerPage={PAGE_SIZE_ADDRESS}
          />
        )}
      </div>
    </>
  );
};

Address.propTypes = {
  onMove: PropTypes.func.isRequired
};


export default Address;
