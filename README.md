# Mini Engine

## Módulo 1 — Fundação da Engine

---

# Objetivo

Este projeto tem como objetivo desenvolver uma mini engine 2D utilizando JavaScript e a API Canvas, com foco em compreender como uma engine de jogos funciona internamente.

O objetivo principal não é apenas produzir um jogo, mas entender a arquitetura, o fluxo de execução e as decisões de engenharia envolvidas na construção de uma engine.

Todo o projeto está sendo desenvolvido de forma incremental, adicionando apenas responsabilidades realmente necessárias em cada etapa.

---

# Conceitos estudados neste módulo

Durante este primeiro módulo foram trabalhados os seguintes conceitos:

* Organização de projeto.
* Separação de responsabilidades.
* Ciclo principal (Engine Loop).
* Contrato entre entidades.
* Herança.
* Polimorfismo.
* Arquitetura baseada em camadas.
* Baixo acoplamento.

---

# Estrutura do projeto

```text
mini-engine/

│
├── index.html
├── style.css
│
├── public/
│
└── src/
    │
    ├── Engine.js
    ├── Main.js
    │
    ├── core/
    │   └── World.js
    │
    └── entities/
        ├── Entity.js
        └── Player.js
```

---

# Fluxo da Engine

A engine foi construída utilizando uma cadeia de responsabilidades.

```text
main.js
    ↓
Engine.start()
    ↓
Engine.gameLoop()
    ↓
Engine.update()
    ↓
World.update()
    ↓
Player.update()
```

Após a atualização dos objetos, ocorre a renderização.

```text
Engine.draw()
    ↓
World.draw(context)
    ↓
Player.draw(context)
    ↓
CanvasRenderingContext2D
```

Essa separação permite que cada camada conheça apenas sua responsabilidade.

---

# Responsabilidades das classes

## main.js

É o ponto de entrada da aplicação.

Sua única responsabilidade é criar uma instância da classe `Engine` e iniciar a engine.

Ele não possui lógica do jogo.

---

## Engine

A classe `Engine` representa o núcleo da engine.

Ela é responsável por:

* iniciar a engine;
* controlar o Engine Loop;
* atualizar o mundo;
* solicitar a renderização do mundo.

O `Engine` não conhece detalhes das entidades.

Sua única responsabilidade é controlar o fluxo da aplicação.

---

## World

O `World` representa o mundo onde todas as entidades existem.

Suas responsabilidades são:

* armazenar entidades;
* adicionar novas entidades;
* atualizar todas as entidades;
* desenhar todas as entidades.

O `World` não sabe quais entidades existem.

Ele apenas gerencia qualquer objeto que respeite o contrato definido pela classe `Entity`.

---

## Entity

A classe `Entity` define um contrato para todas as entidades da engine.

Ela estabelece que qualquer entidade deve implementar os métodos:

* `update()`
* `draw(context)`

Neste módulo ela não possui estado próprio.

Seu objetivo é apenas padronizar o comportamento esperado das entidades.

---

## Player

A classe `Player` representa a primeira entidade do projeto.

Atualmente ela possui apenas:

* posição;
* tamanho;
* implementação do método `draw()`.

O comportamento será expandido nos próximos módulos.

---

# Decisões de arquitetura

## Utilização de uma classe World

Foi decidido utilizar uma classe `World` para centralizar o gerenciamento das entidades.

Dessa forma, o `Engine` não precisa conhecer jogadores, inimigos, paredes ou qualquer outro objeto específico.

Essa decisão reduz o acoplamento entre as classes e facilita a evolução da engine.

---

## Contrato através da classe Entity

Em vez de realizar verificações como:

```javascript
if (entity.draw) { ... }
```

foi adotado um contrato.

Toda entidade da engine deve implementar:

* `update()`
* `draw(context)`

Isso simplifica o código do `World` e deixa a arquitetura mais consistente.

---

## Desenvolvimento incremental

Durante este módulo foi adotada a filosofia de adicionar apenas funcionalidades necessárias.

Nenhuma responsabilidade foi criada antecipadamente.

Por exemplo, a classe `Entity` ainda não possui atributos como velocidade, vida ou posição, pois esses conceitos ainda não são necessários para todas as entidades.

Essa abordagem evita complexidade prematura e mantém a arquitetura simples e flexível.

---

# Estado atual da engine

Ao final deste módulo, a engine é capaz de:

* iniciar corretamente;
* criar um mundo;
* criar entidades;
* adicionar entidades ao mundo;
* atualizar entidades através do Engine Loop;
* desenhar entidades utilizando o Canvas.

Embora simples, esta estrutura estabelece a base arquitetural sobre a qual todos os próximos sistemas serão construídos.

---

# Próximos módulos

Os próximos estudos contemplarão a evolução da engine com novos sistemas, incluindo:

* sistema de Input;
* movimentação do jogador;
* Delta Time;
* colisão AABB;
* câmera;
* gerenciamento de cenas;
* animações;
* física.

Cada módulo será desenvolvido sobre a arquitetura criada neste primeiro estágio, preservando o baixo acoplamento e a separação de responsabilidades.
