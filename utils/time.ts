import moment from 'moment';
export const getMinutesAndSeconds = (seconds: number) => {
  return moment.utc(seconds * 1000).format('mm:ss');
}

export const getFullDate = (milliseconds: number) => {
  return moment(milliseconds).format('DD-MM-YYYY');
}