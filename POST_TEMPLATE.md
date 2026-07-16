---
title: "Título do tutorial"
publishedAt: "AAAA-MM-DD"
summary: "Uma descrição curta do conteúdo do tutorial."
---

Este parágrafo apresenta o tutorial. Substitua todo o conteúdo deste
arquivo pelo texto que deseja publicar.

## Títulos

Use títulos para dividir o tutorial em seções claras. O texto aceita
**negrito**, _itálico_ e `código em linha`.

### Listas

- Mantenha cada item objetivo.
- Use listas sem ordem quando a sequência não for importante.
- Agrupe ideias relacionadas.

1. Comece pelo primeiro passo.
2. Continue na ordem necessária.
3. Termine com um resultado claro.

> Citações podem destacar uma observação ou informação importante.

## Código

Blocos de código usam destaque de sintaxe. Informe a linguagem depois
das três crases. Os números entre chaves destacam linhas específicas.

```ts{2-4}
type Tutorial = {
  title: string;
  publishedAt: string;
  summary: string;
};

export function obterTitulo(tutorial: Tutorial): string {
  return tutorial.title;
}
```

## Encerramento

Finalize o tutorial com um resumo ou com os próximos passos para quem
está lendo.
