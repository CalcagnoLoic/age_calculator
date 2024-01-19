import { calculationAge } from "../helpers/calculationAge.js";

export const displayAge = (
  year: HTMLInputElement,
  month: HTMLInputElement,
  day: HTMLInputElement,
): void => {
  const year_result = document.getElementById("year_result");
  const month_result = document.getElementById("month_result");
  const day_result = document.getElementById("day_result");
  const { years, months, days } = calculationAge(year, month, day);

  if (year_result && month_result && day_result) {
    year_result.innerText = years.toString();
    month_result.innerText = months.toString();
    day_result.innerText = days.toString();
  }
};
