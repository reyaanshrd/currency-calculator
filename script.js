var currency_from = ""
var currency_to = ""
var input_currency = 0
var output_currency = 0
function convert() {
    currency_from = document.getElementById("fc").value 
    currency_to = document.getElementById("sc").value 
    input_currency = document.getElementById("oneinput").value
    output_currency = document.getElementById("twoinput").value
    //1st currency
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
    //2nd currency
    if (currency_from=="USD" && currency_to=="AED") {
        output_currency = input_currency*3.67
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="USD" && currency_to=="EUR") {
        output_currency = input_currency*0.85
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="USD" && currency_to=="JPY") {
        output_currency = input_currency*155.75
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="USD" && currency_to=="GBP") {
        output_currency = input_currency*0.75
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="USD" && currency_to=="CAD") {
        output_currency = input_currency*1.38
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="USD" && currency_to=="CNY") {
        output_currency = input_currency*7.05
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="USD" && currency_to=="INR") {
        output_currency = input_currency*90.57
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="USD" && currency_to=="CHF") {
        output_currency = input_currency*0.8
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="USD" && currency_to=="BRL") {
        output_currency = input_currency*5.42
        document.getElementById("twoinput").innerHTML=output_currency
    }
    if (currency_from=="USD" && currency_to=="ZAR") {
        output_currency = input_currency*16.88
        document.getElementById("twoinput").innerHTML=output_currency
    }
}