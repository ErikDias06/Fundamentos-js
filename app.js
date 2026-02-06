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
