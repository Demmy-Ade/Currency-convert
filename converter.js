const api = "https://api.exchangerate-api.com/v4/latest/USD";

const fromCurrency = document.getElementById("input_currency");
const toCurrency = document.getElementById("output_currency");
const amountToConvert = document.getElementById("input_amount");
const convertedValue = document.getElementById("output_amount");

let resultfrom;
let resultto;
let amountsearch;
fromCurrency.addEventListener("change",(event)=>{
        resultfrom = `${event.target.value}`;
});

amountToConvert.addEventListener("input", updateValue);

function updateValue(e) {
    amountsearch = e.target.value;
}

toCurrency.addEventListener("change",(event)=>{
    resultto = `${event.target.value}`;
});
function populateCurrencies() {
    const countries = [
        "USD", "EUR", "GBP", "JPY", "CAD", 
        "AUD", "CHF", "CNY", "INR", "SGD", 
        "KRW", "MXN", "BRL", "RUB", "ZAR",
        "NGN" // Nigerian Naira
        // Add more countries here as needed
    ];

    // Loop through each country and add it to select elements
    countries.forEach(function(country) {
        $('#input_currency, #output_currency').append(`<option value="${country}">${country}</option>`);
    });
}

// Populate currencies on page load
populateCurrencies();


const converterbtn = document.getElementById("convertButton");

converterbtn.addEventListener("click", getResults);
function getResults() {
    fetch(`${api}`)
    .then(currency => {
        return currency.json();
    }).then(displayResults);
};

//
function displayResults(currency){
    let fromrate = currency.rates[resultfrom];
    let toRate = currency.rates[resultto];
    console.log(amountsearch);
    convertedValue.value = ((toRate/fromrate) * amountsearch).toFixed(2);


}