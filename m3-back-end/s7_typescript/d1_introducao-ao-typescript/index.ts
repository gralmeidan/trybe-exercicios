import length from './req2';
import mass from './req3';
import capacity from './req4';
import readLineSync from 'readline-sync';

const converters = {
  length,
  mass,
  capacity,
};
let index: number;

const convertOptions = Object.keys(converters);
index = readLineSync.keyInSelect(
  convertOptions,
  'Qual conversor você gostaria de usar?\n'
);

const converter = converters[convertOptions[index] as keyof typeof converters];

const unityOptions = Object.keys(converter.unidades).filter((key) =>
  Number.isNaN(Number(key))
);

index = readLineSync.keyInSelect(
  unityOptions,
  'Em qual unidade está o seu valor inicial?\n'
);

const base = unityOptions[index];

index = readLineSync.keyInSelect(
  unityOptions,
  'Para qual unidade deseja converter?\n'
);

const res = unityOptions[index];

const value = readLineSync.question('Qual valor deseja converter?\n');
type unidade = keyof typeof converter.unidades;

console.log(
  'O resultado é',
  converter.convert(Number(value), base as unidade, res as unidade),
  res
);
