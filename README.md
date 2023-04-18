
# in_progress

A component to manage student progress.

<br>

---

<br>

&nbsp;&nbsp;&nbsp;[Descrição](#descricao)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Requisitos](#requisitos)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Rodando local](#local)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Build](#build)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Deploy](##deploy)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Colaboradores](#colaboradores)&nbsp;&nbsp;&nbsp;

<br>

---

## Descrição <a name="descricao"></a>

O programa de monitoramento de desempenho de alunos do curso de Desenvolvimento Full-Stack da Digital College tem como objetivo coletar informações de scores de diversas aplicações como freeCodeCamp, Duolingo, GitHub, entre outras, para apresentá-las de forma organizada e intuitiva.

Com o programa, será possível visualizar informações detalhadas sobre o desempenho dos alunos em cada aplicação, permitindo uma análise mais precisa do progresso de cada um deles. O programa também permitirá a comparação entre alunos, facilitando a identificação de padrões e pontos de melhoria.

<br>

---

## Requisitos <a name="requisitos"></a>

### Para reproduzir a aplicação, existem alguns softwares que deverão estar instalados em seu computador

<br>

O Git é amplamente utilizado como um sistema de controle de versão no mundo do desenvolvimento de software. Ele foi criado em 2005 por <a href="https://github.com/torvalds">Linus Torvalds</a>, o criador do kernel do Linux, e é um projeto de código aberto. <a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Uma-Breve-Hist%C3%B3ria-do-Git">Saiba mais...</a>

- [![Git](https://img.shields.io/badge/Git-Repository-orange.svg)](https://git-scm.com/)

<br>

Node.js é um ambiente de tempo de execução de JavaScript de plataforma cruzada, construído com o mecanismo de JavaScript V8 do Google Chrome. Ele permite que os desenvolvedores usem o <a href="https://github.com/topics/javascript">JavaScript</a> para escrever ferramentas do lado do servidor, scripts de linha de comando e aplicativos da web em tempo real. <a href="https://pt.wikipedia.org/wiki/Node.js">Saiba mais...</a>

- [![Node.js](https://img.shields.io/badge/Node.js-Download-brightgreen)](https://nodejs.org/en/download/)

<br>

Visual Studio é um ambiente integrado de desenvolvimento (IDE) criado pela Microsoft. Ele suporta várias linguagens de programação, incluindo C#, C++, VB.NET, F#, Python e muitas outras. <a href="https://learn.microsoft.com/pt-br/visualstudio/get-started/visual-studio-ide?view=vs-2022">Saiba mais...</a>

- [![Visual Studio](https://img.shields.io/badge/Visual%20Studio-Download-blue.svg)](https://visualstudio.microsoft.com/downloads/)

<br>

Apos instalado será necessário uma extensão para o Visual Studio:

- [![MDX Extension for Visual Studio Code](https://img.shields.io/visual-studio-marketplace/v/silvenon.mdx?label=MDX%20Extension&color=blue)](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)

<br>

---

## Rodando local <a name="local"></a>

1. Clone o repositório:
  Para rodar o projeto localmente, abra o seu ambiente de trabalho local(VsCode, gitpod ou outro editor) e no terminal, no diretório onde você quer armazenar o projeto, digite:
  ```suggestion
  git clone https://github.com/dcTeam7/in_progress.git
  ```
2. Após isso, para rodar o projeto seguiremos o passo a passo para rodar projetos vite. Digite essas linhas no repositório do seu projeto
```suggestion
npm install
npm run dev
```


<br>

---

## Build <a name="build"></a>

1. Certifique-se de que todas as dependências do projeto estão instaladas e atualizadas.
2. Abra o terminal no diretório raiz do projeto.
3. Execute o seguinte comando para gerar o build do projeto, que criará uma pasta `dist` no diretório raiz do projeto, contendo os arquivos otimizados para produção:

```suggestion
npm run build
```

<br>

## Deploy <a name="deploy"></a>


1. Crie um repositório no Github para o projeto, se ainda não tiver criado.
2. Em seguida, configure o Vite para que ele use caminhos relativos ao vincular arquivos de recursos em HTML, conforme a [documentação](https://pt.vitejs.dev/config/shared-options.html). Isso é feito para que o GitHub Pages saiba onde encontrar os arquivos. Tudo o que você precisa fazer é abrir `vite.config.js` (ou `vite.config.ts` se seu projeto estiver usando TypeScript) e adicionar a seguinte linha dentro de `defineConfig`:

```suggestion
base: "./"
```

3. Finalmente, vamos configurar o GitHub Actions. Primeiro, dentro do repositório crie uma pasta `.github/workflows`, e dentro dela crie um arquivo chamado `build.yml`. Nele, adicione o seguinte código:

```suggestion
name: Build and Deploy

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages
          folder: dist
```

Este arquivo de fluxo de trabalho define as etapas necessárias para construir e implantar seu projeto. Ele dispara quando houver um push na branch main.

4. Adicione e confirme as alterações no repositório.
5. Volte ao seu repositório no GitHub e navegue até a aba "Actions". Você verá o seu fluxo de trabalho sendo executado.
6. Quando o fluxo de trabalho for concluído, verifique se seu site foi implantado. O GithubPages já está pré-configurado para servir a branch gh-pages como site.

Pronto! Agora, todas as vezes que você fizer push na branch "main", o GithubActions irá construir e implantar o seu projeto Vite automaticamente.

<br>

---

## Colaboradores <a name="colaboradores"></a>

Nossos agradecimentos a estas pessoas maravilhosas que contribuiram com o projeto:

[![Contributors](https://contributors-img.web.app/image?repo=dcteam7/in_progress)](https://github.com/dcteam7/in_progress/graphs/contributors)
