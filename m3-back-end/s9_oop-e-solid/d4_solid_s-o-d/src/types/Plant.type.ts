type Plant = {
  id: string;
  breed: string;
  size: number;
  needsSun: boolean;
  origin: string;
  specialCare: {
    waterFrequency: number;
  };
};

export default Plant;
