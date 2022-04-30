import { REGEX_PASSWORD } from "../constants/string";

export const isString = (value: Array<string> | string | any): value is string => {
  return typeof value === 'string';
}

export const isObject = (value: any): value is Object => {
  return value instanceof Object
}

export const isRequiredEditor = (value?: string): value is string => {
  if (!value) {
    return false;
  }
  return value.replace(/<(.|\n)*?>/g, '').trim().length > 0;
}

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

export const isNumber = (value: any): value is number => {
  return value instanceof Number;
}

export const isPositive = (value: any) => {
  try{  
    const parseInt = +value;
    return parseInt > 0;
  }catch(err) {
    return false;
  }
}

export const isFile = (file: any) => {
  return file instanceof File;
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

export const toCurrency = (value?: number, position?: string) => {
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