import { ChangeEvent, useReducer, Reducer, useMemo } from "react";
import { isString } from "../utils/string";
import {
  UseInputActions,
  UseInputState,
  UseInputSerialize,
  UseInputParams,
} from "../types/hook";

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
    case UseInputSerialize.FORCE_UPDATE:
      return {
        ...state,
        value: payload
      }
    default:
      return state;
  }
};

const useInput = (type?: 'or' | 'and' | null, ...args: Array<(value: string) => boolean>) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const isValid = useMemo(() => {
    if (type === 'or') {
      return args.some(functionValidate => functionValidate(state.value));
    }
    return args.every(functionValidate => functionValidate(state.value));
  }, [state.value, args, type]);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement> | string) => {
    dispatch({
      type: UseInputSerialize.CHANGE,
      payload: isString(event) ? event : event.target.value,
    });
  };
  
  const forceUpdateValue = (value: string) => {
    dispatch({
      type: UseInputSerialize.FORCE_UPDATE,
      payload: value
    })
  }

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
    forceUpdateValue,
    ...state,
  };
};

export default useInput;
