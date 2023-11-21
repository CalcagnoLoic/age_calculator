/***************************************************** */
/* Récupération des infos des inputs + éléments du DOM */
/***************************************************** */
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const birthday_date = new Date(`${day}/${month}/${year}`);

const year_result = document.getElementById("year_result");
const month_result = document.getElementById("month_result");
const day_result = document.getElementById("day_result");

const button = document.getElementById("btn");

/************************************************* */
/* Ajout de l'évènement au click + calcul de l'age */
/************************************************* */
button.addEventListener("click", (e) => {
    validateDayField();
    validateMonthField();
    validateYearField();

    if (validateDayField() && validateMonthField() && validateYearField()) {
        calculationAge();
    }
    e.preventDefault();
});

/************************************************/
/* Créations des différentes fonctions de l'app */
/************************************************/

/**
 * Calculate age with data coming from fields.
 * @returns {number} The result of calculation is displayed thanks to DOM
 */
const calculationAge = () => {
    let years = Math.abs(new Date().getFullYear() - Number(year.value));
    let months = Math.abs(new Date().getMonth() + 1 - Number(month.value));
    let days = Math.abs(new Date().getDate() - Number(day.value));

    year_result.innerText = years;
    month_result.innerText = months;
    day_result.innerText = days;
};

/**
 * Check if the number between 1 and 31
 * @param {number} d - Value coming from day's field
 * @return {boolean} Boolean according the field's value
 */
const isValidDay = (d) => {
    return d > 31 || d < 1 ? false : true;
};
/**
 * Check the validity of the day's field
 * @returns {boolean}
 */
const validateDayField = () => {
    if (day.value.trim() == "") {
        showingErrorMessage(
            document.getElementById("day"),
            "The field is required",
            "hsl(0, 100%, 67%)"
        );
        return false;
    } else if (isValidDay(day.value.trim()) == false) {
        showingErrorMessage(
            document.getElementById("day"),
            "Must be a valid day",
            "hsl(0, 100%, 67%)"
        );
        return false;
    } else {
        showingErrorMessage(
            document.getElementById("day"),
            " ",
            "hsl(0, 1%, 44%)"
        );
        return true;
    }
};

/**
 * Check if the number between 1 and 12
 * @param {number} m - Value coming from month's field
 * @return {boolean} Boolean according the field's value
 */
const isValidMonth = (m) => {
    return m > 12 || m < 1 ? false : true;
};
/**
 * Check the validity of the month's field
 * @returns {boolean}
 */
const validateMonthField = () => {
    if (month.value.trim() == "") {
        showingErrorMessage(
            document.getElementById("month"),
            "The field is required",
            "hsl(0, 100%, 67%)"
        );
        return false;
    } else if (isValidMonth(month.value.trim()) == false) {
        showingErrorMessage(
            document.getElementById("month"),
            "Must be a valid month",
            "hsl(0, 100%, 67%)"
        );
        return false;
    } else {
        showingErrorMessage(
            document.getElementById("month"),
            " ",
            "hsl(0, 1%, 44%)"
        );
        return true;
    }
};

/**
 * Check if the number is not in the future
 * @param {number} y - Value coming from field
 * @return {boolean} Boolean according the field's value
 */
const isValidYear = (y) => {
    return new Date(y).getTime() > new Date().getTime() ? true : false;
};
/**
 * Check the validity of the year's field
 * @returns {boolean}
 */
const validateYearField = () => {
    if (year.value.trim() == "") {
        showingErrorMessage(
            document.getElementById("year"),
            "The field is required",
            "hsl(0, 100%, 67%)"
        );
        return false;
    } else if (
        (year.value.trim() < new Date().getFullYear ||
            year.value.trim() > 1900) &&
        isValidYear(year.value.trim())
    ) {
        showingErrorMessage(
            document.getElementById("year"),
            "Mustn't be a future year",
            "hsl(0, 100%, 67%)"
        );
        return false;
    } else {
        showingErrorMessage(
            document.getElementById("year"),
            " ",
            "hsl(0, 1%, 44%)"
        );
        return true;
    }
};

/**
 * Allows to display an error message with style according the status of fields
 * @param {Node} elem - The node where change is needed
 * @param {String} text - The text that appears below the field if there is any error
 * @param {String} color - The color of (no-)error message
 */
const showingErrorMessage = (elem, text, color) => {
    elem.previousElementSibling.style.color = color;
    elem.nextElementSibling.innerText = text;
    elem.style.border = `2px solid ${color}`;
};
