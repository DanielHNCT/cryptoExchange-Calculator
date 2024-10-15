const readline = require('readline');

// Créer une interface de lecture pour le terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fonction pour demander une entrée utilisateur
function demander(question) {
    return new Promise((resolve) => {
        rl.question(question, (response) => {
            resolve(response);
        });
    });
}

// Fonction principale
async function main() {
    const choix = await demander('¿USDT, BITCOIN, ETHEREUM? ');
    const quantity = await demander(`¿Combien de ${choix} avez-vous ? `);

    if (choix.toLowerCase() === 'usdt') {
        const calc = quantity / 1.10;
        console.log(`${quantity} USDT = ${calc} EUR`);
    } else if (choix.toLowerCase() === 'bitcoin') {
        const btc = await demander('¿Prix actuel en EUR ? ');
        const calc = quantity * btc;
        console.log(`${quantity} Bitcoins = ${calc} EUR`);
    } else if (choix.toLowerCase() === 'ethereum') {
        const eth = await demander('¿Prix actuel ETH ? ');
        const calc = quantity * eth;
        console.log(`${quantity} Ethereum = ${calc} EUR`);
    } else {
        console.log('Monnaie inconnue. Veuillez réessayer.');
    }

    // Ferme l'interface de lecture
    rl.close();
}

// Exécute la fonction principale
main();
