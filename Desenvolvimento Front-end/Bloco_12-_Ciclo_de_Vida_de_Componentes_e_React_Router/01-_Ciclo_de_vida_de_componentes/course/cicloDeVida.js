// As funções de ciclo de vida do componente vêm para nos dar o controle necessário para utilizar cada recurso no momento certo e para garantir que a assincronicidade do React não prejudique a lógica do que você está tentando executar. Seja para a chamada de uma API , seja para atualização de algum elemento gráfico, é fundamental respeitar o momento em que seu componente se encontra.

// existem funções específicas que são executadas ao final de cada fase do ciclo de vida de um componente: componentDidMount , componentDidUpdate e componentWillUnmount.

// Os componentes React , assim como os seres vivos, possuem um ciclo de vida. No caso do React, o ciclo é dividido em 3 etapas. São elas:
// Montagem - quando o componente é inicializado e inserido no DOM;
// Atualização - quando os props ou estados do componente são alterados;
// Desmontagem - quando o componente morre 🧟‍♂️, sumindo do DOM.

// Imagem que demonstra o ciclo de vida de um componente.;
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/  

// O ciclo de vida e os principais métodos funcionam da seguinte maneira:
// Montagem:
// constructor - recebe as props e define o estado;
// render - renderiza o componente, inserindo-o no DOM;
// componentDidMount - dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições) ;
// Atualização:
// shouldComponentUpdate - possibilita autorizar ou não o componente a atualizar;
// componentDidUpdate - dispara uma ou mais ações após o componente ser atualizado;
// Desmontagem:
// componentWillUnmount - dispara uma ou mais ações antes de o componente ser desmontado.

// Vídeo instrutivo:
// https://www.youtube.com/watch?v=m_mtV4YaI8c

