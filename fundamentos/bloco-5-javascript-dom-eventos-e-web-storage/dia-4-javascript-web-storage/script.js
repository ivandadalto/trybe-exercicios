window.onload = () => {
  const select = document.querySelector('select');

  select.addEventListener('change', () => {
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;
    localStorage.setItem('background-color', selected.value);
  });
  const select2 = document.querySelector('#colors-font');
  select2.addEventListener('change', () => {
    let selected2 = select2.selectedOptions[0];
    document.body.style.color = selected2.value;
    localStorage.setItem('font-color', selected2.value);
  });
  
  const numberInput = document.querySelector('input[name="font-size"]');
  numberInput.addEventListener('change', () => {
    const paragraph = document.getElementById('paragraph');
    paragraph.style.fontSize = `${numberInput.value}px`;
    localStorage.setItem('font-size', `${numberInput.value}px`)
  });
  
  const buttonFont = document.getElementById('font-family')
  const buttonFont2 = document.getElementById('font-family2')
  
  buttonFont.addEventListener('click', () => {
    const paragraph = document.getElementById('paragraph');
    paragraph.style.fontFamily = 'Arial';
    localStorage.setItem('font-type', 'Arial');    
  });
  
  buttonFont2.addEventListener('click', () => {
    const paragraph = document.getElementById('paragraph');
    paragraph.style.fontFamily = 'Times New Roman'; 
    localStorage.setItem('font-type', 'Times New Roman'); 
  });

 // LOCAL STORAGE PARA ARMAZENAR ULTIMOS ESTILOS ESCOLHIDOS :

  const backgroundSaved = localStorage.getItem('background-color');
  document.body.style.backgroundColor = backgroundSaved;
  const fontcolorSaved = localStorage.getItem('font-color')
  document.body.style.color = fontcolorSaved;
  const fontsizeSaved = localStorage.getItem('font-size');
  const paragraph = document.getElementById('paragraph');
  paragraph.style.fontSize = fontsizeSaved;
  const fontFamilySaved = localStorage.getItem('font-type');
  paragraph.style.fontFamily = fontFamilySaved;
}




