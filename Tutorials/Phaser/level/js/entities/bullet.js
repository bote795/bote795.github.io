function Bullet(game, spawn, type, dir, parent){

	this.game = game;
	//Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, 'bullet');	
	this.sprite  = this.game.add.sprite(spawn.x, spawn.y, 'bullet');

	this.sprite.anchor.setTo(0.5, 0.5);
	this.sprite._parent = parent;

	this.sprite.speed = 550;
	this.sprite.life = 75;
	this.sprite._type = type;

	this.sprite.body.velocity.x = dir.x * this.speed;
	this.sprite.body.velocity.y = dir.y * this.speed;

	CollisionManager.addObjectToGroup(this, 'bullets');
	
	//this.game.add.existing(this);
	
}
Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;
Bullet.prototype.update = function(){

	this.life--;

	if(this.life <= 0){
		if(this.alive){
			this.die();
		}
	}
};
Bullet.prototype.die = function(){

	CollisionManager.removeObjectFromGroup(this, 'bullets');
	this.destroy();
};