# Dia 2 - Mocks e Inputs

Hoje nós aprendemos como usar o `jest.fn` e `jest.spyOn` para simular funções e pedidos à APIs

## Exercícios desenvolvidos

### Parte 1

<div class="pt-1 pb-1">
Para os exercícios a seguir:</div>
<ul>
  <li>
Crie um arquivo chamado <em>service.js</em>: é nele que você irá criar as funções que são pedidas nos exercícios. Você também pode utilizar o mesmo arquivo criado durante o conteúdo do dia.  </li>
  <li>
Crie um arquivo chamado <em>service.test.js</em>: é ele que vai conter os testes das funções do arquivo anterior.  </li>
</ul>
<ol>
  <li>
Crie uma função que gere um número aleatório  </li>
</ol>
<ul>
  <li>
Defina uma função que gere um número aleatório entre 0 e 100.  </li>
  <li>
Desenvolva os testes para essa função.  </li>
  <li>
Utilize o mock e defina o retorno padrão como 10.  </li>
  <li>
Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.  </li>
</ul>
<ol start="2">
  <li>
Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.  </li>
</ol>
<ul>
  <li>
Defina o mock da função para a nova funcionalidade da função.  </li>
  <li>
Teste se a função foi chamada e a nova implementação de divisão foi aplicada.  </li>
  <li>
Verifique se a aplicação da nova implementação acontece apenas uma vez.  </li>
</ul>
<ol start="3">
  <li>
Use a mesma função do primeiro exercício  </li>
</ol>
<ul>
  <li>
Utilize o mock e desenvolva uma nova implementação que receba três parâmetros  </li>
  <li>
Retorne a multiplicação dos parâmetros.  </li>
  <li>
Realize os testes que achar necessário.  </li>
  <li>
Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.  </li>
  <li>
Faça os testes que achar necessário.  </li>
</ul>
<ol start="4">
  <li>
Crie três funções.  </li>
</ol>
<ul>
  <li>
    <div class="pt-1 pb-1">
Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta.    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
Elabore a terceira função: essa função deve receber duas strings e concatená-las.    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
A. Faça o mock das funções para com os seguintes casos:    </div>
    <ul>
      <li>
Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.      </li>
      <li>
Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.      </li>
      <li>
Implemente, na terceira função: ela deve receber três strings e concatená-las.      </li>
    </ul>
  </li>
  <li>
    <div class="pt-1 pb-1">
B. Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
C. Após criar os testes, restaure a implementação da primeira função.    </div>
    <ul>
      <li>
Faça o teste necessário para garantir que a implementação da função foi restaurado.      </li>
    </ul>
  </li>
</ul>
<ol start="5">
  <li>
Crie uma função que faça requisição para a api <a class="external-link" href="https://dog.ceo/dog-api/" target="_blank" rel="noopener noreferrer">dog pictures</a>.  </li>
</ol>
<ul>
  <li>
<em>Mocke</em> a requisição e crie dois testes.    <ul>
      <li>
O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success".      </li>
      <li>
O segundo deve interpretar que a requisição falhou e ter como valor "request failed".      </li>
    </ul>
  </li>
  <li>
Crie todos os testes que achar necessário.  </li>
</ul>

### Parte 2

<div class="pt-1 pb-1">
Agora vamos aplicar os <em>mocks</em> aprendidos até aqui no React!!</div>
<div class="pt-1 pb-1">
Para isso acesse o <a class="external-link" href="https://github.com/tryber/exercise-digimon-finders" target="_blank" rel="noopener noreferrer">repositório do Digimon Finders</a>, que é aplicação em React já funcionando. Leia o <em>README</em> para as instruções mais detalhadas de como realizar o exercício.</div>
