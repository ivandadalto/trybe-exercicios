 // EX 1 :

const testingScope = (escopo) => { 
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else { 
  const elseScope = `Não devo ser utilizada fora meu escopo`;
  console.log(elseScope);
};
}
testingScope(true);

// EX 2 :

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = (array) => {

for (let i = 1 ; i <= oddsAndEvens.length - 1 ; i += 1) {
  for (let i2 = 0; i2 < oddsAndEvens.length - 1; i2 += 1) {
    if (oddsAndEvens[i] < oddsAndEvens[i2]) {
      let position = oddsAndEvens[i];
      oddsAndEvens[i] = oddsAndEvens[i2]
      oddsAndEvens[i2] = position;
    }
  }
}
return array;
};
sortOddsAndEvens();
console.log(oddsAndEvens);