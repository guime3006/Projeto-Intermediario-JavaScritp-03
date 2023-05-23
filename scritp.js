let userNumber = prompt(`Digite um Número: `); // v(userNumber) irar receber o  1º número do user
userNumber = Number(userNumber); // aqui ele será convertida para um Number()


let userNumberNew = prompt(`Digite um Outro Número: `); // o mesmo processo é feito novamente mas agora com um novo número
userNumberNew = Number(userNumberNew);

let calculoSoma = userNumber + userNumberNew; // é criado uma variavel que irar fazer o calculo de soma e armazenar o resultado

let respostaSoma = document.getElementById("resp-soma").innerHTML = `O Valor Somado de ${userNumber} + ${userNumberNew} = ${calculoSoma}`;
// variavel que fica responsavel por manipular o DOM e exibir a resposta 

let calculoSub = userNumber - userNumberNew; // variavel que irar fazer o calculo de subtracao e armazenar o resultado

let respostaSub = document.getElementById("resp-sub").innerHTML = `O Valor Subtraído de ${userNumber} - ${userNumberNew} = ${calculoSub}`;
// variavel que fica responsavel por manipular o DOM e exibir a resposta 

let calculoMulti = userNumber * userNumberNew; // variavel que irar fazer o calculo de multiplicação e armazenar o resultado

let respostaMulti = document.getElementById("resp-multi").innerHTML = `O Valor Multiplicado de ${userNumber} * ${userNumberNew} = ${calculoMulti}`;
// variavel que fica responsavel por manipular o DOM e exibir a resposta 

let calculoDiv = userNumber / userNumberNew; // variavel que irar fazer o calculo divisão e armazenar o resultado

let respostaDiv = document.getElementById("resp-div").innerHTML = `O Valor Dividido de ${userNumber} / ${userNumberNew} = ${calculoDiv.toFixed(2)}`;
// variavel que fica responsavel por manipular o DOM e exibir a resposta 
// foi utilizado a função toFixed(2) para deixar somente duas casas decimais
