# Tic-Tac-Toe

- [Tic-Tac-Toe](#tic-tac-toe)
  - [Game Rules](#game-rules)
  - [Setup](#setup)

[Tic-tac-toe](https://www.google.com/search?q=tictactoe) (also known as noughts and crosses or Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

The purpose of the exercise is to implement the game and its [rules](#game-rules) inside [`game.js`](./game.js) using a TDD approach, writing tests in [`game.test.js`](./game.test.js).

There is no requirement to build a GUI for this game. All interactions will be via the function(s) you create.

Use any programming style or patterns, but always use a TDD approach.

## Game Rules

1. Player X always goes first
2. Players alternate placing Xs and Os on the board 
3. A player can only play on an unoccupied position
4. When a player has three in a row, horizontally, vertically or diagonally that player wins the game and the game is complete
5. When all nine squares are filled and there is no winner, the game is a draw and the game is complete

## Setup

Assuming that you already have [Node.js LTS](https://nodejs.org/) installed: 

1. `npm install` to install dependencies
2. `npm test` to start [Jest](https://jestjs.io/) watching for file changes and re-running each time a change is made
