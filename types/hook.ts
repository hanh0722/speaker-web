export interface UseInputState {
    isTouched: boolean,
    value: string
}

export enum UseInputSerialize {
    CHANGE, TOUCHED, CHECK_VALID
}

export interface UseInputActions {
    type: string | UseInputSerialize;
    payload: any
}
