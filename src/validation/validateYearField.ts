import { isValidYear } from "../utils/isValidYear.js";
import { showingErrorMessage } from "../helpers/showingErrorMessage.js";

export const validateYearField = (year: HTMLInputElement) => {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    if (year.value.trim() == "") {
      showingErrorMessage(
        yearElement,
        "The field is required",
        "hsl(0, 100%, 67%)",
      );
      return false;
    } else if (
      (Number(year.value.trim()) < new Date().getFullYear() ||
        Number(year.value.trim()) > 1900) &&
      isValidYear(Number(year.value.trim()))
    ) {
      showingErrorMessage(
        yearElement,
        "Mustn't be a future year",
        "hsl(0, 100%, 67%)",
      );
      return false;
    } else {
      showingErrorMessage(yearElement, " ", "hsl(0, 1%, 44%)");
      return true;
    }
  }

  return true;
};
