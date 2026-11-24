# Panda School

> Simulados de prova que viram jogo. Estude brincando, revise de verdade.

**Panda School** é um app web instalável (PWA) que ajuda crianças e adolescentes a estudarem para provas. O responsável envia uma foto ou um arquivo da matéria, e o app transforma o conteúdo em quizzes, forca, caça-palavras e jogos da memória, com gamificação e revisão espaçada.

> 🚧 Projeto em fase inicial (v0.1.0). Veja o [roadmap](docs/ROADMAP.md).

## Como funciona

```
Responsável cria conta → cadastra filhos → envia foto/arquivo da matéria
  → IA extrai o texto e gera perguntas → responsável revisa
  → jogo (quiz, forca, caça-palavras, memória) → resultado alimenta a revisão espaçada
```

O conteúdo é gerado uma vez em um **banco de itens** e reaproveitado por todos os jogos. Detalhes em [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Rodando localmente

Requisitos: [Node.js](https://nodejs.org) 18 ou superior.

```bash
git clone https://github.com/SEU_USUARIO/panda-school.git
cd panda-school
npm start        # abre em http://localhost:3000
```

O app fica na pasta `app/` e não precisa de etapa de build nesta fase.

## Mudando o nome do projeto

O nome é uma variável. Para trocar em todos os arquivos de uma vez:

```bash
npm run rename -- "Novo Nome" --autor "Seu Nome"
```

Depois, ajuste manualmente a URL do repositório e o domínio, se houver.

## Publicação

O deploy no GitHub Pages é automático a cada push na branch `main` (veja `.github/workflows/deploy.yml`). Ative em *Settings → Pages → Source: GitHub Actions*.

## Privacidade

Este projeto é voltado a menores de idade e trata dados com o mínimo necessário. Leia a [política de privacidade](PRIVACY.md).

## Contribuindo

Contribuições são bem-vindas. Leia o [guia de contribuição](CONTRIBUTING.md) e o [código de conduta](CODE_OF_CONDUCT.md).

## Licença

[MIT](LICENSE)
