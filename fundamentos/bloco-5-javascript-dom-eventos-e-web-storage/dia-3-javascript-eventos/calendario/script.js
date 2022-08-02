function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.,
// EX 1 : 

function createDayOfTheMonth() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const getDaysList = document.getElementById('days');
  for (let i = 0; i <= decemberDaysList.length - 1; i += 1) {
    const day = decemberDaysList[i];
    const dayItem = document.createElement('li');
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day friday holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
    dayItem.className = 'day';
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);
  }
  }
}
createDayOfTheMonth();

// EX 2 : 

function createButton (buttonName) {
  const buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerHTML = buttonName;
  button.id = 'btn-holiday';
  buttonContainer.appendChild(button)
  
}
createButton('Feriados');

// EX 3 : 

function changeColorHolidays () {
  const button = document.querySelector('#btn-holiday');
  const daysHoliday = document.getElementsByClassName('holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const setNewColor = 'white'

button.addEventListener('click',function (){
for (let i = 0; i <= daysHoliday.length - 1; i += 1) {
  if (daysHoliday[i].style.background === setNewColor) {
    daysHoliday[i].style.background = backgroundColor;

  } else { daysHoliday[i].style.background = setNewColor;

  }
}

});

}
changeColorHolidays ();

// EX 4:

function createFriday() {
  const buttonContainer = document.querySelector('.buttons-container');
  const button2 = document.createElement('button')
  button2.id = 'btn-friday';
  button2.innerHTML = 'Sexta-Feira';
  buttonContainer.appendChild(button2);
}
createFriday();

// EX 5:

const parameter = [4, 11, 18, 25];
function changeFriday(parameter) {
  const buttonSexta = document.querySelector('#btn-friday');
  const diasSexta = document.getElementsByClassName('friday');
  const newFridayText = 'SEXTOU!!!';
  buttonSexta.addEventListener('click',function (){
    for (let i = 0; i <= diasSexta.length - 1; i += 1) {
      if (diasSexta[i].innerHTML !== newFridayText) {
        diasSexta[i].innerHTML = newFridayText;
      } else {
        diasSexta[i].innerHTML = parameter[i];
      }
    }

  });
}
changeFriday(parameter);

// EX 6 :Functions para criar eventos de Zoom.

function dayMouseOver() {
  const days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '35px';
    event.target.style.fontWeight = '600';

  });
}

function dayMouseOut() {
  const days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';

  });
}
dayMouseOver();
dayMouseOut();

// EX 7 :

function createActivity(string) {
  const myTasks = document.querySelector('.my-tasks');
  const task = document.createElement('span');
  task.innerHTML = string;
  myTasks.appendChild(task);

}
createActivity('Cozinhar Estudar Ler Pesquisar');

// EX 8 :

function taskColor (string) {
const myTasks = document.querySelector('.my-tasks');
const task = document.createElement('div');
task.className = 'task';
task.style.background = string;
myTasks.appendChild(task);
}
taskColor('blue');

// EX 9: // Evento para que ao clicar mude a classe de um determinado elemento.
boleanTask = false;
function selectTask() {
  const selectedTask = document.getElementsByClassName('task selected');
  const task = document.querySelector('.task');
  task.addEventListener('click', function(event){
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }

  });
}
selectTask();

// EX 10 :
function setDayColor() {
  const days = document.querySelector('#days');
  const selectedTask = document.getElementsByClassName('task selected');
  const taskDiv = document.querySelector('.task');
  const taskColor = taskDiv.style.backgroundColor;
  days.addEventListener('click',function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)'
    }

  });
}
setDayColor();

