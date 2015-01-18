MainGame.GameState = function(game){

};

MainGame.GameState.prototype = {

	create: function(){

		 this.game.map = this.add.sprite(0, 0, 'background');
		//this.game.player = new Player(this.game, {x:300, y:300} );
		this.game.player = new Player(this.game, {x:300, y:300}, this.game.key  ); 
		//this.game.camera.follow(this.game.player);
 
		
	},

	update: function(){
		/*
		InputManager.update();
		CollisionManager.update();
		GUIManager.update();
		WaveManager.update();
		*/
		this.game.player.update();
	},

	render: function(){

		/*this.game.debug.renderSpriteCorners(this.tooth, false, false);
		this.game.debug.renderSpriteCorners(this.game.player, false, false);*/
		//this.game.debug.renderSpriteBody(this.game.player);
		//this.game.debug.renderSpriteBody(this.tooth);
	}
};