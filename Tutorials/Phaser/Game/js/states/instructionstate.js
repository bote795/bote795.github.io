MainGame.InstructionState = function(game){

};
MainGame.InstructionState.prototype = {

	create: function(){
		var width = 1024;
		this.add.sprite(0, 0, 'background');
		var text = "Instructions";
		var style = { font: "80px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t = this.game.add.text(width/2, 50, text, style);
        t.anchor.setTo(0.5,0.5);
		this.game.add.existing(t);

		var text1 = "- Survive zombies until the end of the round";
		var style1 = { font: "40px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t1 = this.game.add.text(100, 125, text1, style1);
		this.game.add.existing(t1);
		
		var text2 = "- Every 5 rounds you will automatically revive";
		var style2 = { font: "40px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t2 = this.game.add.text(100, 200, text2, style2);
		this.game.add.existing(t2);		
		
		var text3 = "- Keep health above 0";
		var style3 = { font: "40px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t3 = this.game.add.text(100, 275, text3, style3);
		this.game.add.existing(t3);	
		
		var text4 = "- Energy regenerates slowly over time";
		var style4 = { font: "40px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t4 = this.game.add.text(100, 350, text4, style4);
		this.game.add.existing(t4);	
		
		var text5 = "- Keep moving to survive";
		var style5 = { font: "40px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t5 = this.game.add.text(100, 425, text5, style5);
		this.game.add.existing(t5);	
		
		var text6 = "- Purchase upgrades in shops";
		var style6 = { font: "40px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t6 = this.game.add.text(100, 500, text6, style6);
		this.game.add.existing(t6);	
		
      	var advanced_btn = new Phaser.Button(this.game, width/2, 640, 'advanced', function(){
        	this.game.state.start('AdvancedState');
      	}, this, 1, 0, 0);
      	advanced_btn.anchor.setTo(0.5,0.5);
      	this.game.add.existing(advanced_btn);
      
		var back_btn = new Phaser.Button(this.game, width/2, 700, 'backbutton', function(){
			this.game.state.start('MainMenu');
		}, this, 1, 0, 0);
		back_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(back_btn);
		
		
	},

	update: function(){

	}
};