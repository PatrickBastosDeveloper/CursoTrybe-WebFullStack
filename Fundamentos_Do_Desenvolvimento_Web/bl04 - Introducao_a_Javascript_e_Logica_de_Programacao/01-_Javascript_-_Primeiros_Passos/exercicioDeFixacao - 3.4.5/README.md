Operadores lógicos
Neste ponto, você deve entender que valores booleanos podem ser "true" ou "false". Eles serão de extrema importância para a construção de lógicas no momento em que estivermos desenvolvendo nossas aplicações. A próxima ferramenta de trabalho que iremos aprender serão os operadores lógicos. Eles não são utilizados só na programação, mas no estudo da lógica em si e no seu dia a dia (e com bastante frequência). A principal funcionalidade desses operadores é determinar a lógica entre dois valores ou variáveis.
Na linguagem JavaScript, temos três principais operadores lógicos: && , || e o ! . Podemos nos referir a eles como "AND", "OR" e "NOT", respectivamente.
Essas ferramentas não vão te acompanhar apenas no JavaScript, mas em toda sua carreira. Por isso, é muito importante praticar bastante e ficar bem familiarizado com o conceito de cada um deles.
Operador AND
Esse operador é binário. O que significa que ele precisa de dois elementos para funcionar corretamente.
Para abstrair seu funcionamento, pense o seguinte: Você está numa padaria e quer comer alguma coisa no café da manhã. Então você diz "Por favor, me vê um cafézinho E um pão na chapa".

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
