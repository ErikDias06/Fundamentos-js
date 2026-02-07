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
//    2 Desafios e Soluções
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


