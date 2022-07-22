//5.


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0]    //Declara o numero maior como estando na posição [0] incialmente

for(let i = 1;i < numbers.length;i += 1){ //Percorre apartir do i=1 póis ja foi adotada a posição [0]
  if(numbers[i] > higherNumber){
    higherNumber = numbers[i]}
  }

  console.log(higherNumber)