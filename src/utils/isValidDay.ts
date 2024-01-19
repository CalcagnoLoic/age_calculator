export const isValidDay = (d: number): boolean => {
  return d > 31 || d < 1 ? false : true;
};
