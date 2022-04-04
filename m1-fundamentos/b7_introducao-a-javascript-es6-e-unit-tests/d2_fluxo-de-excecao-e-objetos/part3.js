const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const modifyObject = (obj, key, value) => obj[key] = value

modifyObject(lesson2,'turno','noite')

const getKeys = obj => Object.keys(obj)

const getLength = obj => Object.keys(obj).length

const getValues = obj => Object.values(obj)

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3})

console.log(allLessons);