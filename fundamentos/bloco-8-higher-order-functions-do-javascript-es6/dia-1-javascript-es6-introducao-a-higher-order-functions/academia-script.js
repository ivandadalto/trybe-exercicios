const techProducts = [
  {
    id: 1, // numérico
    name: 'computer', // string
    price: 2100, // number
  },
  {
    id: 2,
    name: 'mouse',
    price: 56,
  },
  {
    id: 3,
    name: 'monitor',
    price: 589,
  },
  {
    id: 4,
    name: 'keyboard',
    price: 78,
  },
  {
    id: 5,
    name: 'HD',
    price: 350,
  },
  {
    id: 6,
    name: 'webcam',
    price: 187,
  },
  {
    id: 7,
    name: 'mic',
    price: 69,
  },
  {
    id: 8,
    name: 'headset',
    price: 216,
  },
];
/*
* 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
* 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
* 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
* 3 - // Crie um algoritmo que dado um preço retorne todos os produtos com preços iguais 
// ex: id: 8 e quantidade: 2 preço total: 432
*/

//1 :

const produtosPares = () => {
  let newArr = [];
  techProducts.forEach((product) => {
    if(product.id % 2 === 0) {
      newArr.push(product.name);
    }
  })
  return newArr;
}
console.log(produtosPares());


//2 :

const priceOver300 = () => techProducts.some((product) => product.price > 300);
console.log(priceOver300());

//3 :
let totalPrice = 0;
const priceCalc = (id, quantity) => {
  techProducts.forEach((product) => {
  if(id === product.id) {
    totalPrice += quantity * product.price
  }
  });
  return totalPrice
};
console.log(priceCalc())