let food = document.getElementById("food");
let beer = document.getElementById("beer");
let soda = document.getElementById("soda");

let numberAdults = document.getElementById("adults");
let numberChilds = document.getElementById("childs");
let partyTime = document.getElementById("partyTime");


function result () {
    food.innerHTML = "Total beef " + beefCalculation () + "Kg";
    beer.innerHTML = "Total beer " + beerCalculation () + "l";
    soda.innerHTML = "Total soda " + sodaCalculation () + "l";
}


function beefCalculation (){
    if (partyTime.value >= 6) {
        return Math.round((0.6 * numberAdults.value) + (0.6 * numberChilds.value / 2 ));
    } else {
        return Math.round((0.4 * numberAdults.value) + (0.4 * numberChilds.value / 2 ));
    }
}


function beerCalculation (){
    if (partyTime.value >= 6) {
        return Math.round(2 * numberAdults.value);
    } else {
        return Math.round(1.2 * numberAdults.value);
    }
}

function sodaCalculation (){
    if (partyTime.value >= 6) {
        return Math.ceil(((1.5 * numberAdults.value) + (1.5 * numberChilds.value / 2 )) / 2 );
    } else {
        return Math.ceil(((1 * numberAdults.value) + (1 * numberChilds.value / 2 )) / 2);
    }
}