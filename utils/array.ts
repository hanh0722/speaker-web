export const generateArray = (quantity: number) => {
    return [...Array.from(Array(quantity).keys())];
}