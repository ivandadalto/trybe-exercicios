let word = 'tryber';
let reverseWord = "";

for(let i = 0;i < word.length;i += 1)
{ reverseWord += word[word.length - 1 - i];
  
}

console.log(reverseWord)



// Outro modo de resolver.

let word2 = 'tryber';
let reverseWord2 = '';

reverseWord2 = word2.split('').reverse().join('');

console.log(reverseWord2);

