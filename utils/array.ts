export const generateArray = (quantity: number) => {
    return [...Array.from(Array(quantity).keys())];
}
export const isArray = (value: any): value is Array<any> => {
  return value instanceof Array;
}

export const generateArrayByRange = (start: number, end: number) => {
  return Array(end - start + 1).fill(1).map((_, index) => {
    return start + index;
  })
}