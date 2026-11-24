# Arquitetura (rascunho)

## Ideia central: banco de itens

A IA não cria um jogo para cada formato. Ela extrai da matéria um **banco de itens**, e cada jogo é uma "pele" sobre esses itens.

Exemplo de item:

```json
{
  "id": "uuid",
  "materia": "Ciências",
  "assunto": "Fotossíntese",
  "pergunta": "Qual gás as plantas absorvem na fotossíntese?",
  "resposta": "Gás carbônico",
  "distratores": ["Oxigênio", "Nitrogênio", "Hélio"],
  "termo": "fotossíntese",
  "dica": "Acontece nas folhas, com luz"
}
```

| Jogo | Campos usados |
|---|---|
| Quiz | pergunta, resposta, distratores |
| Forca | termo, dica |
| Caça-palavras | termo |
| Memória | termo ↔ resposta/definição |
| Flashcard | pergunta, resposta |

## Camadas

- `app/js/games/`: um módulo por jogo, todos recebem itens e devolvem resultados.
- `app/js/services/`: IA (extração e geração), repetição espaçada, armazenamento.
- `app/js/pages/`: telas.

## Decisões em aberto

- Backend e autenticação (ex.: Supabase) e quando introduzi-los.
- Provedor de IA e como limitar custo (chave por usuário ou limite diário).
- Algoritmo de repetição espaçada (ex.: FSRS).
- Introduzir um bundler (Vite) quando o app crescer.
