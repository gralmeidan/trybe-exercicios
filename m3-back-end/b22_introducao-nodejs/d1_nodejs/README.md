# Bloco 22, Dia 1 - Node.js: Runtime Assíncrono

Hoje nós aprendemos à utilizar os comandos do npm para criar e gerenciar pacotes e dependências, como utilizar o node para executar scripts, como funcionam os sistemas por trás de módulos do Node, criar scripts simples com interação do usuário e à utilizar funções assíncronas e de leitura e escrita de arquivos.

## Exercícios desenvolvidos

1. 🚀 Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.

- Armazene o código no arquivo bmi.js.
- A fórmula para calcular o IMC é weight / height ^ 2.
  - Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
- Comece criando um novo pacote Node com npm init e respondendo às perguntas do npm.
- Por enquanto, não se preocupe em pedir input do usuário. Utilize valores fixos para weight e height.

2. 🚀 Agora, permita que o código seja executado através do comando npm run bmi.

- O novo código criado deve conter o comando que chama o node para executar o arquivo bmi.js.

3. 🚀 Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar.

- Edite o código para que os valores de weight e height sejam informados pela pessoa ao responder as perguntas: "What' your weight?" e "What' your height?", deve-se utilizar o pacote readline-sync.

4. 🚀 Agora temos um problema, o peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.

- O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre a função adequada para realizar input de valores float.
- Encontrou a função? Show! Agora utilize-a para solicitar o input de weight.

5. 🚀 Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

- Considere a seguinte tabela para classificar a situação do IMC:
<table>
          <thead>
            <tr>
              <th style="text-align: left;">
IMC              </th>
              <th style="text-align: left;">
Situação              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: left;">
Abaixo de 18,5              </td>
              <td style="text-align: left;">
Abaixo do peso (magreza)              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
Entre 18,5 e 24,9              </td>
              <td style="text-align: left;">
Peso normal              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
Entre 25,0 e 29,9              </td>
              <td style="text-align: left;">
Acima do peso (sobrepeso)              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
Entre 30,0 e 34,9              </td>
              <td style="text-align: left;">
Obesidade grau I              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
Entre 35,0 e 39,9              </td>
              <td style="text-align: left;">
Obesidade grau II              </td>
            </tr>
            <tr>
              <td style="text-align: left;">
40,0 e acima              </td>
              <td style="text-align: left;">
Obesidade graus III e IV              </td>
            </tr>
          </tbody>
        </table>


6. 🚀 Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.

- Utilize async/await para escrever seu código. Procure não utilizar callbacks.
  - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
  - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
  - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
  - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
  - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
  - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
