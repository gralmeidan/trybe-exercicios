const fetchCoins = async () => {
  const list = document.getElementById('coinsList');
  const API_URL = 'https://api.coincap.io/v2/assets';
  const coins = await fetch(API_URL)
    .then((response) => response.json())
    .then(({ data }) => data.slice(0, 10))
    .catch((error) => console.error(`Erro: \n${error}`));

  coins.forEach(({name, priceUsd, symbol}) => {
    const li = document.createElement('li');
    li.innerText = `${name} (${symbol}): ${priceUsd}`;
    list.appendChild(li);
  })
};

window.onload = fetchCoins;
