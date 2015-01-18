MainGame.GameOverState = function(game){

};

MainGame.GameOverState.prototype = {

	create: function(){
		var width = 1024;
 	    this.game.stage.backgroundColor = '#000';
		this.add.sprite(120, 50, 'gameover');
        
  		var back_btn = new Phaser.Button(this.game, width/2, 740, 'backbutton', function(){
	        CollisionManager.purge();
            WaveManager.purge();
          	InventoryManager.purge();
            this.game.music.stop();	
          	this.game.state.start('MainMenu');
		}, this, 1, 0, 0);
		back_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(back_btn);

	},

	update: function(){

	}
};