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

// Exercício 4

function createFridayButton(str) {
    let button = document.createElement('button')
    button.id = 'btn-friday'
    button.innerText = str
    document.querySelector('.buttons-container').appendChild(button)
}

createFridayButton('Sexta-feira')

// Exercício 5

function handleFridayButton() {
    let button = document.getElementById('btn-friday')
    button.addEventListener('click',onClick)
    let fridays = [4,11,18,25]
    function onClick() {
        let arr = document.getElementsByClassName('friday')
        for(let i = 0; i < arr.length; i += 1){
            if(arr[i].innerText == fridays[i]){
                arr[i].innerText = '🥳'
            } else {
                arr[i].innerText = fridays[i]
            }
        }
    }
}

handleFridayButton()

// Exercício 6

function zoomEffect() {
    function zoomIn(e) {
        e.target.style.fontSize = '40px'
    }
    function zoomOut(e) {
        e.target.style.fontSize = '20px'
    }
    let days = document.getElementsByClassName('day')
    for(let i = 0; i < days.length; i += 1){
        days[i].addEventListener('mouseenter',zoomIn)
        days[i].addEventListener('mouseleave',zoomOut)
    }
}

zoomEffect()

// Exercício 7

function createTask(str) {
    taskList = document.getElementsByClassName('my-tasks')[0]
    newTask = document.createElement('span')
    newTask.innerText = str
    taskList.appendChild(newTask)
}

createTask('Lorem Ipsum')

// Exercício 8

function addTaskColor(color) {
    taskList = document.getElementsByClassName('my-tasks')[0]
    newTask = document.createElement('div')
    newTask.className = 'task'
    newTask.style.backgroundColor = color
    taskList.appendChild(newTask)
}

addTaskColor('blue')

// Exercício 9

function handleTaskSelection() {
    function select(e) {
        if(e.target.className == 'task'){
            e.target.className += ' selected'
        } else {
            e.target.className = 'task'
        }
    } 
    let arr = document.getElementsByClassName('task')
    for(let i = 0; i < arr.length; i += 1){
        arr[i].addEventListener('click', select)
    }
}

handleTaskSelection()

// Exercício 10

function handleDayColoring() {
    function color(e) {
        let newColor = document.getElementsByClassName('task selected')[0].style.backgroundColor
        if(e.target.style.color != newColor){
            e.target.style.color = newColor
        } else {
            e.target.style.color = 'rgb(119, 119, 119)'
        }
    }
    let arr = document.getElementsByClassName('day')
    for(let i = 0; i < arr.length; i += 1){
        arr[i].addEventListener('click', color)
    }
}

handleDayColoring()

// Bonus

function handleNewTaskBox() {
    let inputText = document.getElementById('task-input')
    let button = document.getElementById('btn-add')
    
    function addTask(e) {
        if(e.type == 'keyup' && e.key != 'Enter'){
            return
        }
        if(inputText.value == ''){
            alert('Caixa de texto vazia')
            return;
        } 
        createTask(inputText.value)
        addTaskColor('green')
        handleTaskSelection()
    }

    button.addEventListener('click',addTask)
    inputText.addEventListener('keyup',addTask)

}

handleNewTaskBox()