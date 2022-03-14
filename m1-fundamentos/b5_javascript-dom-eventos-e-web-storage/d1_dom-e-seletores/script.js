document.getElementById('header-container').style.backgroundColor = 'rgb(0, 176, 105)'

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'rgb(255, 159, 132)'

document.querySelectorAll('.emergency-tasks div h3').forEach(e => e.style.backgroundColor = 'rgb(165, 0, 243)')

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'rgb(249, 219, 94)'

document.querySelectorAll('.no-emergency-tasks div h3').forEach(e => e.style.backgroundColor = 'rgb(35, 37, 37)')

document.getElementsByTagName('footer')[0].style.backgroundColor = 'rgb(0, 53, 51)'