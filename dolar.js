async function getDollar() {
    try {
        const resposta = await axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL");

        const dolar = resposta.data["USDBRL"].bid;
        const variacao = resposta.data["USDBRL"].varBid;

        document.getElementById('cotacao').innerHTML = `
            Cotação atual do dólar: <b>R$ ${parseFloat(dolar).toFixed(2)}</b><br>
            <b>Variação:</b> ${parseFloat(variacao).toFixed(2)}
        `;
    } catch (error) {
        document.getElementById('cotacao').innerText = "Erro ao consultar o dólar!";
    }
}
