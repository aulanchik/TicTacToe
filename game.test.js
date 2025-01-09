let TicTacToe = require('./game.js').default;

describe('The tic tac toe game', () => {
    let game;

    beforeEach(() => {
        game = new TicTacToe();
    });

    it('should create empty board and initialize new game', () =>  {
        game.startGame();
        expect(game.getGameStatus()).toBe('ongoing');
        expect(game.getBoard()).toEqual([null, null, null, null, null, null, null, null, null]);
    });

});
