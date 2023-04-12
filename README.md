## Gerar o build para o projeto

1. Certifique-se de que todas as dependências do projeto estão instaladas e atualizadas.
2. Abra o terminal no diretório raiz do projeto.
3. Execute o seguinte comando para gerar o build do projeto, que criará uma pasta `dist` no diretório raiz do projeto, contendo os arquivos otimizados para produção:

```suggestion
npm run build
```

<br>

## Subir para o Github Pages

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
