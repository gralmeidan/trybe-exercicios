# Módulo 4, Seção 1, Dia 2 - Entrada e Saída de Dados

Hoje nós aprendemos como utilizar o venv para criar ambientes de trabalho isolados, como receber input pelo terminal, como tratar exceções e como ler e escrever arquivos TXT, JSON e CSV.

## Exercícios desenvolvidos

<div class="c-kWDhvw"><article class="c-daJEgu">
</article><article class="c-daJEgu"><h3>
Exercício 1:</h3>
<p>
Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:
<em>Entrada:</em></p>
</article><div class="c-jykYDu"><div class="c-fkerDR"><pre style="color: rgb(248, 248, 242); background: rgb(39, 40, 34); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code class="language-bash" style="color: rgb(248, 248, 242); background: none; text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none;"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 1.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">1</span><span>PEDRO</span></code></pre></div></div><article class="c-daJEgu">
<p>
<em>Saída:</em></p>
</article><div class="c-jykYDu"><div class="c-fkerDR"><pre style="color: rgb(248, 248, 242); background: rgb(39, 40, 34); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code class="language-bash" style="color: rgb(248, 248, 242); background: none; text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none;"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 1.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">1</span><span>PEDRO
</span><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 1.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">2</span>PEDR
<span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 1.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">3</span>PED
<span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 1.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">4</span>PE
<span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 1.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">5</span>P</code></pre></div></div><article class="c-daJEgu">
<br>
</article><article class="c-daJEgu"><h3>
Exercício 2:</h3>
<p>
<em>Jogo da palavra embaralhada.</em> Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.</p>
<p>
🦜 Para embaralhar uma palavra faça: <code class="inline">scrambled_word = "".join(random.sample(word, len(word)))</code></p>
<p>
🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: <code class="inline">random.choice(["word1", "word2", "word3"]) -&gt; "word2"</code>.</p>
</article><article class="c-daJEgu"><h3>
Exercício 3:</h3>
<p>
Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.</p>
</article><article class="c-daJEgu"><h3>
 Exercício 4:</h3>
<p>
Dado o seguinte <a target="_blank" href="https://lms-assets.betrybe.com/lms/books.json">arquivo</a> no formato <strong>JSON</strong>, leia seu conteúdo e calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato <strong>CSV</strong> como o exemplo abaixo.</p>
<p>
<em>Saída:</em></p>
</article><div class="c-jykYDu"><div class="c-fkerDR"><pre style="color: rgb(248, 248, 242); background: rgb(39, 40, 34); text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border-radius: 0.3em;"><code class="language-bash" style="color: rgb(248, 248, 242); background: none; text-shadow: rgba(0, 0, 0, 0.3) 0px 1px; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none;"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 1.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">1</span><span>categoria,porcentagem
</span><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 1.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">2</span>Python,0.23201856148491878
<span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 1.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">3</span>Java,0.23201856148491878
<span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 1.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(130, 146, 162);">4</span>PHP,0.23201856148491878</code></pre></div></div><div class="c-bgRMoN c-bgRMoN-iHfhap-position-horizontal c-bgRMoN-fGHEql-cv c-lkkAJt" aria-hidden="true"></div><div class="c-bsTeYW"><div class="c-dVdZKi"></div></div></div>
