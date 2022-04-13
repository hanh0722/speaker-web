import { Action, createSlice } from "@reduxjs/toolkit";
import { BaseProductProps } from "../../types/request";


export interface CompareState {
  isLoadingCompareList: boolean;
  compareList: Array<BaseProductProps>
}

const initialState = {
  isLoadingCompareList: false,
  compareList: []
};

const compareSlice = createSlice({
  name: 'compare-slice',
  initialState,
  reducers: {
    addCompareListInit(state, action) {
      console.log(action.payload)
    }
  }
});

export const compareActions = compareSlice.actions;
export default compareSlice;