function convertCurrency(event, amountInout, currencyFromEle, currencyToEle, outputEle) {
  event.preventDefault();

  let exchangeRate = 0;
  const convertCode = currencyFromEle.value + currencyToEle.value;

  switch (convertCode) {
    case "USDEUR":
      exchangeRate = 1.0000346;
      break;

    case "EURUSD":
      exchangeRate = 0.9999624;
      break;

    case "USDSEK":
      exchangeRate = 10.669387;
      break;

    case "SEKUSD":
      exchangeRate = 0.093726093;
      break;

    case "EURSEK":
      exchangeRate = 10.668302;
      break;

    case "SEKEUR":
      exchangeRate = 0.093737277;
      break;

    case "USDNOK":
         exchangeRate=9.7509159
        break

    case "NOKUSD":
        exchangeRate=.10255447
        break

    case "NOKSEK":
         exchangeRate=1.0942472
         break

    case "NOKEUR":
        exchangeRate=.1025696
         break

    case "EURNOK":
        exchangeRate=9.7500646
         break

    case "USDDKK":
            exchangeRate=7.4398135
            break

    case "DKKUSD":
            exchangeRate=.13441197
             break

    case "DKKEUR":
            exchangeRate=.13444977
            break

    case "EURDKK":
             exchangeRate=7.43772
             break

    case "DKKSEK":
             exchangeRate=1.4344208
             break

    case "SEKDKK":
            exchangeRate=0.697146
             break

    case "DKKNOK":
            exchangeRate=1.3110709
            break

    case "NOKDKK":
             exchangeRate=0.762735
            break
  }

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

  let symbolLeft = "";
  let symbolRight = "";
  let delimiter = ".";
  switch (currencyToEle.value) {
    case "USD":
      symbolLeft = "$";
      break;
    case "EUR":
      symbolLeft = "???";
      break;
    case "GBP":
      symbolLeft = "??";
      break;
    case "SEK":
      symbolRight = "kr";
      break;
    case "NOK":
      symbolRight = "kr";
      break;
    case "DKK":
      symbolRight = "kr";
      break;
  }

  outputEle.innerText =
    symbolLeft +
    ((amountInout.value * exchangeRate).toFixed(2).toString().replace(".", delimiter) + symbolRight);
}
