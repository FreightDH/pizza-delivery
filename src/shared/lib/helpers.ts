export const getFormatDate = (date: Date): string => {
  const day = date.getDate();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const year = date.getFullYear();
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return `${day}.${month}.${year} ${time}`;
};
