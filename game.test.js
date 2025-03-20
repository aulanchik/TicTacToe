let TicTacToe = require('./game.js').default;

describe('The tic tac toe game', () => {
    let game;

    beforeEach(() => {
        game = new TicTacToe();
    });

    it('should create empty board and initialize new game', () =>  {
        expect(game.getGameStatus()).toBe('ongoing');
        expect(game.getBoard()).toEqual([ null, null, null, null, null, null, null, null, null ]);
    });

    it('should allow player to make a move on unoccupied position', () => {
        game.makeMove(0);
        expect(game.getBoard()).toEqual([ 'X', null, null, null, null, null, null, null, null ]);
    });
    
    it('should alternate players after each move', () => {
        game.makeMove(0);
        game.makeMove(1);
        expect(game.getBoard()).toEqual(['X', 'O', null, null, null, null, null, null, null]);
    });

    it('should not allow to make a move on already taken position', () => {
        game.makeMove(0);
        expect(() => game.makeMove(0)).toThrowError('Invalid move');
        expect(game.getBoard()).toEqual([ 'X', null, null, null, null, null, null, null, null ]);
    });

    it('should detect a winner when a player gets three in a row', () => {
        game.makeMove(0);
        game.makeMove(3);
        game.makeMove(1);
        game.makeMove(4); 
        game.makeMove(2);
        expect(game.getGameStatus()).toBe('winner:X');
    });

    it('should detect a winner when a player gets three in a column', () => {
        game.makeMove(0); 
        game.makeMove(1); 
        game.makeMove(3); 
        game.makeMove(4); 
        game.makeMove(6); 
        expect(game.getGameStatus()).toBe('winner:X');
    });

    it('should detect a winner when a player gets three diagonally', () => {
        game.makeMove(0); 
        game.makeMove(1); 
        game.makeMove(4); 
        game.makeMove(2); 
        game.makeMove(8);
        expect(game.getGameStatus()).toBe('winner:X');
    });

    it('should detect a draw when all positions are filled and no one wins', () => {
        game.makeMove(0); 
        game.makeMove(1); 
        game.makeMove(2); 
        game.makeMove(4); 
        game.makeMove(3); 
        game.makeMove(5); 
        game.makeMove(7); 
        game.makeMove(6); 
        game.makeMove(8); 
        expect(game.getGameStatus()).toBe('draw');
    });

    it('should not allow moves after the game is over (win)', () => {
        game.makeMove(0); 
        game.makeMove(3); 
        game.makeMove(1); 
        game.makeMove(4); 
        game.makeMove(2); 
        expect(game.getGameStatus()).toBe('winner:X');
        expect(() => game.makeMove(5)).toThrowError('Invalid move'); 
        expect(game.getBoard()).toEqual(['X', 'X', 'X', 'O', 'O', null, null, null, null]);
    });

    it('should not allow moves after the game is over (draw)', () => {
        game.makeMove(0); 
        game.makeMove(1); 
        game.makeMove(2); 
        game.makeMove(4); 
        game.makeMove(3); 
        game.makeMove(5); 
        game.makeMove(7); 
        game.makeMove(6); 
        game.makeMove(8); 
        expect(game.getGameStatus()).toBe('draw');
        expect(() => game.makeMove(0)).toThrowError('Invalid move');
        expect(game.getBoard()).toEqual(['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X']);
    });
});
