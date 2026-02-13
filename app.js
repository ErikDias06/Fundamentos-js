// CURSO 1 - INTRODUÇÃO LÓGICA DE PROGRAMAÇÃO COM JAVASCRIPT

// ================================
//      Desafios e Soluções
// ================================

// 1. Alerta de boas-vindas
alert('Boas vindas ao nosso site!');

// 2. Variável nome
let nome = 'Lua';

// 3. Variável idade fixa
let idadeFixa = 25;

// 4. Número de vendas
let numeroDeVendas = 50;

// 5. Saldo disponível
let saldoDisponivel = 1000;

// 6. Alerta de erro direto
alert('Erro! Preencha todos os campos');

// 7. Mensagem de erro usando variável
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

// 8. Pergunta o nome da empresa
let nomeDaEmpresa = prompt('Qual o nome da sua empresa?');
alert('Olá, ' + nomeDaEmpresa + '!');

// 9. Pergunta a idade do usuário
let idade = prompt('Qual a sua idade?');
alert('Sua idade é, ' + idade + '!');

// 10. Validação de idade para habilitação
if (idade >= 18) {
  alert('Pode tirar a habilitação!');
} else {
  alert('Não pode tirar a habilitação!');
}

// ================================
//    2  Desafios e Soluções
// ================================

// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
alert('Bem vindo ao site');

let DiaDaSemana = prompt('Qual é o dia da semana?').toLowerCase();
console.log('Dia da semana: ', DiaDaSemana);

if (DiaDaSemana === 'sábado' || DiaDaSemana === 'domingo'){
  alert('Bom fim de semana!')
} else {
  alert('Boa semana!')
}

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroDigitado = Number(
  prompt('Digite um número entre -3 e 3, o 0 não vale!')
)
console.log('Número digitado: ' + numeroDigitado)

if (
  numeroDigitado === 1 || numeroDigitado === 2 || numeroDigitado === 3) {
  console.log('O numero é posivitvo:', numeroDigitado)
  alert('O número é positivo ' + numeroDigitado);
} else if (numeroDigitado === -1 || numeroDigitado === -2 || numeroDigitado === -3) {
  console.log(' o numéro é negativo ' + numeroDigitado)
  alert('O número é negativo ' + numeroDigitado);
} else {
   console.log ('o número digitado inválido ' + numeroDigitado)
  alert('Digite somente números entre -3 e 3, sem o 0');
}
 // ou
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário,
alert('Bem vindo ao jogo do número secreto');

let numeroSecreto = 3;
console.log('Número secreto: ', numeroSecreto);

let pontuaçãoAtual = 0;
console.log('Pontuação atual: ', pontuaçãoAtual);

let chute = prompt('Chute um número entre 0 e 5');
console.log('Número chutado: ', chute)

if (chute == numeroSecreto) {
  pontuaçãoAtual = 100
  console.log('Pontuação atual: ' + pontuaçãoAtual);
  alert('Você ganhou 100 pontos, pontuação atual: ' + pontuaçãoAtual);
} else {
  console.log('O usuário perdeu')
  alert('Você perdeu, tente novamente. Pontuação atual: ' + pontuaçãoAtual);
}

if (pontuaçãoAtual == 100) {
  console.log('O usuário Venceu')
  alert('Parabéns, voce venceu')}

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
alert('Bem vindo ao seu Banco')
let numeroDaConta = ('110845');
console.log('O usuário acessou a conta de número: ', numeroDaConta)

let saldoDisponivel = 100000
console.log('O saldo é de: ', saldoDisponivel)
alert(`O saldo disponivel é de: ${saldoDisponivel}`)

// 5. // Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
alert('Seja bem vindo ao site')
let nomeDoUsuário = prompt('Qual é o seu nome?')
console.log('O nome digitado é: ', nomeDoUsuário)
alert(`Seja bem vindo ${nomeDoUsuário}, como posso ajudar?`)

// ================================
//    3  Desafios e Soluções
// ================================

// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

alert('Bem vindo ao contador');
let contador = 1; 

while (contador <=10) {
console.log(contador)
contador++
}

// 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
alert('Bem vindo ao contador');
let contador = 10

while (contador >= 0) {
  console.log(contador)
  contador--
}

// 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

alert('Bem vindo ao programa de contagem regressiva');
let numeroInicial = prompt('Escolha um número para a contagem regressiva');

while (numeroInicial >= 0) {
  console.log(numeroInicial);
  numeroInicial--;
}
alert('A contagem terminou');

// 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

alert('Bem vindo ao programa de contagem progressiva');
let numeroInicial = 0;
let numeroEscolhido = prompt('Escolha um número para ser feita a contagem progressiva')

while (numeroInicial <= numeroEscolhido) {
  console.log(numeroInicial)
  numeroInicial++
}

// ================================
//    Desafios e Soluções Finais
// ================================

// 1, 2 e 3. Crie um programa em JavaScript que exiba uma mensagem de boas-vindas no console do navegador. Em seguida, crie uma variável chamada nome e atribua a ela o seu nome. Utilize essa variável para mostrar a mensagem “Olá, [seu nome]!” tanto no console quanto em um alert.
alert('Boas vindas aos site')
let nome = prompt('Qual o seu nome?')
console.log('Boas Vindas ao site', nome)
alert('Seja bem vindo(a) ' + nome)
 
// 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
alert('Olá usuário')
let resposta = prompt('Qual a linguagem de programação que você mais gosta?')
console.log('Linguagem escolhida: ', resposta)
 
// 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
alert('Bem vindo á Caluladora');
alert('Escolha 2 números para realizar a operação');
let valor1 = Number(prompt('Primeiro número'));
console.log('primeiro número: ', valor1)

let valor2 = Number(prompt('Segundo número'));
console.log('segundo número: ', valor2);

let resultado = valor1 + valor2
console.log(`a soma de ${valor1} e ${valor2} é igual a ${resultado}`);
alert('o Resultado é: ' + resultado);


// 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A subtração de [valor1] e [valor2] é igual a [resultado]." no console.
alert('Bem vindo á Caluladora');
alert('Escolha 2 números para realizar a operação');
let valor1 = Number(prompt('Primeiro número'));
console.log('primeiro número: ', valor1)

let valor2 = Number(prompt('Segundo número'));
console.log('segundo número: ', valor2);

let resultado = valor1 - valor2
console.log(`a subtração de ${valor1} e ${valor2} é igual a ${resultado}`);
alert('o Resultado é: ' + resultado);

// 7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
alert('Bem  vindo ao site');
let idade = prompt('Por favor digite a sua idade');
console.log('Idade: ', idade)

if (idade >= 18) {
console.log('Pode tirar a habilitação');
alert('Você é maior de idade, pode tirar a habilitação.');
} else{
  console.log('Não pode tirar a habilitação.');
  alert('Você e menor de idade,, não pode tirar a habilitação.');
}   

// 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
alert('Bem vindo ao site');
let numero = Number(prompt('Esccolha um número para verifiar se é positivo ou negativo'));

if (numero > 0){
  console.log(`número positivo: ${numero}`);
  alert(`número positivo: ${numero}`);
} else if (numero < 0 ) {
  console.log (`número negativo ${numero}`);
  alert(`número negativo ${numero}`);
} else {
  console.log('O número 0 é neutro')
  alert('O número 0 é neutro')
}

// 9. Use um loop while para imprimir os números de 1 a 10 no console.
alert('Bem vindo ao Contador')
let contador = 1

while (contador <= 10) {
  console.log(contador)
  contador ++
}

// 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
alert('Bem vindo ao site da Escola');
let nota = Number(prompt('Qual a sua nota?'));
console.log('Nota:', nota)
if(nota >= 7) {
console.log('Aprovado');
alert('Parabéns você foi aprovado');
} else {
  console.log('Reprovado')
  alert('Você foi reprovado')
}

// 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
alert('Gerador de números');
let numero = Math.random();
console.log(`Número gerado: , ${numero}`);
alert(`O número gerado foi: ${numero}`)

// 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
alert('Gerador de números');
let numero = parseInt(Math.random() * 10);
console.log(`Número gerado: ${numero}`);
alert(`O número gerado foi: ${numero}`)


// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
alert('Gerador de números');
let numero = parseInt(Math.random() * 1000);
console.log(`Número gerado: ${numero}`);
alert(`O número gerado foi: ${numero}`)


// FIM CURSO 1



// INICO CURSO 2 - LÓGICA DE PROGRAMAÇÃO INTEGRAÇÃO DO HTML AO JS

// ================================
//   1  Desafios e Soluções
// ================================

// 1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio'

// 2. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarClique() {
    console.log('O botão foi clicado')
}

// 3. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function verificarAlert() {
    alert('Eu amo JS');
    console.log('O botão alert foi clicado')
}
 
// 4. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function verificarPrompt() {
    console.log('O botão Prompt foi clicado');
    let cidade = prompt('Me diga um nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

// 5. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
 function verificarSoma() {
    alert('Você selecionou soma');
    let numero1 = Number(prompt('Primeiro número inteiro'));
    console.log('primeiro número: ', numero1);
    let numero2 = Number(prompt('Segundo número inteiro'));
    console.log('segundo número: ', numero2);
    let resultado = numero1 + numero2;
    console.log('resultado: ', resultado);
    alert(`O resultado é ${resultado}`);
 }

// ================================
//    2  Desafios e Soluções
// ================================

// 1. Criar uma função que exibe "Olá, mundo!" no console.
function mensagem() {
    console.log('Olá,Mundo!');
}
mensagem();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
    console.log(`Olá, ${nome}`);
}
exibirNome('Erik');

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroDoNumero(numero) {
    return numero * 2;
}
let resultadoDobro = dobroDoNumero(7);
console.log(resultadoDobro)
 
// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculo(a, b, c) {
    return (a + b + c) / 3;
}

let resultadoMedia = calculo(10, 20, 30);
console.log(resultadoMedia);

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(a, b) {
    return a > b ? a : b;
}

let resultadoMaior = maiorNumero(3, 7);
console.log(resultadoMaior);

// ================================
//    3  Desafios e Soluções
// ================================

// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function IndiceDeMassaCorporal() {
    let peso = Number(prompt('Qual seu peso em Kg?'));
    let altura = Number(prompt('Qual a sua altura em metros?'));
    let IMC = peso / (altura * altura);
    alert(`Seu IMC é de ${IMC.toFixed(2)}`);
} 
IndiceDeMassaCorporal()

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let n = Number(prompt('Escolha um número para fatorar'));

function fatoração(n) {
    if (n < 0) return alert('O número deve ser maior que 0');
    let resultado = 1
    for (let i = 2; i <= n; i++) {
        resultado *=i;
    }
    return resultado;
}
fatoração(n);
alert(`O fatorial de ${n} é ${fatoração(n)}`);

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let dol = Number(prompt('Qual valor em (Dólar) deseja converter para (Real)'));
 function conversor(dol) {
    if (dol <= 0) return alert('Esse valor não é válido!');
    let resultadoReal = dol * 4.80;
    let mensagemResultado = resultadoReal > 1 ? 'reais' : 'real';
    alert(`A converão de ${dol} dólares para Real, deu um total de ${resultadoReal} ${mensagemResultado} `);
 }
 conversor(dol);
 
 // 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let largura = Number(prompt('Qual a largura da sala em metros?'));
let altura = Number(prompt('Qual a altura da sala em metros?'));

function calculo(altura, largura) {
     if (altura <= 0 || largura <= 0) {
        return alert('Os valores são inválidos!');
    } 
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    alert(`O valor do perímetro é de: ${perimetro}m e o valor da área é de ${area}m`);
}
calculo(altura, largura);

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let raio = Number(prompt('Qual o raio da sala circular?'));
let pi = 3.14;
function calcule(raio) {
    if (raio <= 0) {
        alert('O valor é inválido!');
    }
    let area = pi * (raio ** 2);
    let circunferencia = 2 * pi * raio;
    alert(`O valor da área é de: ${area.toFixed(2)}m e o valor da circunferência é de: ${circunferencia.toFixed(2)}m `);
}
calcule(raio);  

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
let numero = Number(prompt('Qual número você deseja ver aa tabuada?'));

function tabuada(numero) {
    for (let i = 1; i<= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}
tabuada(numero);

// ================================
//    3  Desafios e Soluções
// ================================

// 1. Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = ['maçã', 'banana', 'morango', 'pêssego' ];
console.log(listaGenerica);

// 2. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);

// 3. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
let linguagemDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagemDeProgramacao);

// 4. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let nomesDaAmigos = ['Pedro', 'Marcos','Gabriel'];
console.log(nomesDaAmigos[0]);

// 5. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let nomesDoAmigos = ['Pedro', 'Marcos','Gabriel'];
console.log(nomesDoAmigos[1]);

// 6. Crie uma lista com 3 nomes e exiba no console apenas o ultimo elemento.
let nomesDeAmigos = ['Pedro', 'Marcos','Gabriel'];
console.log(nomesDeAmigos[2]);




