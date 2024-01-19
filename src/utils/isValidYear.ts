export const isValidYear = (y: number): boolean => {
  return new Date(y).getTime() > new Date().getTime() ? true : false;
};
