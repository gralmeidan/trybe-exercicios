type ValidSliceNumber = 4 | 6 | 8;

interface Pizza {
  flavour: string;
  slices: ValidSliceNumber;
}

export default Pizza;
