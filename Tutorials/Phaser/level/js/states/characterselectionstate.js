MainGame.CharacterSelectionState = function(game){

};
MainGame.CharacterSelectionState.prototype = {

	create: function(){
		var width = 512;
		this.add.sprite(0, 0, 'background');
		var text = "Choose your Character.";
		var style = { font: "45px Arial", fill: "#ff0044", align: "center" };
		var t = this.game.add.text(10, 0, text, style);
		this.game.add.existing(t)
		var bubblegum_btn = new Phaser.Button(this.game, 75, 200, 'bubblegumbutton', function(){
			this.game.key = 'Gumball';
			this.game.state.start('Game');
		}, this, 0, 0, 0);
		bubblegum_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(bubblegum_btn);

		var corn_btn = new Phaser.Button(this.game,  200, 200, 'cornbutton', function(){
			this.game.key = 'Corn';
			this.game.state.start('Game');
		}, this, 0, 0, 0);
		corn_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(corn_btn);
	
		var mint_btn = new Phaser.Button(this.game,  350, 200, 'mintbutton', function(){
			this.game.key = 'Mint';
			this.game.state.start('Game');
		}, this, 0, 0, 0);
		mint_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(mint_btn);
		

	},

	update: function(){

	}
};