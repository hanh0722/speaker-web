import { ChangeEvent, useReducer, Reducer, useEffect } from "react";
import {
  UseInputActions,
  UseInputState,
  UseInputSerialize,
} from "../types/hook";
import { isFunction } from "../types/type";

const initialState: UseInputState = {
  isTouched: false,
  isValid: false,
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
    case UseInputSerialize.CHECK_VALID:
      return {
        ...state,
        isValid: payload,
      };
    default:
      return state;
  }
};

const useInput = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
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
    ...state,
  };
};

export default useInput;
