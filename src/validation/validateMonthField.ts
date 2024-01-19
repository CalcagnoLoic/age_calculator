import { isValidMonth } from "../utils/isValidMonth.js";
import { showingErrorMessage } from "../helpers/showingErrorMessage.js";

export const validateMonthField = (month: HTMLInputElement): boolean => {
  const monthElement = document.getElementById("month");

  if (monthElement) {
    if (month.value.trim() == "") {
      showingErrorMessage(
        monthElement,
        "The field is required",
        "hsl(0, 100%, 67%)",
      );
      return false;
    } else if (isValidMonth(Number(month.value.trim())) == false) {
      showingErrorMessage(
        monthElement,
        "Must be a valid month",
        "hsl(0, 100%, 67%)",
      );
      return false;
    } else {
      showingErrorMessage(monthElement, " ", "hsl(0, 1%, 44%)");
      return true;
    }
  }

  return true;
};
