import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { FC } from "react";
import { useSelector } from "react-redux";
import {
  RADIO_ADDRESS,
  RADIO_ADDRESS_VALUE,
} from "../../../../../constants/steps";
import useCallApi from "../../../../../hook/useCallApi";
import useInput from "../../../../../hook/useInput";
import { getAllCountries } from "../../../../../service/countries";
import { RootState } from "../../../../../store";
import { AddressFormProps } from "../../../../../types/components/AddressCheckout";
import {
  CountryResponse,
  SingleCountryProps,
} from "../../../../../types/request";
import { isMobilePhone, isRequired } from "../../../../../utils/string";
import { CheckBox, LoadingSpinner } from "../../../../common";
import { Button, Grid, Input, Modal, Radio, Select } from "../../../../core";
import styles from "./styles.module.scss";
import { isFunction } from "../../../../../types/type";

const AddressForm: FC<AddressFormProps> = (props) => {
  const { show, onCollectAddress, onHide, isLoading: isLoadingCreate, ...restProps } = props;
  const isMobileScreen = useSelector<RootState>(
    (state) => state.ui.isMobileScreen
  );
  const [placeUser, setPlaceUser] = useState<RADIO_ADDRESS_VALUE | string | undefined | number>(RADIO_ADDRESS_VALUE.HOME);
  const [isDefault, setIsDefault] = useState(false);
  const [countryChoosen, setCountryChoosen] = useState<string | undefined>("");
  const {
    onChangeHandler: onChangeName,
    onTouchedHandler: onTouchedName,
    isTouched: isTouchedName,
    isValid: isValidName,
    value: valueName,
  } = useInput("and", isRequired);
  const {
    value: valueMobilePhone,
    isTouched: isTouchedMobilePhone,
    isValid: isValidPhone,
    onChangeHandler: onChangePhone,
    onTouchedHandler: onTouchedPhone,
  } = useInput("and", isMobilePhone);
  const {
    value: valueAddress,
    onChangeHandler: onChangeAddress,
    onTouchedHandler: onTouchedAddress,
    isTouched: isTouchedAddress,
    isValid: isValidAddress,
  } = useInput("and", isRequired);
  const {
    value: valueCity,
    isTouched: isTouchedCity,
    isValid: isValidCity,
    onChangeHandler: onChangeCity,
    onTouchedHandler: onTouchedCity,
  } = useInput("and", isRequired);
  const {
    value: valueZipCode,
    isTouched: isTouchedZipCode,
    isValid: isValidZipCode,
    onChangeHandler: onChangeZipCode,
    onTouchedHandler: onTouchedZipCode,
  } = useInput("and", isRequired);
  const [country, setCountry] = useState<Array<SingleCountryProps>>();

  const onHandleSuccess = (data: CountryResponse) => {
    const country = data?.data;
    setCountry(country);
  };

  const { isLoading, onSendRequest } = useCallApi<CountryResponse>({
    request: getAllCountries,
    onSuccess: onHandleSuccess,
    isToastNotification: true,
  });

  useEffect(() => {
    onSendRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onGetKeyHandler = (value: number | string | undefined) => {
    setPlaceUser(value);
  };
  const onChangeCountryHandler = (value: string | undefined) => {
    setCountryChoosen(value);
  };
  const onTick = () => {
    setIsDefault(prevState => !prevState);
  }
  const onSubmit = () => {
    if (!countryChoosen || !placeUser) {
      return;
    }
    if (isFunction(onCollectAddress)) {
      onCollectAddress({
        address: valueAddress,
        city: valueCity,
        country: countryChoosen,
        name: valueName,
        phoneNumber: valueMobilePhone,
        place: placeUser,
        zipCode: valueZipCode,
        isDefault: isDefault
      })
    }
  }
  return (
    <Modal onHide={onHide} variant="lg" center show={show}>
      <Modal.Header>Add New Address</Modal.Header>
      <Modal.Body>
        <Radio defaultKey={placeUser} onGetKey={onGetKeyHandler}>
          <div className="d-flex align-center gap-20">
            {RADIO_ADDRESS.map((item) => {
              return (
                <div
                  className={`d-flex align-center ${styles.line}`}
                  key={item.id}
                >
                  <Radio.Element eventKey={item.id} />
                  <span className={styles.value}>{item.value}</span>
                </div>
              );
            })}
          </div>
        </Radio>
        <Grid prefix="lg" className={styles.grid} cols={1}>
          <Grid prefix="lg" cols={isMobileScreen ? 1 : 2}>
            <Input
              onBlur={onTouchedName}
              onChange={onChangeName}
              error={!isValidName && isTouchedName}
              label="Full Name *"
            />
            <Input
              error={!isValidPhone && isTouchedMobilePhone}
              onChange={onChangePhone}
              onBlur={onTouchedPhone}
              label="Phone Number *"
            />
          </Grid>
          <Input
            error={!isValidAddress && isTouchedAddress}
            onChange={onChangeAddress}
            onBlur={onTouchedAddress}
            label="Address *"
          />
          <Grid cols={2} prefix="lg">
            <Input
              onChange={onChangeCity}
              onBlur={onTouchedCity}
              error={!isValidCity && isTouchedCity}
              label="Town / City *"
            />
            <Input
              onChange={onChangeZipCode}
              onBlur={onTouchedZipCode}
              error={!isValidZipCode && isTouchedZipCode}
              label="Zip / Postal Code *"
            />
          </Grid>
          {!isLoading && country ? (
            <Select
              onChangeValue={onChangeCountryHandler}
              placeholder="Country *"
            >
              <Select.Option value="">Choose Country *</Select.Option>
              {country.map((item) => {
                return (
                  <Select.Option value={item.name} key={item.iso3}>
                    {item.name}
                  </Select.Option>
                );
              })}
            </Select>
          ) : (
            <div className="d-flex justify-center align-center">
              <LoadingSpinner className={styles.loading} />
            </div>
          )}
          <div className={`d-flex align-center ${styles.default}`}>
            <CheckBox onChangeCheck={onTick}/> <span>Use this address as default</span>
          </div>
        </Grid>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-end align-center gap-20">
          <Button isLoading={isLoadingCreate} disabled={!isValidAddress || !isValidCity || !isValidName || !isValidPhone || !isValidZipCode || !countryChoosen || isLoadingCreate} onClick={onSubmit}>Deliver To This Address</Button>
          <Button onClick={onHide} variant="outlined" prefix="normal" color="inherit">
            Cancel
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

AddressForm.defaultProps = {
  onCollectAddress: (value) => {},
};

AddressForm.propTypes = {
  onCollectAddress: PropTypes.func,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.any.isRequired
};
export default AddressForm;
