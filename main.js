const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0850f5fa23msh32a1da48681f49bp1e14a8jsn298ebe3bcdc3',
		'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
	}
};

fetch('https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=EUR&amount=1&language=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));