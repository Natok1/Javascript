let conexoesLinkedIn = [
        { iniciais: "ARB", link: "aHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vYWxhbi1yZXluYWxkby8=" },
        { iniciais: "MAD", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21hcmluYS1hbGJhbm8tZG9uYXRvLTViNDEzNjI5Ny8=" },
        { iniciais: "VBBDA", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3ZpbmlpYm9yZG9uLw==" },
        { iniciais: "MS", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21taXd3YS8=" },
        { iniciais: "GDR", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2d1aWxoZXJtZS1kYS1yb3NhLTZiNzNhNjMyNC8=" },
        { iniciais: "MD", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RhbWF0b21vcy8=" },
        { iniciais: "IMDS", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2l6YWJlbGx5LW1lbmRlcy1pbmZvcm1hdGljYS8=" },
        { iniciais: "KR", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2theWtlcmF5cGhlci8=" },
        { iniciais: "RC", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JhaWFsYWNhcnZhbGhvYXJhdWpvLw==" },
        { iniciais: "MFDSR", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21hcmlhLWZsw6F2aWEtZGEtc2lsdmEtcmliZWlyby1hYTMwMTkxNzAv" },
        { iniciais: "EPDO", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2VsaXppYW5lcGFzc29zLw==" },
        { iniciais: "LL", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xldGljaWFsZW1lLWRldi8=" },
        { iniciais: "ABF", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FuYWJlYXRyaXpiZm9uc2VjYS8=" },
        { iniciais: "SH", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3N1aWFuZWhlbnJpY2hzLw==" },
        { iniciais: "NR", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL25vZWxsZW4tcm9kcmlndWVzLTliYTczMTM0Ni8=" },
        { iniciais: "KLDC", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2thbWlseWxhY2VyZGEv" },
        { iniciais: "MDC", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21hdGhldXMtZGFtYWNlbmEtY2FydmFsaG8tMTliYjc0MjU1Lw==" },
        { iniciais: "MP", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21hdGhldXNzb3BpbmhlaXJvLw==" },
        { iniciais: "IC", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2l2aXNzb24tY2VzYXIv" },
        { iniciais: "GLEG", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2dlcnNnLw==" },
        { iniciais: "AR", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FsbGlzb24tcmliZWlyby00MjM4MDRhNy8=" },
        { iniciais: "YH", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3lnb3ItaGVybmFuZGV6LWRldi8=" },
        { iniciais: "LT", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2x1YW5hLXRhbWF0dXJnby02NTNhYjYxYWEv" },
        { iniciais: "LX", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2x1Y2FzLXhhdmllcjkv" },
        { iniciais: "ISSS", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2luZ3JpZHNvbGFuLw==" },
        { iniciais: "AS", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FuZHJlaWEtc2VtZWRvLWE2NDEwYjIzNC8=" },
        { iniciais: "LO", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2x1aXMtb2N0YXZpby8=" },
        { iniciais: "AC", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FuYWdzd2FjYXJvbGluYS8=" },
        { iniciais: "LM", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2x1YW5hbWFyaWEtZGV2Lw==" },
        { iniciais: "ALO", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2x1aXphZGFzby8=" },
        { iniciais: "CC", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2NsYXVkaWEtY2FwZWxldHRpLTMxNzU2NDI5YS8=" },
        { iniciais: "RL", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JvZ2VyLWxlb25lbC8=" },
        { iniciais: "TO", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3RoYWxpdGFkdi8=" },
        { iniciais: "BDFC", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Jlcm5hcmQzMDEwOTQv" },
        { iniciais: "CL", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Nhcm9sLWxhdmluaWEtMTY2NDEwMjg3Lw==" },
        { iniciais: "WC", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dlbmRlcnNvbi1jdW5oYS1iNmI2ODYyMzUv" },
        { iniciais: "VMDF", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3ZpdG9yLWZyZWl0YXMxLw==" },
        { iniciais: "GS", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Nvc3RhZ3VzdGF2b3NvdXphLw==" },
        { iniciais: "MENV", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2VkdWFyZGF2ZW50dXJhZGV2Lw==" },
        { iniciais: "GF", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2dmb2NoaWVyLw==" },
        { iniciais: "PLGDC", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3BlZHJvbHVjYXNncmFjaWFub2NhbXBvcy8=" },
        { iniciais: "YZ", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3lhc21pbi16YXJyby8=" },
        { iniciais: "FS", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2ZpbGlwZS1zYW50b3MtMDY5M2E3MzQ1Lw==" },
        { iniciais: "JF", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2p1LWZlcm5hbmRlcy8=" },
        { iniciais: "LM", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xldMOtY2lhLW1vcmV0dGlzLw==" },
        { iniciais: "LDAF", link: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xldGljaWEtZGUtdWFsbWVpZGEtZmVycmVpcmEtMTgwODZhMTgwLw==" }
    ];

let amigos = []; // Lista para armazenar os nomes inseridos
let incluirConexoes = true; // responsável por sincronizar o icone com a lógica por trás, caso fosse false seria desincronizado com as imagens.
let sorteioConexoes = {}; // Objeto para contar os sorteios de cada conexão
let totalConexoes = conexoesLinkedIn.length; // linhas em conexoesLinkedIn
let contadorConexoesSorteadas = 0;

// Inicializa o contador de sorteios para cada conexão
conexoesLinkedIn.forEach(conexao => {
    sorteioConexoes[conexao.iniciais] = 0;
});

// Para incentivar a pessoa continuar jogando, criei mensagens que aparecem à cada sorteio
const inicioMensagem = "Ei, olha só quem você tirou!";
const mensagensResultado = [
    `${inicioMensagem} Será que vocês já estão conectados? 🤔`,
    `${inicioMensagem} Se o sorteado for você, sabe o que significa ? Eu não sei também. 😅`,
    `${inicioMensagem} Que tal enviar uma mensagem e começar uma nova conexão ? 💼`,
    `${inicioMensagem} Já pensou em colaborar em um projeto juntos ? 🚀`,
    `${inicioMensagem} Quem sabe essa é a chance de fortalecer sua rede! 🌐`,
    `${inicioMensagem} Será que é hora de um café virtual ? ☕`,
    `${inicioMensagem} Que tal um 'Oi, tudo bem?' no LinkedIn 👋`,
    `${inicioMensagem} Networking nunca é demais, né ? 💬`,
    `${inicioMensagem} Seu primeiro olá pode ser um print do sorteio 😗`,
    `${inicioMensagem} Será que é aluno(a) da ONE G8 ? 👀`,
    `${inicioMensagem} Vai lá dar um oi !!! 🤗 Não tente platinar meu estoque de mensagens viu`,
    `${inicioMensagem} Networking se constrói todo dia... e um sorteio pode ser só o empurrão que faltava! 😉`,
    `${inicioMensagem} Aproveita e adiciona no LinkedIn antes que o destino(math.random) mude de ideia! 🔄`,
    `${inicioMensagem} Networking se faz no dia a dia... e nos sorteios também! 😉`,
    `${inicioMensagem} Será que essa conexão pode te ajudar no próximo desafio? 🔥`,
    `${inicioMensagem} Se o LinkedIn fosse um jogo, essa seria sua chance de desbloquear um novo aliado! 🏆`, // a mensagem que eu mais gostei não foi eu que fiz :`(
    `${inicioMensagem} Conexões acontecem por acaso… ou por sorteio! 🍀`,
    `${inicioMensagem} Pode ser só um sorteio, mas toda conexão tem potencial! 🌍`,
]

const mensagemEspecial = `Eu tenho 42% de certeza que esse já faz parte da sua rede 😅 obrigado por participar ❤️`;

// Função para adicionar à lista manual
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome) { // Verifica se o nome não está vazio
        amigos.push(nome); // Adiciona o nome à lista (permite duplicados)
        atualizarLista(); // Atualiza a exibição da lista
        input.value = ""; // Limpa o campo de entrada
    }
}

// Evento de tecla "Enter" para adicionar um amigo
document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

// Função para atualizar a lista de participantes
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista

    // Exibe o total de participantes
    let total = document.createElement("li");
    total.classList.add("total-participantes"); // Adiciona a classe CSS

    // Verifica se as conexões devem ser incluídas
    let textoTotal = `Total: ${amigos.length} amigos`;
    if (incluirConexoes) { // Verifica se o ícone está ativo
        textoTotal += ` + ${conexoesLinkedIn.length} conexões`;
    }

    total.textContent = textoTotal; // Define o texto
    lista.appendChild(total); // Adiciona à lista
}

// Função para resetar a lista manual
function resetarListaManual() {
    amigos = []; // Limpa a lista de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpa a exibição da lista
}

document.querySelector(".img-container button").addEventListener("click", function () {
    let headerBanner = document.getElementById("headerBanner");
    let imagemAtual = headerBanner.querySelector("img");

    // Alterna a imagem
    if (imagemAtual.src.includes("fundo-cinza.png")) {
        imagemAtual.src = "assets/conexao.png"; // Ícone aceso
        incluirConexoes = true; // Conexões ativas
    } else {
        imagemAtual.src = "assets/fundo-cinza.png"; // Ícone apagado
        incluirConexoes = false; // Conexões desativadas
    }
});

// Função para sortear um amigo ou conexão
// Função para sortear um amigo ou conexão
function sortearAmigo() {
    let listaSorteio = [...amigos]; // Cria uma cópia da lista de amigos

    // Adiciona as conexões do LinkedIn à lista de sorteio apenas se incluirConexoes for true
    if (incluirConexoes) {
        // Filtra as conexões que ainda podem ser sorteadas (até 3 vezes)
        listaSorteio = listaSorteio.concat(conexoesLinkedIn.filter(conexao => {
            return sorteioConexoes[conexao.iniciais] < 3; // Limita a 3 sorteios por conexão
        }));
    }

    // Verifica se há participantes disponíveis para o sorteio
    if (listaSorteio.length === 0) {
        alert("Nenhum participante disponível para o sorteio.");
        return;
    }

    // Sorteia um participante
    let indiceSorteado = Math.floor(Math.random() * listaSorteio.length);
    let sorteado = listaSorteio[indiceSorteado];

    // Atualiza os contadores
    if (incluirConexoes && typeof sorteado !== "string") { // Se for uma conexão do LinkedIn
        if (sorteioConexoes[sorteado.iniciais] === 0) { // Verifica se é a primeira vez que a conexão é sorteada
            contadorConexoesSorteadas++; // Incrementa o contador global apenas na primeira vez
        }
        sorteioConexoes[sorteado.iniciais]++; // Incrementa o contador individual da conexão
    }

    // Exibe o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado anterior

    if (typeof sorteado === "string") { // nome digitado
        resultado.innerHTML = `<li>🎉 ${sorteado} 🎉</li>`;
    } else { // Se for uma conexão do LinkedIn
        let linkDecodificado = atob(sorteado.link); // decodifica o link 
        resultado.innerHTML = `
            <li>
                <a href="${linkDecodificado}" target="_blank" style="color: inherit; text-decoration: none; cursor: pointer;">
                   🎊  ${sorteado.iniciais} 🎊 
                </a>
            </li>
            <li>${formatarContador()}</li> <!-- Exibe o contador no formato 00|46 -->
        `;

        // Exibe uma mensagem de resultado
        if (incluirConexoes) {
            let mensagem;
            if (sorteado.iniciais === "ARB") { // Exceção para quando você for sorteado
                mensagem = mensagemEspecial;
            } else {
                mensagem = mensagensResultado[Math.floor(Math.random() * mensagensResultado.length)];
            }
            resultado.innerHTML += `<li class="mensagem-aleatoria">${mensagem}</li>`;
        }
    }
}

function formatarContador() {
    let contadorConexao = contadorConexoesSorteadas.toString().padStart(2, "0"); // Número de conexões sorteadas pela primeira vez
    let contadorTotal = totalConexoes.toString().padStart(2, "0"); // Número total de conexões
    return `${contadorConexao}|${contadorTotal}`;
}