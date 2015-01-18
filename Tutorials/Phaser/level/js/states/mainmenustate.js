MainGame.MainMenuState = function(game){

};

MainGame.MainMenuState.prototype = {

	create: function(){
		var width = 512;
		this.add.sprite(0, 0, 'background');
		var start_btn = new Phaser.Button(this.game, width /2, 300, 'start_btn', function(){
			this.game.state.start('CharacterSelection');
		}, this, 1, 0, 0);
		start_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(start_btn);

		var instructions_btn = new Phaser.Button(this.game, width /2, 380, 'instructions_btn', function(){
			console.log("instructions");
		}, this, 1, 0, 0);
		instructions_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(instructions_btn);


	},

	update: function(){

	}
};