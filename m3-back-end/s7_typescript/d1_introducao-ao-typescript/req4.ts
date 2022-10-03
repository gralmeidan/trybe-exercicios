enum unidades {
  kl = 1000,
  hl = 100,
  dal = 10,
  l = 1,
  dl = 0.1,
  cl = 0.01,
  ml = 0.001,
}

type unidade = keyof typeof unidades;

export function convertCapacity(
  value: number,
  base: unidade,
  res: unidade
): number {
  return (value * unidades[base]) / unidades[res];
}
