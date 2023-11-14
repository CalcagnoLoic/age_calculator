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


/************************************************* */
/* Ajout de l'évènement au click + calcul de l'age */
/************************************************* */
button.addEventListener("click", (e) => {
    e.preventDefault();

    //Calcul de l'âge
    let years =
        new Date().getFullYear() - new Date(birthday_date).getFullYear();
    let months = new Date().getMonth() - new Date(birthday_date).getMonth();
    let days = new Date().getDate() - Number(day);

    year_result.innerText = years;
    month_result.innerText = months;
    day_result.innerText = days;
});

function refresh(){
    location.reload();
}