export const isValidMonth = (m: number) => {
  return m > 12 || m < 1 ? false : true;
};
