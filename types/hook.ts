export interface UseInputState {
    isValid: boolean,
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
