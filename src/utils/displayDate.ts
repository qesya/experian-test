const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const displayDate = (epoch: number) => {
  const date = new Date(epoch);
  return (
    date.getDate() +
    ' ' +
    monthNames[date.getMonth()] +
    ' ' +
    date.getFullYear()
  );
};
