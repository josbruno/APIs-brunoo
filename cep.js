async function getCep() {
    const cep = document.getElementById('cep').value.replace(/\D/g,'');
    const resEl = document.getElementById('resultado');

    if (!cep) { resEl.innerText = "Digite um CEP válido!"; return; }

    try {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (resposta.data.erro) { resEl.innerText = "CEP não encontrado!"; return; }

        const { logradouro, bairro, localidade, uf } = resposta.data;
        resEl.innerHTML = `Endereço: ${logradouro}<br>Bairro: ${bairro}<br>Cidade: ${localidade}<br>UF: ${uf}`;
    } catch {
        resEl.innerText = "Erro ao consultar o CEP!";
    }
}
