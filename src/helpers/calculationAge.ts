export const calculationAge = (
  yearInput: HTMLInputElement,
  monthInput: HTMLInputElement,
  dayInput: HTMLInputElement,
): { years: number; months: number; days: number } => {
  const years = Math.abs(new Date().getFullYear() - Number(yearInput.value));
  const months = Math.abs(new Date().getMonth() + 1 - Number(monthInput.value));
  const days = Math.abs(new Date().getDate() - Number(dayInput.value));

  return { years, months, days };
};
