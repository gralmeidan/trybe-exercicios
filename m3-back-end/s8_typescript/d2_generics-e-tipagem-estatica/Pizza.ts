type ValidSliceNumber = 4 | 6 | 8;

interface Pizza {
  flavour: string;
  slices: ValidSliceNumber;
}

export default Pizza;

export interface PizzaComum extends Pizza {
  flavour: 'Calabresa' | 'Frango' | 'Pepperoni';
}

export interface PizzaVegetariana extends Pizza {
  flavour: 'Marguerita' | 'Palmito' | 'Cogumelo';
}

export interface PizzaDoce extends Pizza {
  flavour: 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';
  slices: 4;
}
