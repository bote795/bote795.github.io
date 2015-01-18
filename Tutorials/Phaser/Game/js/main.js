var width  = 1024;
var height = 768;

var game = new Phaser.Game( width, height, Phaser.Canvas, 'phaser-div');

game.state.add('Boot', MainGame.BootState);
game.state.add('Loader', MainGame.LoaderState);
game.state.add('MainMenu', MainGame.MainMenuState);
game.state.add('CharacterSelection', MainGame.CharacterSelectionState);
game.state.add('Game', MainGame.GameState);
game.state.add('InstructionState', MainGame.InstructionState);
game.state.add('ControlsState', MainGame.ControlsState);
game.state.add('ReadyState', MainGame.ReadyState);
game.state.add('AdvancedState', MainGame.AdvancedState);

CollisionManager = new CollisionManager(game);
WaveManager      = new WaveManager(game);
InventoryManager = new InventoryManager(game);
GUIManager       = new GUIManager(game);

game.state.add('GameOverState', MainGame.GameOverState);

document.addEventListener("mousewheel", function(e){ GUIManager.handleMouseWheel(e); }, false);

game.state.start('Boot');
window.game = game;