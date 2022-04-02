import { REGEX_PASSWORD } from "../constants/string";

export const classList = (...args: Array<any>) => {
    return args.filter(item => !!item).join(' ');
}

export const isRequired = (value: string) => {
    return value.trim().length > 0
}

export const isEmail = (value: string) => {
    return value.includes('@') && isRequired(value);
}

export const isValidPassword = (value: string) => {
    return REGEX_PASSWORD.test(value);
}

export const isMobilePhone = (value: string) => {
    if (value.length < 10 || value.length > 11) {
        return false;
    }
    return true;
}

export const convertToOTP = (array: Array<number | null>) => {
  try{
    const isNotValid = array.some(value => value === null);
    if (isNotValid) {
      return null;
    }
    return +array.join('')
  }catch(err) {
    return null;
  }
}

export const toCurrency = (value: number, position?: string) => {
  if (!value) {
    return value;
  }
  try{
    const format = new Intl.NumberFormat(position || 'en-US', {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol'
    }).format(value);
    return format;
  }catch(err) {
    return value;
  }
}