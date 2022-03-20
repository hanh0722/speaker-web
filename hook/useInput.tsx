import { ChangeEvent, useReducer, Reducer } from "react";
import {
  UseInputActions,
  UseInputState,
  UseInputSerialize,
} from "../types/hook";
import { isFunction } from "../types/type";

const initialState: UseInputState = {
  isTouched: false,
  value: "",
};

const reducerFunction: Reducer<UseInputState, UseInputActions> = (
  state,
  action
): UseInputState => {
  const { type, payload } = action;
  switch (type) {
    case UseInputSerialize.CHANGE:
      return {
        ...state,
        value: payload,
      };
    case UseInputSerialize.TOUCHED:
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const useInput = (validateFunction: (value: string) => boolean) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const isValid = validateFunction && validateFunction(state.value);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch({
      type: UseInputSerialize.CHANGE,
      payload: value,
    });
  };
  

  const onTouchedHandler = () => {
    dispatch({
      type: UseInputSerialize.TOUCHED,
      payload: null,
    });
  };

  return {
    onChangeHandler,
    onTouchedHandler,
    isValid,
    ...state,
  };
};

export default useInput;
