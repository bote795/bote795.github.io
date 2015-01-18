MainGame.AdvancedState = function(game){

};
MainGame.AdvancedState.prototype = {

	create: function(){
		var width = 1024;
		this.add.sprite(0, 0, 'background');
		var text = "Advanced Instructions";
		var style = { font: "80px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t = this.game.add.text(width/2, 50, text, style);
        t.anchor.setTo(0.5,0.5);
		this.game.add.existing(t);

		var text1 = "- Health Potions heal 25 health";
		var style1 = { font: "35px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t1 = this.game.add.text(100, 125, text1, style1);
		this.game.add.existing(t1);
		
		var text2 = "- Energy Potions regenerate 50 energy";
		var t2 = this.game.add.text(100, 200, text2, style1);
		this.game.add.existing(t2);		
		
		var text3 = "- Revive Potions allow the player to automatically respawn on death";
		var style2 = { font: "31px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t3 = this.game.add.text(100, 275, text3, style2);
		this.game.add.existing(t3);	
		
		var text4 = "- Health Upgrades increase the maximum health by 25";
		var t4 = this.game.add.text(100, 350, text4, style1);
		this.game.add.existing(t4);	
		
		var text5 = "- Energy Upgrades increase the maximum energy by 10";
		var t5 = this.game.add.text(100, 425, text5, style1);
		this.game.add.existing(t5);	
      
		var back_btn = new Phaser.Button(this.game, width/2, 700, 'backbutton', function(){
			this.game.state.start('MainMenu');
		}, this, 1, 0, 0);
		back_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(back_btn);
		
		
	},

	update: function(){

	}
};