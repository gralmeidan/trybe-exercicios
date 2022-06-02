const randomNumber = () => Math.random() * 100;

const capitalize = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concatenate = (str1, str2) => `${str1}${str2}`;

module.exports = { randomNumber, capitalize, firstLetter, concatenate }