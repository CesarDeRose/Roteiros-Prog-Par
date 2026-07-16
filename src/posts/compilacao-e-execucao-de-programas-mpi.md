---
title: "Compilação e Execução de Programas MPI"
publishedAt: "2026-07-15"
summary: "Comandos para compilar e executar programas MPI localmente e em uma máquina remota."
---

## Compilação em máquina local

```sh
mpicc file.c -o file_exec
```

## Execução em máquina local

```sh
mpirun -np 1 ./file_exec
```

> onde `np` é o número de processos MPI que serão criados.

## Compilação em máquina remota (LAD)

```sh
mpicc file.c -o file_exec
```

## Execução em máquina remota (LAD)

```sh
srun -N 2 -n 2 ./file_exec
```

> onde `N` é o número de nodos alocados na máquina e `n` o número total de processos MPI que serão criados.

> atente que a saída de tela só aparece no terminal **após** a execução toda do programa (`MPI_FINALIZE`).

## Execução exclusiva na máquina (para fins de medição de tempo)

Para realizar uma execução com o propósito de medir o tempo transcorrido é importante garantir que será realizada sem a interferência de outra aplicação na mesma máquina, ou seja, com a utilização esclusiva dos recursos. Pra isto usaremos o parâmetro **--exclusive**.

```sh
srun --exclusive -N 2 -n 2 ./file_exec
```

## Execução de mais processos que processadores (acima do HT)

```sh
srun --oversubscribe -N 2 -n 2 ./file_exec
```
