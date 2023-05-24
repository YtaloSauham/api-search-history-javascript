const axios = require('axios');

const query = "Black Sabbath";
const maxItems = 3;
// const fileType = 'PDF';
const payload = { q: query };
const url = new URL('https://arquivo.pt/textsearch');
url.search = new URLSearchParams(payload).toString();

axios.get(url)
    .then(response => {

        let itemsCount = 0;

        if (Array.isArray(response.data)) {
            itemsCount = response.data.length;
        } else if (typeof response.data === 'object') {
            itemsCount = Object.keys(response.data.response_items).length;
        } else {
            console.log('Estrutura de dados não reconhecida:', response.data.response_items);
        }

        console.log("Total de itens retornados:" + itemsCount);
    })
    .catch(error => {
        console.error("Erro:", error);
    });
