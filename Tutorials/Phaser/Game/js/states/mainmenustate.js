MainGame.MainMenuState = function(game){
	
};

MainGame.MainMenuState.prototype = {

	create: function(){	
      
		var width = 1024;
		this.add.sprite(0, 0, 'background');
	
      	var text = "The Infinite Zombie \nExperience";
		var style = { font: "85px Arial", fill: "#a6a6a6", align: "center" };
		var t = this.game.add.text(width/2, 125, text, style);
		t.anchor.setTo(0.5,0.5);	
 	    this.game.add.existing(t);
      
		var start_btn = new Phaser.Button(this.game, width /2, 300, 'start_btn', function(){
			this.game.state.start('CharacterSelection');
		}, this, 1, 0, 0);
		start_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(start_btn);

		var instructions_btn = new Phaser.Button(this.game, width /2, 380, 'instructions_btn', function(){
			this.game.state.start('InstructionState');
		}, this, 1, 0, 0);
		instructions_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(instructions_btn);
        
        var controls_btn = new Phaser.Button(this.game, width /2, 460, 'controls_btn', function(){
			this.game.state.start('ControlsState');
		}, this, 1, 0, 0);
	    controls_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(controls_btn);

	},

	update: function(){

	}
};