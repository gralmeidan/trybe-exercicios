# Módulo 3, Seção 8, Dia 1 - Introdução ao TypeScript

Hoje aprendemos sobre o que é TypeScript, suas notações de tipo básicas, como utiliza-las e como criar tipos customizados.

## Exerćicios desenvolvidos

1. Faça a correta tipagem do array characters e da função printCharacter

```ts
type Character = any;

const characters: any = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1'),
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2'),
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15'),
  },
];

function printCharacter(character: any, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);
```

2. Crie um script para converter unidades de medida de comprimento:

- A função deve receber:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string

<table>
  <thead>
    <tr>
      <th style="text-align: left;">
Nome      </th>
      <th style="text-align: left;">
Símbolo      </th>
      <th style="text-align: left;">
Valor      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">
Quilômetro      </td>
      <td style="text-align: left;">
km      </td>
      <td style="text-align: left;">
1000m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Hectômetro      </td>
      <td style="text-align: left;">
hm      </td>
      <td style="text-align: left;">
100m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decâmetro      </td>
      <td style="text-align: left;">
dam      </td>
      <td style="text-align: left;">
10m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Metro      </td>
      <td style="text-align: left;">
m      </td>
      <td style="text-align: left;">
1m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decímetro      </td>
      <td style="text-align: left;">
dm      </td>
      <td style="text-align: left;">
0,1m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Centímetro      </td>
      <td style="text-align: left;">
cm      </td>
      <td style="text-align: left;">
0,01m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Milímetro      </td>
      <td style="text-align: left;">
mm      </td>
      <td style="text-align: left;">
0,001m      </td>
    </tr>
  </tbody>
</table>

3. Crie um script para converter unidades de medidas de massa:

- A função deve receber:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string

<table>
  <thead>
    <tr>
      <th style="text-align: left;">
Nome      </th>
      <th style="text-align: left;">
Símbolo      </th>
      <th style="text-align: left;">
Valor      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">
Quilograma      </td>
      <td style="text-align: left;">
kg      </td>
      <td style="text-align: left;">
1000g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Hectograma      </td>
      <td style="text-align: left;">
hg      </td>
      <td style="text-align: left;">
100g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decagrama      </td>
      <td style="text-align: left;">
dag      </td>
      <td style="text-align: left;">
10g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Grama      </td>
      <td style="text-align: left;">
g      </td>
      <td style="text-align: left;">
1g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decigrama      </td>
      <td style="text-align: left;">
dg      </td>
      <td style="text-align: left;">
0,1g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Centigrama      </td>
      <td style="text-align: left;">
cg      </td>
      <td style="text-align: left;">
0,01g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Miligrama      </td>
      <td style="text-align: left;">
mg      </td>
      <td style="text-align: left;">
0,001g      </td>
    </tr>
  </tbody>
</table>

4. Crie um script para converter unidades de medida de capacidade

- A função deve receber:
  - valor - number
  - unidade base - string
  - unidade para a conversão - string

<table>
  <thead>
    <tr>
      <th style="text-align: left;">
Nome      </th>
      <th style="text-align: left;">
Símbolo      </th>
      <th style="text-align: left;">
Valor      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">
Quilolitro      </td>
      <td style="text-align: left;">
kl      </td>
      <td style="text-align: left;">
1000l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Hectolitro      </td>
      <td style="text-align: left;">
hl      </td>
      <td style="text-align: left;">
100l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decalitro      </td>
      <td style="text-align: left;">
dal      </td>
      <td style="text-align: left;">
10l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Litro      </td>
      <td style="text-align: left;">
l      </td>
      <td style="text-align: left;">
1l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decilitro      </td>
      <td style="text-align: left;">
dl      </td>
      <td style="text-align: left;">
0,1l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Centilitro      </td>
      <td style="text-align: left;">
cl      </td>
      <td style="text-align: left;">
0,01l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Mililitro      </td>
      <td style="text-align: left;">
ml      </td>
      <td style="text-align: left;">
0,001l      </td>
    </tr>
  </tbody>
</table>

5. Utilize o pacote readline-sync para dar interatividade aos scripts.

6. Crie um arquivo index.ts que pergunta qual conversão o usuário quer utilizar e utiliza o script correspondente.
