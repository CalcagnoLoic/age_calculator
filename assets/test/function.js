/**
 * Check if the number between 1 and 31
 * @param {number} d - Value coming from day's field
 * @return {boolean} Boolean according the field's value
 */
export const isValidDay = (d) => {
    return d > 31 || d < 1 ? false : true;
};
/**
 * Check the validity of the day's field
 * @returns {boolean}
 */
export const validateDayField = () => {
    if (day.trim() == "") {
        showingErrorMessage(
            document.getElementById("day"),
            "The field is required"
        );
        return false;
    } else if (isValidDay(day.trim()) == false) {
        showingErrorMessage(
            document.getElementById("day"),
            "Must be a valid day"
        );
        return false;
    } else {
        return true;
    }
};

/**
 * Check if the number between 1 and 12
 * @param {number} m - Value coming from month's field
 * @return {boolean} Boolean according the field's value
 */
export const isValidMonth = (m) => {
    return m > 12 || m < 1 ? false : true;
};
/**
 * Check the validity of the month's field
 * @returns {boolean}
 */
export const validateMonthField = () => {
    if (month.trim() == "") {
        showingErrorMessage(
            document.getElementById("month"),
            "The field is required"
        );
        return false;
    } else if (isValidMonth(month.trim())) {
        showingErrorMessage(
            document.getElementById("month"),
            "Must be a valid month"
        );
        return false;
    } else {
        return true;
    }
};

/**
 * Check if the number is not in the future
 * @param {number} birthday_date - Value coming from field
 * @return {boolean} Boolean according the field's value
 */
export const isValidYear = (y) => {
    return new Date(y).setHours(0, 0, 0, 0) >
        new Date().setHours(0, 0, 0, 0)
        ? false
        : true;
};
/**
 * Check the validity of the year's field
 * @returns {boolean}
 */
export const validateYearField = () => {
    if (year.trim() == "") {
        showingErrorMessage(
            document.getElementById("year"),
            "The field is required"
        );
        return false;
    } else if (
        (year.trim() < new Date().getFullYear || year.trim() > 1900) &&
        isValidYear(year.trim())
    ) {
        showingErrorMessage(
            document.getElementById("year"),
            "Must be a valid year"
        );
        return false;
    } else {
        return true;
    }
};
