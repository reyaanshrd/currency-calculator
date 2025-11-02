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
}