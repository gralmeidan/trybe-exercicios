# Bloco 3, Dia 3, Módulo 1

Hoje aprendemos sobre layout em blocos e seletores em CSS.

## Exercícios desenvolvidos

### Fixação 1

Agora vamos reproduzir esse esquema de itens no seu browser! Copie os códigos abaixo e cole-os no seu VS Code, criando um arquivo index.html e um arquivo style.css .
Você provavelmente não conhece algumas das propriedades utilizadas nesse código, mas não tem problema: iremos trabalhá-las mais para frente! Basta se concentrar nas classes que você deve alterar de acordo com as instruções dos comentários.

<span style="color: pink" > index.html </span>

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício de Fixação: box model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caixa width-and-height" style="background: #036b52">A</div>
  <div class="caixa width-and-height padding" style="background: #41197f;">B</div>
  <div class="caixa width-and-height padding margin" style="background: #444955">C</div>
  <div class="caixa width-and-height padding margin border" style="background: #3898EC">D</div>
</body>
</html>
```

<span style="color: pink" > style.css </span>

```CSS
.caixa {
  color: white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  vertical-align: top;
}

.width-and-height {
  height: 50px;
  width: 50px;
}

/* insira na classe abaixo um padding de 20px para aplicá-lo aos itens B, C e D */
.padding {

}

/* insira na classe abaixo uma margem de 30px para aplicá-la aos itens C e D */
.margin {

}

/* insira na classe abaixo uma borda com valor '5px solid black' para aplicá-la ao item D */
.border {
  
}
```

### Fixação 2

<span style="color: pink" > index.html </span>

```HTML
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Posicionamento de elementos</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Exercícios de fixação 3.3</h1>
    <img src="https://bit.ly/39HLUyi" alt="jumpMario" class="super-mario" />
    <img src="https://bit.ly/3arGfMc" alt="goomba" class="goomba" />
    <img src="https://bit.ly/3AVnjks" alt="bowser" class="bowser" />
    <p class="speach">
      Goomba, do something!
    </p>
    <img src="https://bit.ly/3tmxgED" alt="baloon" class="baloon" />
  </body>
</html>
```

<span style="color: pink" > style.css </span>

```CSS
.super-mario {
  width: 200px;
}

.goomba {
  width: 100px;
}

.baloon {

}

.speach {
  font-size: 25px;
}

.bowser {
  width: 200px;
}
```

1. Posicione o Mário acima do Goomba.
2. Posicione a tag p para que fique dentro do balão de fala.
3. Posicione o balão para que se torne uma fala de Bowser.

### Fixação 3

#### PARTE 1

1. Adicione uma lista ordenada dos 3 melhores sites que você conhece.
2. Crie um arquivo no mesmo diretório e nomeie-o de 'style.css'.
3. Nesse arquivo .css, adicione os estilos para que:
O texto das tags 'h1' e 'p' estejam centralizados.
A cor de fundo da sua lista mude quando o cursor estiver sobre o item.
A fonte do item mude quando ele for clicado.
4. Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.
5. No 'style.css', adicione a propriedade 'list-style: none' para ambas as listas. 

#### PARTE 2

Para o próximo exercício, você não deve atribuir nenhuma classe ou id aos componentes, mas apenas utilizar pseudoclasses para individualizar cada elemento!

1. Estilize as divs para que, ao passar o cursor por cima das mesmas, elas ganhem uma borda.
2. Faça cada div ter uma cor própria.
3. Estilize cada uma das tags h3 .
4. Faça a terceira div ser maior que as demais.
5. Deixe as tags ímpares h3 com o texto em itálico.


### Fixação 4

1. Faça com que todos os itens de Listas Ordenadas tenham uma cor de fundo amarela. Se a numeração do item for PAR, faça a cor de fonte ser verde. Se o número for considerado ÍMPAR, utilize a propriedade text-transform para deixar o texto maiúsculo. (Dica: combinar classes pode ser útil aqui).
2. Faça todas as tags Header (h1, h2...) possuírem cor de fonte vermelha e, se alguma delas estiver em itálico, aumente seu tamanho para 40px e acrescente uma borda de 1px preta e sólida.
3. Faça todas as li's terem 20px de tamanho de fonte e, para todo texto em itálico dentro de alguma li, utilize a propriedade font-weight para deixá-lo negrito.
4. Na listagem de linguagens de programação, faça com que as 3 primeiras da lista possuam cor de fonte azul e, se alguma possuir "java*" no texto, utilize uma cor de fundo rosa.
5. (Bônus) Para cada link na lista de aliados da pessoa desenvolvedora, faça com que ao passar o mouse sobre cada um, o texto fique em negrito e assuma a cor de fonte "temática do site"
Dica 1: Utilize o seletor :hover para controlar o passar do mouse.
Dica 2: Sugestão de cores padrão. StackOverflow (laranja), W3Schools (verde), MDN (preta), DevDocs (amarela), Trybe (verde).
