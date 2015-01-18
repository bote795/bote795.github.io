MainGame.ReadyState = function(game){

};

MainGame.ReadyState.prototype = {

	create: function(){
		var width = 1024;
		this.add.sprite(0, 0, 'background');
		var text = "The game will start when all players \nin the lobby have pressed ready.";
		var style = { font: "60px Arial", fill: "#a6a6a6", align: "center" };
		var t = this.game.add.text(width/2, 100, text, style);
        t.anchor.setTo(0.5,0.5);
		this.game.add.existing(t);
        
        var style2 = {font: "22px Arial", fill: "#a6a6a6", align: "center"};
        var player1 = this.game.add.text(width/5, 600, "Player 1", style2);
      	player1.anchor.setTo(0.5,0.5);
        this.game.add.extisting(player1);
      
        var player2 = this.game.add.text(2*width/5, 600, "Player 2", style2);
      	player2.anchor.setTo(0.5,0.5);
        this.game.add.extisting(player2);
       
        var player3 = this.game.add.text(3*width/5, 600, "Player 3", style2);
      	player3.anchor.setTo(0.5,0.5);
        this.game.add.extisting(player3);
      
	    var player4 = this.game.add.text(4*width/5, 600, "Player 4", style2);
      	player4.anchor.setTo(0.5,0.5);
        this.game.add.extisting(player4);
        
        var ready_btn = new Phaser.Button(this.game, 2*width/3, 700, 'ready_btn', function(){
			this.game.state.start('MainMenu');
		}, this, 1, 0, 0);
		ready_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(ready_btn);
		
		var back_btn = new Phaser.Button(this.game, width/3, 700, 'backbutton', function(){
			this.game.state.start('MainMenu');
		}, this, 1, 0, 0);
		back_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(back_btn);

	},

	update: function(){

	}
};