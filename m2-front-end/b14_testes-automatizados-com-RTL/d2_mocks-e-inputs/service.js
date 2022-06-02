const randomNumber = () => Math.random() * 100;

const capitalize = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concatenate = (str1, str2) => `${str1}${str2}`;

const fetch = async () => ({
  json: async () => ({
    ok: true,
    "message": "https://images.dog.ceo/breeds/vizsla/n02100583_2086.jpg",
    "status": "success"
  })
})

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
      .catch(console.log)
  );
}


console.log(fetchDog())

module.exports = { randomNumber, capitalize, firstLetter, concatenate, fetchDog }