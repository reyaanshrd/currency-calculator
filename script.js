var currency_from = ""
var currency_to = ""
var input_currency = 0
var output_currency = 0
function convert() {
    currency_from = document.getElementById("fc").value 
    currency_to = document.getElementById("sc").value 
    input_currency = document.getElementById("oneinput").value
    output_currency = document.getElementById("twoinput").value
    if (currency_from=="AED" && currency_to=="USD") {
        output_currency = input_currency*0.27
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="AED" && currency_to=="EUR") {
        output_currency = input_currency*0.24
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="AED" && currency_to=="JPY") {
        output_currency = input_currency*41.98
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="AED" && currency_to=="GBP") {
        output_currency = input_currency*0.21
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="AED" && currency_to=="CAD") {
        output_currency = input_currency*0.38
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="AED" && currency_to=="CNY") {
        output_currency = input_currency*1.94
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="AED" && currency_to=="INR") {
        output_currency = input_currency*24.17
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="AED" && currency_to=="CHF") {
        output_currency = input_currency*0.22
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="AED" && currency_to=="BRL") {
        output_currency = input_currency*1.46
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="AED" && currency_to=="ZAR") {
        output_currency = input_currency*4.74
        document.getElementById("twoinput").innerHTML=output_currency
    }
}