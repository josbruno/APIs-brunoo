async function getWeather() {
    const cidade = document.getElementById('city').value.trim();
    const tempEl = document.getElementById('temperatura');

    if (!cidade) {
        tempEl.innerText = "Digite uma cidade!";
        return;
    }

    try {
        const resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);
        const temp = resposta.data.main.temp;
        tempEl.innerText = `A temperatura em ${cidade} é ${temp.toFixed(0)}°C.`;
    } catch {
        tempEl.innerText = "Cidade não encontrada!";
    }
}
