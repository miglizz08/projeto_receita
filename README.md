# Projeto Receita

Atividade de receitas desenvolvida com Next.js. As receitas são carregadas da API pública DummyJSON e exibidas em cartões responsivos.

## Como executar

```bash
npm install
npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000). A página inicial direciona para `/recipes`.

## Tecnologias

- Next.js 16.3.0
- React 19.2.8
- CSS Modules

## Como subir para o GitHub

1. No GitHub, crie um repositório vazio chamado `projeto_receita`. Não marque as opções para criar README, `.gitignore` ou licença, pois esses arquivos já existem neste projeto.

2. Abra o terminal dentro desta pasta e execute os comandos abaixo. Troque `SEU-USUARIO` pelo seu usuário do GitHub:

```bash
# Confere se está tudo certo antes de enviar.
git status

# Conecta este projeto ao repositório criado no GitHub.
git remote add origin https://github.com/SEU-USUARIO/projeto_receita.git

# Envia os arquivos para o GitHub pela primeira vez.
git push -u origin main
```

Depois de alterar o projeto no futuro, use:

```bash
# Separa todas as alterações para o próximo envio.
git add .

# Cria um registro explicando a alteração.
git commit -m "Descreva aqui a alteração"

# Envia a nova versão para o GitHub.
git push
```
