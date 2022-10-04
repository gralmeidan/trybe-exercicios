enum unidades {
  kg = 1000,
  hg = 100,
  dag = 10,
  g = 1,
  dg = 0.1,
  cg = 0.01,
  mg = 0.001,
}

type unidade = keyof typeof unidades;

export function convert(value: number, base: unidade, res: unidade): number {
  return (value * unidades[base]) / unidades[res];
}

export default {
  unidades,
  convert,
};
