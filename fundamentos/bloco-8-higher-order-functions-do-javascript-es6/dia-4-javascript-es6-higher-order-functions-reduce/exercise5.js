const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha', ]
  
  
  function containsA() {
    
    return names.reduce((acc, currWord) => acc + currWord.split('').reduce((acc2, currLetter) =>{
      if(currLetter === 'a' || currLetter=== 'A') {
        return acc2 + 1;
      } return acc2;
    }, 0), 0)
  }
  
  console.log(containsA());