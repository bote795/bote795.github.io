function Player(game, spawn, chosen) 
{
	var object;
	if(chosen == 'Mint')
		object =new  Mint();
	else if( chosen == 'Corn')
		object =new  Corn();
	else if( chosen == 'Gumball')
		object =new  Gumball();
	
	this.game = game;
	Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, object.name);
	this.name = object.name; 
	
	this.animations.add('left', [0,1,2,3], 7, true);
	this.animations.add('right', [4,5,6,7], 7, true);
	this.anchor.setTo(0.5, 0.5);
	this.health = object.health;
	this.maxhealth = object.maxhealth;
	this.speed = object.speed;
	this.body.collideWorldBounds = true;
	
	this.damaged = false;
	this.lastHitTimer = Date.now();
	this.damagedTimer = Date.now();
	this.attackTimer = Date.now();
	this.attackCoolDown = 150;
	
	this.nextFire =0;
	this.fireRate =250;
	this.bullets = game.add.group();
	this.bullets.createMultiple(30, 'bullet');
	this.bullets.setAll('anchor.x', 0.5);
	this.bullets.setAll('anchor.y', 0.5);
	this.bullets.setAll('outOfBoundsKill', true);
	
 	this.healthBary = object.healthBary;
	this.healthBar = this.game.add.sprite(this.x, this.y + this.healthBary, 'player_health');
	this.healthBar.anchor.setTo(0.5, 0.5);
	CollisionManager.addObjectToGroup(this, 'players');
	this.game.add.existing(this);
	
}
Player.prototype = Object.create( Phaser.Sprite.prototype );
Player.prototype.constructor = Player;
Player.prototype.update = function(){

	
	if(this.game.keys.UP.isDown){
			this.body.velocity.y = -this.speed;
		}
		else if(this.game.keys.DOWN.isDown){
			this.body.velocity.y = this.speed;
		}
		else{
			this.body.velocity.y = 0;
		}

		if(this.game.keys.LEFT.isDown){
			this.body.velocity.x = -this.speed;
			this.animations.play('left');
			this.dir = "left"
		}
		else if(this.game.keys.RIGHT.isDown){
			this.body.velocity.x = this.speed;
			this.animations.play('right');
			this.dir = "right"
		}
		else{
			this.body.velocity.x = 0;
		}
	this.updateHealthBar();
		if(this.game.input.activePointer.isDown)
		{
			/*
			var pixelX = this.game.input.mousePointer.worldX;
			var pixelY = this.game.input.mousePointer.worldY;
			this.attack({x: pixelX, y: pixelY});
			*/
			this.fire();
		}
};
Player.prototype.attack = function(target){

	if(Date.now() < this.attackTimer){
		return;
	}

	WaveManager.shotsFired++;

	var start_x;

	if(this.dir == "left"){
		start_x = this.sprite.x - 20;
	}
	else if(this.dir == "right"){
		start_x = this.sprite.x + 20;
	}

	var x = target.x - start_x;
	var y = target.y - this.sprite.y;

	var mag = Math.sqrt((x * x) + (y * y));

	var nx = x / mag;
	var ny = y / mag;

	var b = new Bullet(this.game, {x:start_x, y: this.sprite.y + 2}, 'player', {x: nx, y: ny}, this);
	this.attackTimer = Date.now() + this.attackCoolDown;
}
Player.prototype.updateHealthBar = function(){

	this.healthBar.x = this.x;
	this.healthBar.y = this.y + this.healthBary;

	var p = (this.health / this.maxhealth);
	p = parseFloat(p.toFixed(1));
	this.healthBar.frame = 10 - (p * 10);
}
Player.prototype._damage = function(amount){

	this.lastHitTimer = Date.now();
	if( this.lastHitTimer >= this.damagedTimer )
	{
		this.damage(amount);
		this.damaged = true;
		this.damagedTimer = Date.now() +200;
		if(this.health <= 0){
		this.healthBar.destroy();
			this.die(true);
		}
	}
}
Player.prototype.fire = function  () {

	    if (this.game.time.now > this.nextFire )
	    {
	        this.nextFire = this.game.time.now + this.fireRate;
	        var bullet = this.bullets.getFirstDead();
			
	        bullet.reset(this.x, this.y);
	        bullet.rotation = this.game.physics.moveToPointer(bullet, 550);
			CollisionManager.addObjectToGroup(bullet, 'bullets');
	    }
	}
	
Player.prototype.die = function(points){
	CollisionManager.purge();
	this.game.state.start('MainMenu');
}