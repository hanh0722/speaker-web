import React from "react";
import { BlogDetailResponse } from "../../request";
import { ClassNameProps } from "../../string";

export interface BlogOverlayProps extends ClassNameProps, React.HTMLAttributes<HTMLElement> {
  data: BlogDetailResponse;
};

export interface BlogBottomBarProps extends ClassNameProps, React.HTMLAttributes<HTMLElement> {
  data: BlogDetailResponse
};