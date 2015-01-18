function CollisionManager(game){

	this.game = game;
	this.groups = {
		  players: []
		, layers: []
		, bullets: []
		, baddies: []
	};
}
CollisionManager.prototype.addObjectToGroup = function(obj, group){

	var arr = this.groups[group];
	arr.push(obj);
};

CollisionManager.prototype.removeObjectFromGroup = function(obj, group){

	var arr = this.groups[group];

	if(arr.indexOf(obj) >= 0){
		arr.splice(arr.indexOf(obj), 1);
	}

};
CollisionManager.prototype.purge = function(){

	for(var i in this.groups){
		var arr = this.groups[i];
		arr = [];
		this.groups[i] = [];
	}
}
CollisionManager.prototype.update = function(){


	//PLAYER VS BADDIES
	for( var i = 0; i < this.groups.players.length; i++ ){
		var player = this.groups.players[i];
		for( var k = 0; k < this.groups.baddies.length; k++ ){
			var baddie = this.groups.baddies[k];
			
			this.game.physics.collide(player, baddie, function(){
					player._damage(2);
					
			});
		}
	}
	
	//BULLET VS BADDIES
	for( var i = 0; i < this.groups.bullets.length; i++ ){
		var bullet = this.groups.bullets[i];
		for( var k = 0; k < this.groups.baddies.length; k++ ){
			var baddie = this.groups.baddies[k];
			this.game.physics.overlap(bullet, baddie, function(){
				baddie._damage(20);
				CollisionManager.removeObjectFromGroup(bullet, 'bullets');
				bullet.kill();
				WaveManager.enemyHits++;
			});	
		}
	}
};
