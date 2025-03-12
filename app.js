// Array para armazenar os nomes dos amigos
let amigos = [];

// Pega o elemento input uma única vez
const inputAmigo = document.getElementById("amigo");

// Listener para o ENTER no input
inputAmigo.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    adicionarAmigo();
  }
});

// Função para adicionar um amigo
function adicionarAmigo() {
  let nomeAmigo = inputAmigo.value.trim();

  // Validação do nome
  if (!nomeAmigo) {
    alert("Digite o nome do amigo");
    return;
  }

  if (amigos.includes(nomeAmigo)) {
    alert("Este nome já foi adicionado!");
    return;
  }

  // Adiciona ao array e limpa o input
  amigos.push(nomeAmigo);
  inputAmigo.value = "";
  inputAmigo.focus();

  // Atualiza a lista visual
  atualizarlista();

  // ===== EFEITO VISUAL NO BOTÃO =====
  const botaoAdicionar = document.querySelector(".button-add");
  botaoAdicionar.classList.add("click-effect"); // Adiciona classe CSS

  // Remove o efeito após 200ms
  setTimeout(() => {
    botaoAdicionar.classList.remove("click-effect");
  }, 200);
}

// Atualiza a lista de amigos na tela
function atualizarlista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista

  amigos.forEach((amigo) => {
    const item = document.createElement("li");
    item.textContent = amigo;
    listaAmigos.appendChild(item);
  });
}

// Função para sortear
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum amigo adicionado");
    return;
  }

  // Sorteia e exibe o resultado
  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `O amigo sorteado foi: ${amigos[indiceSorteado]}`;

  // Limpa a lista e o array
  document.getElementById("listaAmigos").innerHTML = "";
  amigos = [];
}
