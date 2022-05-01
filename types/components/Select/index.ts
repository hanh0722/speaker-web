import { SelectProps } from "@mui/material";
import { Component, HTMLProps, SelectHTMLAttributes } from "react";
import { ClassNameProps } from "../../string";

export interface SelectCoreProps extends ClassNameProps, SelectHTMLAttributes<HTMLSelectElement> {
  initValue?: string;
  onChangeValue?: (value: string | undefined) => void 
}

export interface SelectElemntProps extends ClassNameProps {
  value: string | number
}