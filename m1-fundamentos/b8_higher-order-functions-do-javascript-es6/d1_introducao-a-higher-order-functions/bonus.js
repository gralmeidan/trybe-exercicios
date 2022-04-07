const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: function () {
    let spentMana, dano;
    if (this.mana < 15) {
      spentMana = 0;
      dano = 'Não possui mana suficiente';
    } else {
      spentMana = 15;
      this.mana -= 15;
      dano = rand(this.intelligence, this.intelligence * 2);
    }
    return {
      dano,
      spentMana,
    };
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
