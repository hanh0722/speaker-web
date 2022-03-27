import moment from 'moment';
export const getMinutesAndSeconds = (seconds: number) => {
  return moment.utc(seconds * 1000).format('mm:ss');
}