MainGame.GameState = function(game){

};

MainGame.GameState.prototype = {

	create: function(){

		 this.game.map = this.add.sprite(0, 0, 'background');
		//this.game.player = new Player(this.game, {x:300, y:300} );
		
		this.game.player = new Player(this.game, {x:300, y:300}, this.game.key  ); 
		//this.game.camera.follow(this.game.player);
		this.game.zombie = new Zombie(this.game, {x:200, y:200} );
	
	},

	update: function(){
		/*
		InputManager.update();
		CollisionManager.update();
		GUIManager.update();
		WaveManager.update();
		*/
		//this.game.player.update();
		//this.game.zombie.update();
		CollisionManager.update();
	},

	render: function(){

	}
};
