## Gerar o build para o projeto

1. Certifique-se de que todas as dependências do projeto estão instaladas e atualizadas.
2. Abra o terminal no diretório raiz do projeto.
3. Execute o seguinte comando para gerar o build do projeto:

```suggestion
npm run build
```

Este comando criará uma pasta `dist` no diretório raiz do projeto, contendo os arquivos otimizados para produção.

<br>

## Subir para o Github Pages

1. Crie um repositório no Github para o projeto, se ainda não tiver criado.
2. No terminal, execute o seguinte comando para instalar o pacote `gh-pages`:

```suggestion
npm install gh-pages
```

3. Adicione a propriedade `homepage` ao `package.json`, com o valor sendo o link para o seu Github Pages:

```suggestion
"homepage": "https://<seunome>.github.io.github.io/<seuprojeto>"
```

4. Adicione os seguintes scripts ao `package.json`:

```suggestion
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

O script `predeploy` irá gerar o build do projeto antes do deploy, e o script `deploy` irá subir os arquivos para o Github Pages.

5. No terminal, execute o seguinte comando para fazer o deploy do projeto:

```suggestion
npm run deploy
```

Este comando irá gerar o build do projeto e subir os arquivos para o Github Pages. Após a conclusão, você poderá acessar o seu projeto em `https://<seunome>.github.io.github.io/<seuprojeto>`.
