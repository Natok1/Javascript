let conexoesLinkedIn = [
    { iniciais: "ARB", link: "https://linkedin.com/in/alan-reynaldo" },

    // Adicionar os outros contatos
];

let amigos = []; // Lista para armazenar os nomes inseridos
let incluirConexoes = false; // Estado do interruptor

function alternarConexoes() {
    let icone = document.getElementById("iconeLinkedIn");
    icone.style.opacity = icone.style.opacity === "0" ? "1" : "0";
}


function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Obtém o campo de entrada
    let nome = input.value.trim(); // Obtém o valor e remove espaços extras

    if (nome) { // Verifica se o nome não está vazio
        amigos.push(nome); // Adiciona o nome à lista
        atualizarLista(); // Atualiza a exibição da lista
        input.value = ""; // Limpa o campo de entrada
    }
        
}

document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") { // Verifica se a tecla pressionada foi Enter
        adicionarAmigo(); // Chama a função para adicionar o amigo
    }
});

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    if (amigos.length > 0) {
        let item = document.createElement("li");
        item.textContent = `${amigos.length} + ${conexoesLinkedIn.length}`;
        lista.appendChild(item);
    }
}

function alternarFundo() {
    const headerBanner = document.getElementById('headerBanner');
    if (headerBanner.style.backgroundImage.includes('conexao.png')) {
        headerBanner.style.backgroundImage = "url('assets/conexao-cinza.png')"; // Imagem com ícone cinza
    } else {
        headerBanner.style.backgroundImage = "url('assets/conexao.png')"; // Imagem original
    }
}

function sortearAmigo() {
    let listaSorteio = [...amigos];

    if (incluirConexoes) {
        listaSorteio = listaSorteio.concat(conexoesLinkedIn.map(c => c.iniciais));
    }

    if (listaSorteio.length < 2) {
        alert("Adicione pelo menos dois participantes para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaSorteio.length);
    let sorteado = listaSorteio[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${sorteado}</li>`;
}

