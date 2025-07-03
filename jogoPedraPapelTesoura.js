const escolhas = ["pedra", "papel", "tesoura"];
function escolhaUsuario() {
  let escolha = prompt("Digite pedra, papel ou tesoura (ou 'sair' para encerrar o jogo):");
  if (escolha) {
    escolha = escolha.toLowerCase();
  }
  return escolha;
}
function escolhaComputador() {
  const num = Math.floor(Math.random() * escolhas.length);
  return escolhas[num];
}
function vencedor(usuario, computador) {
  if (usuario === computador) {
    return "A partida terminou empatada!";
  }
  if (
    (usuario === "pedra" && computador === "tesoura") ||
    (usuario === "papel" && computador === "pedra") ||
    (usuario === "tesoura" && computador === "papel")
  ) {
    return "Você venceu!";
  } else {
    return "Computador venceu!";
  }
}
function jogoPedraPapelTesoura() {
  while (true) {
    const usuario = escolhaUsuario();
    if (usuario === "sair") {
      alert("O jogo acabou! Muito bem! Obrigado por jogar!");
      break;
    }
    if (!escolhas.includes(usuario)) {
      alert("Opção inválida! Por favor, escolha entre pedra, papel, tesoura ou deixar de jogar.");
      continue;
    }
    const computador = escolhaComputador();
    alert(`Foi escolhido pelo computador: ${computador}`);
    const resultadoDoJogo = vencedor(usuario, computador);
    alert(resultadoDoJogo);
  }
}
jogoPedraPapelTesoura();