import { REGEX_PASSWORD } from "../constants/string";

export const classList = (...args: Array<string | undefined | number | null | boolean>) => {
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

