function Zombie(game, spawn){
	this.game = game;
	/*
	Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, 'zombie');
	this.game.add.existing(this);
	*/
	Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, 'zombie');
	this.anchor.setTo(0.5,0.5);
	
	this.animations.add('right', [0,1,2,3], 7, true);
	this.animations.add('left', [4,5,6,7], 7, true);
	
	this.health = 50;
	this.maxHealth =50;
	this.speed = 70;
	
	this.name = "zombie";
	this.healthBary = 20;
	this.healthBar = this.game.add.sprite(this.x, this.y + this.healthBary, 'player_health');
	this.healthBar.anchor.setTo(0.5, 0.5);
	CollisionManager.addObjectToGroup(this, 'baddies');
	this.game.add.existing(this);
}
Zombie.prototype = Object.create( Phaser.Sprite.prototype );
Zombie.prototype.constructor = Zombie;
Zombie.prototype.update = function(){
	
	this.updateHealthBar();
	
	if(this.target){
			if(this.withinFollowingRange(this.target)){ 
					this.moveTowards(this.target);
			}
			else{
				this.target = this.game.player;
			}
		}
		else{
			this.target = this.game.player;
		}
		
};
Zombie.prototype.withinFollowingRange = function(target){
	var dist = Math.abs(Math.sqrt((target.x - this.x)*(target.x - this.x)+(target.y - this.y)*(target.x - this.y)));

	if(dist < 300){
		return true;
	}

	return false;
}
Zombie.prototype.moveTowards = function(target){

	var x = target.x - this.x;
	var y = target.y - this.y;
	//Pythagorean theorem
	var mag = Math.sqrt((x * x) + (y * y));

	var nx = x / mag;
	var ny = y / mag;

	this.body.velocity.x = nx * this.speed;
	this.body.velocity.y = ny * this.speed;

	if(this.body.velocity.x >= 0){
		this.animations.play('right');
	}
	else if(this.body.velocity.x < 0){
		this.animations.play('left')
	}
	
}
Zombie.prototype.updateHealthBar = function(){

	this.healthBar.x = this.x;
	this.healthBar.y = this.y + this.healthBary;

	var p = (this.health / this.maxHealth);
	p = parseFloat(p.toFixed(1));
	this.healthBar.frame = 10 - (p * 10);
}
Zombie.prototype._damage = function(amount){
	this.health -= amount;
	if(this.health <= 0){
		this.kill;
		this.die(true);
	}
}

Zombie.prototype.die = function(points){

	if(this.game){
		//this.game.baddie_die_sfx.play();
	}

	var points = points || false;
	
	CollisionManager.removeObjectFromGroup(this, "baddies");
	if(this.healthBar){
		this.healthBar.destroy();
	}

	if(points){
		
	}
	this.kill();
	this.game.state.start('MainMenu');
	this.destroy();
	
}