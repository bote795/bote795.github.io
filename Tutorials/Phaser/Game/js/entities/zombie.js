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
	this.game.physics.arcade.enable(this);
	this.body.collideWorldBounds = true;
	this.health = 50 * Math.pow(1.1, WaveManager.currentWave);
	this.maxHealth = 50 * Math.pow(1.1, WaveManager.currentWave);

	this.speed = Math.floor((Math.random()*80)+80);
	this.target = this.game.player;
	this.waiting = 0;
	this.body.velocity.x = 0;
	this.body.velocity.y = 0;
	this.name = "zombie";
	this.tankskill =0;
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
	if (this.waiting<=0)
	{
	if(this.target){
			if(this.withinFollowingRange(this.target)){ 
					this.moveTowards(this.target);
              	//this.game.physics.arcade.moveToObject(this, this.target, this.speed);
			}
			else{
				this.target = this.game.player;
			}
		}
		else{
			this.target = this.game.player;
		}
	}
	else
		this.waiting--;
  //console.log('x ' + this.x);
  //console.log('y ' + this.y);
};

Zombie.prototype.withinFollowingRange = function(target){
	/*var dist = Math.abs(Math.sqrt((target.x - this.x)*(target.x - this.x)+(target.y - this.y)*(target.x - this.y)));

	if(dist < 2000){
		return true	
	}
  else return false;*/
	
	return true;
};
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
		this.animations.play('left');
	}
	
};
Zombie.prototype.updateHealthBar = function(){

	this.healthBar.x = this.x;
	this.healthBar.y = this.y + this.healthBary;

	var p = (this.health / this.maxHealth);
	p = parseFloat(p.toFixed(1));
	this.healthBar.frame = 10 - (p * 10);
};
Zombie.prototype._damage = function(amount){
	this.bringToTop();	
    this.health -= amount;
	if(this.health <= 0){
		this.kill;
		this.die(true);
	}
};

Zombie.prototype.die = function(points){

	//if(this.game){
		//this.game.baddie_die_sfx.play();
	//}
    
	InventoryManager.gold += 5;	
	
	WaveManager.onMap--;
	WaveManager.killed++;
	
	var goldPop = this.game.add.text(this.x, this.y, "+5G", { font: "12px Arial", fill: "#FFD700"});
	goldPop.anchor.setTo(0.5,0.5);
	this.game.add.tween(goldPop).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
	
	CollisionManager.removeObjectFromGroup(this, "baddies");
	if(this.healthBar){
		this.healthBar.destroy();
	}

	this.kill();
	this.destroy();
  console.log('killed zombie');
};
