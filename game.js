let TicTacToe = class {
    constructor() {
        this.startGame();
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
        if (this.board[position] !== null || this.gameStatus !== 'ongoing') {
            throw new Error('Invalid move');
        }

        this.board[position] = this.currentPlayer;

        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        const hasWinner = winningCombinations.some(([a, b, c]) =>
            this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]
        );

        if (hasWinner) {
            this.gameStatus = `winner:${this.currentPlayer}`;
            return;
        }

        if (this.board.every(cell => cell !== null)) {
            this.gameStatus = 'draw';
            return;
        }

        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
};

module.exports.default = TicTacToe;
