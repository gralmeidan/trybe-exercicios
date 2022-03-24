const overrideDefault = (e) => {
    e.preventDefault();
}

const clear = (e) => {
    e.preventDefault()
    let input = document.querySelectorAll('input, textarea')
    input.forEach(element => {
        element.value = ''
        element.checked = false
    })
}


window.onload = () => {
    document.getElementById('submit').addEventListener('click', overrideDefault)
    document.getElementById('input-apagar').addEventListener('click',clear)
}