# Módulo 3, Seção 9, Dia 1 - Introdução à Orientação a Objetos

Hoje aprendemos o que é a orientação a objetos, seus quatro pilares e a síntaxe para implementá-la em TypeScript

## Exercícios desenvolvidos

<p>
<strong>Exercício 1:</strong> Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.</p>

<p>
<strong>Exercício 2:</strong> Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.</p>

<p>
<strong>Exercício 3:</strong> Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.</p>
<ul>
  <li>
A pessoa cliente deverá conter o nome;  </li>
  <li>
O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;  </li>
  <li>
O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.  </li>
</ul>
<p>
<strong>Exercício 4:</strong> Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.</p>

<p>
<strong>Exercício 5:</strong> Escreva uma classe Data cuja instância represente uma data. Esta classe deverá conter três atributos: o dia, o mês e o ano.</p>
<p>
<strong>Exercício 6:</strong> Vamos adicionar à nossa classe de Data do exercício anterior os comportamentos. Essa classe deverá conter os seguintes métodos:</p>
<ul>
  <li>
constructor: deverá verificar se a data passada por parâmetro é uma data válida, caso não esteja deverá criar uma data com valor “01/01/1900”;  </li>
  <li>
getMonthName: retorna o mês da data por extenso;  </li>
  <li>
isLeapYear: retorna verdadeiro se o ano é bissexto e falso caso não seja;  </li>
  <li>
compare: recebe como parâmetro um outro objeto da classe Data, compara com a data corrente e retorna:    <ul>
      <li>
0 se as datas forem iguais;      </li>
      <li>
1 se a data corrente for posterior à data do parâmetro;      </li>
      <li>
-1 se a data do parâmetro for posterior à data corrente.      </li>
    </ul>
  </li>
  <li>
format: recebe como parâmetro um formato de dia mês e ano e retorna a data formatada.    <ul>
      <li>
Legenda:        <ul>
          <li>
aaaa = ano com quatro dígitos          </li>
          <li>
aa = ano com dois dígitos          </li>
          <li>
mm = mês com 2 dígitos          </li>
          <li>
M = mês por extenso          </li>
          <li>
dd = dia com 2 dígitos          </li>
        </ul>
      </li>
      <li>
Exemplos:        <ul>
          <li>
“dd/mm/aaaa” = 01/01/1900          </li>
          <li>
“aaaa-mm-dd” = 1900-01-01          </li>
          <li>
“dd de M de aa” = 01 de janeiro de 90          </li>
          <li>
“dd, M de aaaa” = 01, janeiro de 1990          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
