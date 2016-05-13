MainGame.ControlsState = function(game){

};
MainGame.ControlsState.prototype = {

	create: function(){
		var width = 1024;
		this.add.sprite(0, 0, 'background');
		var text = "Controls";
		var style = { font: "80px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t = this.game.add.text(width/2, 50, text, style);
        t.anchor.setTo(0.5,0.5);
		this.game.add.existing(t);

		this.add.sprite(300, 130, 'q');
		this.add.sprite(300, 220, 'wasd');
        this.add.sprite(650, 200, 'mouse');
        this.add.sprite(300, 385, 'shift');
      	this.add.sprite(300, 470, 'space');
		
		var text1 = "Use Items - ";
		var style1 = { font: "40px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t1 = this.game.add.text(90, 135, text1, style1);
		this.game.add.existing(t1);	
		
		var text2 = "Move -";
		var t2 = this.game.add.text(175, 260, text2, style1);
		this.game.add.existing(t2);
		
		var text3 = "Use mouse to fire";
		var t3 = this.game.add.text(575, 135, text3, style1);
		this.game.add.existing(t3);	
		
		var text4 = "Sprint -";
		var t4 = this.game.add.text(170, 400, text4, style1);
      	
	    var text5 = "Special -";
      	var t5 = this.game.add.text(145, 480, text5, style1);
		
		var back_btn = new Phaser.Button(this.game, width/2, 700, 'backbutton', function(){
			this.game.state.start('MainMenu');
		}, this, 1, 0, 0);
		back_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(back_btn);
		
		
	},

	update: function(){

	}
};