$(document).ready(function() {
    // Function to populate select elements with countries
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

    // Function to perform currency conversion
    function convertCurrency() {
        const inputCurrency = $('#input_currency').val();
        const outputCurrency = $('#output_currency').val();
        const amount = parseFloat($('#input_amount').val());

        if (inputCurrency && outputCurrency && !isNaN(amount)) {
            const exchangeRates = {
                "USD": 1.0,
                "EUR": 0.85,
                "GBP": 0.72,
                "JPY": 110.21,
                "CAD": 1.25,
                "AUD": 1.30,
                "CHF": 0.92,
                "CNY": 6.47,
                "INR": 73.68,
                "SGD": 1.35,
                "KRW": 1156.70,
                "MXN": 20.06,
                "BRL": 5.34,
                "RUB": 74.85,
                "ZAR": 14.57,
                "NGN": 410.00 
            };

            const convertedAmount = (amount / exchangeRates[inputCurrency]) * exchangeRates[outputCurrency];
            $('#output_amount').val(convertedAmount.toFixed(2));
        } else {
            alert('Please select input and output currencies, and enter a valid amount.');
        }
    }

    $('#convertButton').click(function() {
        convertCurrency();
    });

    $('#checkRateButton').click(function() {
        const exchangeRates = {
            "USD": 1.0,
            "EUR": 0.85,
            "GBP": 0.72,
            "JPY": 110.21,
            "CAD": 1.25,
            "AUD": 1.30,
            "CHF": 0.92,
            "CNY": 6.47,
            "INR": 73.68,
            "SGD": 1.35,
            "KRW": 1156.70,
            "MXN": 20.06,
            "BRL": 5.34,
            "RUB": 74.85,
            "ZAR": 14.57,
            "NGN": 410.00 
        };

        $('#conversionRates').empty();
        for (const currency in exchangeRates) {
            $('#conversionRates').append(`<p>${currency}: ${exchangeRates[currency]}</p>`);
        }

        // Open sidebar after showing rates
        $('#sidebar').width(250);
    });

    // Close sidebar when close button is clicked
    $('#closeSidebar').click(function() {
        $('#sidebar').width(0);
    });
});



