enum unidades {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001,
}

type unidade = keyof typeof unidades;

function convert(value: number, base: unidade, res: unidade): number {
  return (value * unidades[base]) / unidades[res];
}

export default {
  unidades,
  convert,
};
