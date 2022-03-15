import { TextFieldProps } from "@mui/material";
import { ClassNameProps } from "./string";

export interface InputProps extends ClassNameProps{
    type?: string;
    placeholder?: string;
    min?: string;
    max?: string;
    minLength?: string;
    maxLength?: string;
    onChange?: (value: string) => void;
    defaultValue?: string;
    label?: string;
    id?: string;
    variant?: 'outlined' | 'filled' | 'standard';
    error?: boolean;
    hiddenLabel?: boolean;
    onBlur?: () => void;
}