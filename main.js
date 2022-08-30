function convertCurrency (intVal,intCur,secCur,exchangeRate){
    intVal = document.getElementById(amount)
    console.log(intVal)
    
    intCur = document.getElementById(currencyOne)
    console.log(intCur)
    
    secCur = document.getElementById(currencyTwo)
    console.log(intCur)

    /*
    Currency Rates
    1 USD = 1.0000346 EUR
    1 EUR = 0.9999624 USD
    1 USD = 10.669387 SEK
    1 SEK = 0.093726093 USD
    1 EUR = 10.668302 SEK
    1 SEK = 0.093737277 EUR
    1 USD = 9.7509159 NOK
    1 NOK = 0.10255447 USD
    1 NOK = 1.0942472 SEK
    1 NOK = 0.1025696 EUR
    1 EUR = 9.7500646 NOK
    1 USD = 7.4398135 DKK
    1 DKK = 0.13441197 USD
    1 DKK = 0.13444977 EUR
    1 EUR = 7.43772 DKK
    1 DKK  = 1.4344208 SEK
    1 SEK = 0.697146 DKK
    1 DKK = 1.3110709 NOK
    1 NOK = 0.762735 DKK


    */

    let symbolLeft=""
    let symbolRight=""
    let delimiter="."  
        switch(secCur){
            case "USD":
                symbolLeft="$"
                break
            case "EUR":
                symbolLeft="€"
                break
            case "GBP":
                symbolLeft="£"
                break
            case "SEK":
                symbolRight="kr"
                break
            case "NOK":
                symbolRight="kr"
                break
            case "DKK":
                symbolRight="kr"
                break
                
        }

        return symbolLeft + ((intVal*exchangeRate).toString().replace(".",delimiter)+symbolRight)
}

