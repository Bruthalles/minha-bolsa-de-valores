const axios = require('axios');

async function getBitcoinPrice() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const price = response.data.bitcoin.usd;
        console.log(`O preço atual do Bitcoin é $${price}`);
    } catch (error) {
        console.error('Erro ao buscar o preço do Bitcoin:', error.message);
    }
}

getBitcoinPrice();
