export interface ObjectProps {
    [props: string | number]: any
}
export interface ErrorProps extends Error {
    code?: number
}