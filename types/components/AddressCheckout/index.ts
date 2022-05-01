import { RADIO_ADDRESS_VALUE } from "../../../constants/steps";
import { SingleAddressProps } from "../../request";
import { ClassNameProps } from "../../string";

export interface InfoForm {
  place: RADIO_ADDRESS_VALUE | string | undefined | number
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  isDefault: boolean
}

export interface AddressFormProps {
  onHide: () => void;
  show: boolean;
  onCollectAddress?: (info: InfoForm) => void;
  isLoading?: boolean;
}

export interface AddressItemProps extends ClassNameProps {
  data: SingleAddressProps;
  onClick?: (item: SingleAddressProps) => void;
};

export interface AddressProps {
  onMove: (data: SingleAddressProps) => void;
}