export const isValidYear = (y: number): boolean => {
  const currentYear = new Date().getFullYear();
  return y >= currentYear;
};
