const simpsons = require('./simpsons.json')
const fs = require('fs').promises

const printData = () => 
  simpsons.forEach(({ id, name }) => console.log(id, '-', name));

const fetchData = (id) => new Promise((resolve, reject) => {
  const data = simpsons.find(
    ({ id: sid }) => sid == id
  );
  if (data) {
    resolve(data);
  }
  reject('id não encontrado');
});

const writeFile = async () => {
  try {
    fs.writeFile('./simpsons.json', JSON.stringify(
      simpsons.filter(({ id }) => id !== '10' && id !== '6')
    ))
  } catch (e) {
    throw new Error(e.message);
  }
} 

const createFile = async () => {
  try {
    fs.writeFile('./simpsonFamily.json', JSON.stringify(
      simpsons.filter(({ id }) => parseInt(id) <= 4)
    ))
  } catch (e) {
    throw new Error(e.message);
  }
} 

const appendToFile = async () => {
  try {
    const file = JSON.parse(await fs.readFile('./simpsonFamily.json', 'utf-8'));
    fs.writeFile('./simpsonFamily.json', JSON.stringify(
      [...file, { id: '5', name: 'Nelson Muntz' }]
    ))
  } catch (e) {
    throw new Error(e.message);
  }
} 

const replaceInFile = async () => {
  try {
    const file = JSON.parse(await fs.readFile('./simpsonFamily.json', 'utf-8'));
    fs.writeFile('./simpsonFamily.json', JSON.stringify(
      file.map((obj) => obj.id !== '5' ? obj : {
        ...obj,
        name: 'Maggie Simpson'
      })
    ))
  } catch (e) {
    throw new Error(e.message);
  }
} 

writeFile()