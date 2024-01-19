import { displayAge } from "./utils/displayAge.js";
import { validateDayField } from "./validation/validateDayField.js";
import { validateMonthField } from "./validation/validateMonthField.js";
import { validateYearField } from "./validation/validateYearField.js";

const handleClick = (): void => {
  const form = document.querySelector("form");
  const button = document.getElementById("btn") as HTMLButtonElement;
  const day = document.getElementById("day") as HTMLInputElement;
  const month = document.getElementById("month") as HTMLInputElement;
  const year = document.getElementById("year") as HTMLInputElement;

  button?.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();

    const isDayFieldValid = validateDayField(day);
    const isMonthFieldValid = validateMonthField(month);
    const isYearFieldValid = validateYearField(year);

    if (isDayFieldValid && isMonthFieldValid && isYearFieldValid) {
      displayAge(year, month, day);

      form?.reset();
    }
  });
};

handleClick();
