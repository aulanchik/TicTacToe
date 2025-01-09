let TicTacToe = require('./game.js').default;

describe('The tic tac toe game', () => {
    let game;

    beforeEach(() => {
        game = new TicTacToe();
    });

    it('should create empty board and initialize new game', () =>  {
        game.startGame();
        expect(game.getGameStatus()).toBe('ongoing');
        expect(game.getBoard()).toEqual([ null, null, null, null, null, null, null, null, null ]);
    });

    it('should allow player to make a move on unoccupied position', () => {
        game.startGame();
        game.makeMove(0);
        expect(game.getBoard()).toEqual([ 'X', null, null, null, null, null, null, null, null ]);
    });

    it('should not allow to make a move on already taken position', () => {
        game.startGame();
        game.makeMove(0);
        expect(() => game.makeMove(0)).toThrowError('Invalid move');
        expect(game.getBoard()).toEqual([ 'X', null, null, null, null, null, null, null, null ]);
    });

});
