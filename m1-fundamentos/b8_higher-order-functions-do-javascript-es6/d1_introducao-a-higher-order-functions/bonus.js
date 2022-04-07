const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: function () {
    if (this.mana < 15) {
      return {
        spentMana: 0,
        dano: 'Não possui mana suficiente',
      };
    } else {
      return {
        spentMana: 15,
        dano: rand(this.intelligence, this.intelligence * 2),
      };
    }
  },
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: function () {
    return rand(this.strength, this.strength * this.weaponDmg);
  },
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: function () {
    return rand(15, this.strength);
  },
};

const battleMembers = { mage, warrior, dragon };

const gameActions = {
  warriorTurn: function (damage) {
    dragon.healthPoints -= damage();
  },
  mageTurn: function (damage) {
    let attack = damage();
    dragon.healthPoints -= attack.dano;
    mage.mana -= attack.spentMana;
  },
  dragonTurn: function (damage) {
    let dano = damage();
    mage.healthPoints -= dano;
    warrior.healthPoints -= dano;
  },
  getMembers: () => battleMembers,
};
