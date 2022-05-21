import React, { RefObject } from "react";

const useMergeRefs = <T extends any>(...ref: Array<RefObject<T>>) => {
  console.log(ref);
};

export default useMergeRefs;