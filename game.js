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

    makeMove(position) {
       if (this.board[position] === null && this.gameStatus === 'ongoing') {
            this.board[position] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        } else {
            throw new Error('Invalid move');
        }
    }
};

module.exports.default = TicTacToe;
