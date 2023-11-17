/***************************************************** */
/* Récupération des infos des inputs + éléments du DOM */
/***************************************************** */
const day = document.getElementById("day").value;
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;
const birthday_date = `${day}/${month}/${year}`;

const year_result = document.getElementById("year_result");
const month_result = document.getElementById("month_result");
const day_result = document.getElementById("day_result");

const button = document.getElementById("btn");
const button_refresh = document.getElementById("btn_refresh");

/************************************************* */
/* Ajout de l'évènement au click + calcul de l'age */
/************************************************* */
button.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateDayField() && validateMonthField() && validateYearField()) {
        calculationAge();
    } else {
        return;
    }
});

button_refresh.addEventListener("click", () => {
    refresh();
});

/************************************************/
/* Créations des différentes fonctions de l'app */
/************************************************/

/**
 * Calculate age with data coming from fields.
 * @returns {number} The result of calculation is displayed thanks to DOM
 */
const calculationAge = () => {
    let years = Math.abs(new Date().getFullYear() - Number(year));
    let months = Math.abs(new Date().getMonth() - Number(month));
    let days = Math.abs(new Date().getDate() - Number(day));

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
    d > 31 || d < 1 ? false : true;
};
/**
 *
 * @returns
 */
const validateDayField = () => {
    if (day.trim() === "") {
        showingErrorMessage(
            document.getElementById("day"),
            "The field is required",
            "border-ligth_red"
        );
        return false;
    } else if (isValidDay(day.trim())) {
        showingErrorMessage(
            document.getElementById("day"),
            "Must be a valid day",
            "border-ligth_red"
        );
        return false;
    } else {
        showingErrorMessage(document.getElementById("day"), "", "");
        return true;
    }
};

/**
 * Check if the number between 1 and 12
 * @param {number} m - Value coming from month's field
 * @return {boolean} Boolean according the field's value
 */
const isValidMonth = (m) => {
    m > 12 || m < 1 ? false : true;
};
const validateMonthField = () => {
    if (month.trim() === "") {
        showingErrorMessage(
            document.getElementById("month"),
            "The field is required",
            "border-ligth_red"
        );
        return false;
    } else if (isValidMonth(month.trim())) {
        showingErrorMessage(
            document.getElementById("month"),
            "Must be a valid month",
            "border-ligth_red"
        );
        return false;
    } else {
        showingErrorMessage(document.getElementById("month"), "", "");
        return true;
    }
};

/**
 * Check if the number between 1 and 12 and not in the future
 * @param {number} birthday_date - Value coming from field
 * @return {boolean} Boolean according the field's value
 */
const isValidYear = (birthday_date) => {
    new Date(birthday_date).setHours(0, 0, 0, 0) >
    new Date().setHours(0, 0, 0, 0)
        ? false
        : true;
};
/**
 *
 * @returns
 */
const validateYearField = () => {
    if (year.trim() === "") {
        showingErrorMessage(
            document.getElementById("year"),
            "The field is required",
            "border-ligth_red"
        );
        return false;
    } else if (
        (year.trim() < new Date().getFullYear || year.trim() > 1900) &&
        isValidYear(year.trim())
    ) {
        showingErrorMessage(
            document.getElementById("year"),
            "Must be a valid year",
            "border-ligth_red"
        );
        return false;
    } else {
        showingErrorMessage(document.getElementById("month"), "", "");
        return true;
    }
};

/**
 * Refresh the result of calculation
 */
const refresh = () => {
    location.reload();
};

/**
 * Allows to display an error message with style according the status of fields
 * @param {Node} elem - The node where change is needed
 * @param {String} text - The text that appears below the field if there is any error
 * @param {String} style - The style for the fields if there is any error
 */
const showingErrorMessage = (elem, text, style) => {
    elem.previousElementSibling.style.color = "text-light_red";
    elem.nextElementSibling.innerText = text;
    elem.style.border = style;
};
