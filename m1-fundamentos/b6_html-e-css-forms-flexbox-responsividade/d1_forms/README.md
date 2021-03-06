# Dia 1: HTML & CSS - Forms

## Criando um formulário para concorrer a uma viagem

Imagine que você está surfando na internet. Você agora é uma pessoa desenvolvedora, cansada após finalmente terminar seus estudos e pensando nas suas maravilhosas e merecidas férias.

Então, você se depara com um anúncio do concurso TrybeTrip, que premia com uma viagem totalmente paga e com várias opções de destino. Como você imagina que seria a página para concorrer a essa viagem?

Concorda que seria uma espécie de formulário?

O exercício hoje será desenvolver uma página web com o formulário da TrybeTrip. Desenvolva-o em um arquivo chamado form.html . A estruturação de sua página deverá ficar semelhante com a imagem abaixo.

[![Preview](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/html-forms/images/Excalidraw-forms-94cb593582e99fd08f284274fd8b50ab.png)]

Dicas:

* Crie o costume de adicionar ID's a elementos únicos e classes a elementos com comportamentos similares, pois isso facilitará muito sua vida como pessoa desenvolvedora;
* Procure saber mais sobre as Tags `<label>` e `<fieldset>` clicando nas documentações a seguir:

1. O formulário deverá permitir que o usuário insira os seguintes campos:
    * Nome Completo:
        * Limitado entre 10 e 40 caracteres.
    * E-mail:
        * Limitado entre 10 e 50 caracteres.
    * Destino Preferido:
        * 4 opções: Cidade, Campo, Praia, Montanhas.
    * Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
        * Limite de 500 caracteres.
    * Qual a melhor data para realizar sua viagem?
    * Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
    * Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.

Esses serão os principais campos utilizadas nos próximos exercícios.

2. Crie um botão para enviar as informações preenchidas.

Agora vamos utilizar um pouco de javascript, para isso crie o arquivo script.js e o referencie no HTML.
* Dica: Coloque a tag `<script>` no final do seu body.

3. Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() . Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?

4. Crie um botão que limpe as informações contidas nos campos;
