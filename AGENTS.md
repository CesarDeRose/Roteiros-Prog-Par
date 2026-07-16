# Guia para criação de tutoriais

## Objetivo

Auxilie na criação, revisão e organização dos tutoriais publicados por
este repositório. O trabalho editorial deve ficar concentrado nos
arquivos Markdown de `src/posts/`.

Use `POST_TEMPLATE.md` como referência para todo novo tutorial. Não
altere componentes, estilos, configurações, dependências ou workflows,
a menos que o usuário solicite isso explicitamente.

## Criar um tutorial

- Crie o arquivo em `src/posts/` com a extensão `.md`.
- Use um nome curto, descritivo e relacionado ao conteúdo.
- Escreva o nome em letras minúsculas e sem espaços ou acentos.
- Separe palavras com hífens.
- Considere que o nome do arquivo será parte da URL pública.

Exemplo:

```text
src/posts/compilacao-e-execucao-de-programas-mpi.md
```

## Metadados

Todo tutorial deve começar com estes três campos:

```yaml
---
title: "Título do tutorial"
publishedAt: "AAAA-MM-DD"
summary: "Descrição curta do conteúdo."
---
```

- `title` deve ser claro e descrever o assunto principal.
- `publishedAt` deve ser uma data válida no formato `AAAA-MM-DD`.
- `summary` deve ser uma frase curta adequada para a listagem inicial.
- Não adicione outros campos sem uma solicitação explícita.
- Não repita o título com `#` no corpo; o site já renderiza o título.

Os tutoriais são ordenados do mais recente para o mais antigo pela data
definida em `publishedAt`.

## Formatação

- Use `##` e níveis inferiores para organizar as seções.
- Use parágrafos curtos e instruções diretas.
- Use **negrito** somente para dar ênfase.
- Use `código em linha` para comandos, parâmetros e identificadores.
- Informe a linguagem em blocos de código, como `sh`, `c` ou `ts`.
- Use listas numeradas quando a ordem dos passos for importante.
- Use listas sem ordem para itens independentes.
- Use citações (`>`) para observações relevantes.

Linhas específicas de um bloco podem ser destacadas com números entre
chaves:

````markdown
```ts{2-4}
const exemplo = true;
```
````

## Revisão editorial

- Preserve o idioma, o significado e o estilo solicitado pelo autor.
- Corrija erros evidentes somente quando isso não alterar a intenção.
- Não invente referências, links, resultados ou detalhes técnicos.
- Não adicione imagens, vídeos, comentários ou integrações externas sem
  solicitação explícita.
- Confira se comandos e exemplos permanecem iguais aos fornecidos.
- Evite conteúdo pessoal ou identificadores que não pertençam ao autor.

## Alterar ou remover tutoriais

- Para editar, altere somente o arquivo correspondente em `src/posts/`.
- Preserve o nome do arquivo para não mudar a URL existente.
- Altere `publishedAt` apenas quando o usuário solicitar.
- Para remover, exclua somente o Markdown solicitado.
- Nunca use `POST_TEMPLATE.md` como conteúdo publicado.

## Checklist final

- O arquivo está dentro de `src/posts/`.
- O nome do arquivo segue o padrão com hífens.
- Os três metadados obrigatórios estão preenchidos.
- A data usa o formato `AAAA-MM-DD`.
- Não existe um título `#` duplicado no corpo.
- Todos os blocos de código possuem fechamento.
- O resumo representa corretamente o tutorial.
- Somente os arquivos editoriais necessários foram alterados.
