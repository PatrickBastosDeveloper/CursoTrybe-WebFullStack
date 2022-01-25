// Desenho de Uma pessoa

function desenhaOlho() {
  desenhaCilios();
  desenhaPupila();
  desenhaCornea();
  // ..
}

function desenhaCabeça(cabelo) {
  desenhaOlho();
  desenhaOlho();
  desenhaNariz();
  desenhaBoca();
}

function desenhaPessoa() {
  desenhaCabeça();

  desenhaTronco();

  desenhaBraços();

  desenhaPernas();
}

function desenhaMonstro() {
  desenhaCabeça();
  desenhaCabeça();
  desenhaCabeça();
  desenhaTronco();
  desenhaPernas();
}

function desenhaOutroMonstro() {
  desenhaCabeça("verde");
  desenhaCabeça("vermelho");
  desenhaCabeça(null);
  desenhaTronco();
  desenhaPernas();
}

function Monstro() {
  return (
    <>
      <Cabeça cabelo="vermelho" />
      <Cabeça cabelo="verde" />
      <Cabeça cabelo={null} />
      <Tronco />
      <Pernas />
    </>
  );
}
