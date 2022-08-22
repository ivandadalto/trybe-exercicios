// EX 1 :


const myFunction = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_')
  return {fullName, email: `${email}@trybe.com`}
}
console.log(myFunction('Pedro Guerra'))




const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),  // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'),   // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// EX 2 :

const verify = (givenNumber, aleatoryNumber) => givenNumber === aleatoryNumber;

const numberSort = (givenNumber, callback) => {
  aleatoryNumber = Math.floor((Math.random() * 5) + 1)
  return callback(givenNumber, aleatoryNumber) ? 'Lucky day, you won!' : 'Try Again!';
}

console.log(numberSort(1, verify))

// EX 3:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (correct, student) => {
  if (correct === student) {
    return 1;
  } if (student === 'N.A') {
    return 0;
  } 
  return -0.5;
}

const rate = (correct, student, callback) => {
  let counter = 0;
  for(let i = 0; i <= correct.length -1; i += 1) {
    const callbackReturn = callback(correct[i], student[i]);
    counter += callbackReturn;
  }
  return `Total de pontos: ${counter}`;
}

console.log(rate(RIGHT_ANSWERS, STUDENT_ANSWERS, compare))