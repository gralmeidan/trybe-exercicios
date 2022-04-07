const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: function () {
    return rand(15, this.strength);
  },
};

const battleMembers = { mage, warrior, dragon };
