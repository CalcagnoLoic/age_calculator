import { isValidDay } from "../utils/isValidDay.js";
import { showingErrorMessage } from "../helpers/showingErrorMessage.js";

export const validateDayField = (day: HTMLInputElement): boolean => {
  const dayElement = document.getElementById("day");

  if (dayElement) {
    if (day.value.trim() == "") {
      showingErrorMessage(
        dayElement,
        "The field is required",
        "hsl(0, 100%, 67%)",
      );
      return false;
    } else if (isValidDay(Number(day.value.trim())) == false) {
      showingErrorMessage(
        dayElement,
        "Must be a valid day",
        "hsl(0, 100%, 67%)",
      );
      return false;
    } else {
      showingErrorMessage(dayElement, " ", "hsl(0, 1%, 44%)");
      return true;
    }
  }

  return true;
};
