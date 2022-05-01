import moment, { DurationInputArg2 } from 'moment';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const getMinutesAndSeconds = (seconds: number) => {
  return moment.utc(seconds * 1000).format('mm:ss');
}

export const getFullDate = (milliseconds: number) => {
  return moment(milliseconds).format('DD-MM-YYYY');
}

export const getFullTimeAfterDays = (days: number, prefix?: DurationInputArg2) => {
  const time = moment().add(days, prefix || 'days');
  const date = time.day();
  return `${daysOfWeek[date]}, ${time.format('DD-MM-YYYY')}`;
}