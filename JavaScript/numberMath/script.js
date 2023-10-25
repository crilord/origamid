// Retorne um número aleatório
// entre 1050 e 2000
randomNum = Math.floor(Math.random() * (1050 - 2000 + 1) + 2000);
console.log(randomNum);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const arrayNum = numeros.split(', ');
const maiorNum = Math.max(...arrayNum);
console.log(maiorNum);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function limpaPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limpaPreco(preco);
});

console.log(soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))

