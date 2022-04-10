export interface ObjectProps {
  [props: string | number]: any;
}
export interface ErrorProps extends Error {
  code?: number;
  message: string
}

export interface UIProps {
  isMobileScreen?: boolean
}