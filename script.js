let choice = prompt('¿USDT, BITCOIN, ETHEREUM?');
choice = choice.toLowerCase();

if (choice === 'usdt') {
    let quantity = parseFloat(prompt('¿how many USDT you got?'));
    let calc = quantity / 1.10;
    console.log(`${quantity} USDT = ${calc} EUR`);
    document.querySelector('#result').innerHTML = `${quantity} USDT = ${calc} EUR`;


} else if (choice === 'bitcoin') {
    let quantity = parseFloat(prompt('¿How many BTC you got?'));
    let btc = parseFloat(prompt('¿Current Price in EUR?'));
    let calc = quantity * btc;
    console.log(`${quantity} Bitcoins = ${quantity} EUR`);
    document.querySelector('#result').innerHTML = `${quantity} Bitcoins = ${calc} EUR`;


} else if (choice === 'ethereum') {
    let quantity = parseFloat(prompt('¿How many ETH you got?'));
    let eth = parseFloat(prompt('¿Current ETH price?'));
    let calc = quantity * eth;
    console.log(`${quantity} Ethereum = ${calc} EUR`);
    document.querySelector('#result').innerHTML = `${quantity} Ethereum = ${calc} EUR`;


} else {
    console.log('unknow currency');
    document.querySelector('#result').innerHTML = 'To try again refresh the page';
    alert ("UNKNOW CURRENCY")
}

