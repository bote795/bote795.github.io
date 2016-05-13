function CollisionManager(game){

	this.game = game;
	this.groups = {
		  players: []
		, layers: []
		, bullets: []
      , pbullets: [/*{bullet: {}, pierced: []}*/]
		, baddies: []
		, stores: []
	};
  	this.enemyHits = 0;
  
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


	//PLAYER VS LAYER
	for( var i = 0; i < this.groups.players.length; i++ ){
		var player = this.groups.players[i];
		for( var k = 0; k < this.groups.layers.length; k++ ){
			var layer = this.groups.layers[k];
          this.game.physics.arcade.collide(player, layer);
		}
	}
	
	//BULLET VS LAYER
	for( var i = 0; i < this.groups.bullets.length; i++ ){
		var bullet = this.groups.bullets[i];
		for( var k = 0; k < this.groups.layers.length; k++ ){
			var layer = this.groups.layers[k];
				this.game.physics.arcade.collide(bullet, layer, function(){ 
                  CollisionManager.removeObjectFromGroup(bullet, 'bullets'); 
                  bullet.kill();
                });
		}
	}	  
  
  //BADDIES VS LAYER
	for( var i = 0; i < this.groups.baddies.length; i++ ){
		var baddie = this.groups.baddies[i];
		for( var k = 0; k < this.groups.layers.length; k++ ){
			var layer = this.groups.layers[k];
			this.game.physics.arcade.collide(baddie, layer);
		}
	}
  
  //BADDIES VS BADDIES
	for( var i = 0; i < this.groups.baddies.length; i++ ){
		var baddie1 = this.groups.baddies[i];
		for( var k = 0; k < this.groups.baddies.length; k++ ){
          if (k != i)	{
          	var baddie2 = this.groups.baddies[k];
			this.game.physics.arcade.collide(baddie1, baddie2);
          }
		}
	}
  
	//PLAYER VS BADDIES
	for( var i = 0; i < this.groups.players.length; i++ ){
		var player = this.groups.players[i];
		for( var k = 0; k < this.groups.baddies.length; k++ ){
			var baddie = this.groups.baddies[k];
			this.game.physics.arcade.collide(player, baddie, function(){
				if(player.name == "tank" && player.object.SpecialOn && game.time.now > baddie.tankskill)
				{
					player._damage(2);
					baddie._damage(game.player.damage - 20);
					baddie.tankskill = game.time.now + player.object.SpecialZombieRate;

				}
				else
					player._damage(2);
				

			});
		}
	}
	
	//BULLET VS BADDIES
	for( var i = 0; i < this.groups.bullets.length; i++ ){
		var bullet = this.groups.bullets[i];
		for( var k = 0; k < this.groups.baddies.length; k++ ){
			var baddie = this.groups.baddies[k];
			this.game.physics.arcade.overlap(bullet, baddie, function(){

				if(bullet.unique == "SpecialSniper")
				{
					baddie._damage(baddie.health);
				}
				else
					baddie._damage(game.player.damage);
				CollisionManager.removeObjectFromGroup(bullet, 'bullets');
				bullet.kill();
			});	
		}
	}
  
  //PBULLET VS BADDIES
	for( var i = 0; i < this.groups.pbullets.length; i++ ){
		var pbullet = this.groups.pbullets[i];
		for( var k = 0; k < this.groups.baddies.length; k++ ){
			var baddie = this.groups.baddies[k];
			this.game.physics.arcade.overlap(pbullet.bullet, baddie, function(){
             var hit = true;
              //console.log(pbullet.pierced.length);
              for (var p = 0; p < pbullet.pierced.length; p++)
              {
                	if (pbullet.pierced[p] == k) {
              			hit = false;
                      console.log("pierced = baddie");
                	}
                	console.log(pbullet.pierced[p]);
              }
                
                console.log(hit);
                
               if (hit){
                 baddie._damage(20);
                  pbullet.pierced.push(k);
                }
              console.log("end first bullet collision");
			});	
		}
	}
  
  	//PBULLET VS LAYER
	for( var i = 0; i < this.groups.pbullets.length; i++ ){
		var pbullet = this.groups.pbullets[i];
		for( var k = 0; k < this.groups.layers.length; k++ ){
			var layer = this.groups.layers[k];
				this.game.physics.arcade.collide(pbullet.bullet, layer, function(){ 
                  CollisionManager.removeObjectFromGroup(pbullet, 'pbullets'); 
                  pbullet.bullet.kill();
                });
		}
	}	  
	
	//PLAYERS ENTERING STORES
	for ( var i = 0; i < this.groups.stores.length; i++){
		var store = this.groups.stores[i];
		for( var k = 0; k < this.groups.players.length; k++){
			var player = this.groups.players[k];
			this.game.physics.arcade.collide(store, player, function(){
				if (WaveManager.betweenWaves){
				   GUIManager.handleStore();
				}
			});
			
		}
	}
	
};
