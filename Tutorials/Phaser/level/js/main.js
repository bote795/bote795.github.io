var width = 512;
var height= 512 ;

var game = new Phaser.Game( width, height, Phaser.Canvas, 'phaser-div');

game.state.add('Boot', MainGame.BootState);
game.state.add('Loader', MainGame.LoaderState);
game.state.add('MainMenu', MainGame.MainMenuState);
game.state.add('CharacterSelection', MainGame.CharacterSelectionState);
game.state.add('Game', MainGame.GameState);

CollisionManager = new CollisionManager(game);
WaveManager = new WaveManager(game);

game.state.start('Boot');
window.game = game;