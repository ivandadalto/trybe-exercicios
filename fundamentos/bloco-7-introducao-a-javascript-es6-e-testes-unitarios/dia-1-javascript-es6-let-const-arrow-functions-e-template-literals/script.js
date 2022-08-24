//EX 3 :

const button = document.getElementById('button');
const counter = document.getElementById('counter');
let clickCount = 0;

button.addEventListener('click', () => {
  clickCount += 1;
  counter.innerHTML = clickCount;
})

//EX 4:

const substituaX = (param) => {
return `Tryber ${param} aqui!`
}
//console.log(substituaX('Ivan'));

const secondFunction = (substituaX) => {
  const skills = ['Javascript', 'HTML', 'CSS'];
  return `${substituaX}
  Minhas três principais habilidades são:
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}`
}

console.log(secondFunction(substituaX('Ivan')));