function convertCurrency (intVal,intCur,secCur,exchangeRate){
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

console.log(convertCurrency(100,"USD","EUR",1.02))