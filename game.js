let TicTacToe = class {
    constructor() {
        this.board = Array(9).fill(null);
        this.gameStatus = 'ongoing';
        this.currentPlayer = 'X';
    }

    startGame() {
        this.board = Array(9).fill(null);
        this.gameStatus = 'ongoing';
        this.currentPlayer = 'X';
    }

    getBoard() {
        return this.board;
    }

    getGameStatus() {
        return this.gameStatus;
    }
};

module.exports.default = TicTacToe;
