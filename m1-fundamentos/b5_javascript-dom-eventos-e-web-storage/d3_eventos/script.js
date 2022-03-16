function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Exercício 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
    let container = document.getElementById('days');

    for (const day of dezDaysList) {
        let newLi = document.createElement('li');
        newLi.className = 'day'
        newLi.innerText = day

        if(day === 24 || day === 25 || day === 31) {
            newLi.className += ' holiday'
        }
        if(day === 4 || day === 11 || day === 18 || day === 25){
            newLi.className += ' friday'
        }
        
        container.appendChild(newLi)
    }
}

createDaysOfTheMonth()

// Exercício 2

function createHolidayButton(str) {
    let button = document.createElement('button')
    button.id = 'btn-holiday'
    button.innerText = str
    document.querySelector('.buttons-container').appendChild(button)
}

createHolidayButton('Feriados')

// Exercício 3

function handleHolidayButton() {
    let button = document.getElementById('btn-holiday')
    button.addEventListener('click',onClick)
    function onClick() {
        let arr = document.getElementsByClassName('holiday')
        let color = arr[0].style.backgroundColor;
        if(color != 'blue') color = 'blue'
        else color = 'rgb(238,238,238)'
        for(let i = 0; i < arr.length; i += 1){
            arr[i].style.backgroundColor = color
        }
    }
}

handleHolidayButton()