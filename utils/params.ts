export const parsedParamsSort = (sort?: string) => {
  try{
    if (!sort)  {
      return null;
    };
    const splitString = sort.split('-');
    return {
      key: splitString[0],
      sort: splitString[1]
    }
  }catch(err) {
    return null;
  }
}