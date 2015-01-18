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
	this.name = object.name; 
	
	this.sprite  = this.game.add.sprite(spawn.x, spawn.y, object.name);
	
		this.sprite.animations.add('left', [0,1,2,3], 7, true);
		this.sprite.animations.add('right', [4,5,6,7], 7, true);
	
	this.sprite.anchor.setTo(0.5, 0.5);
	this.health = object.health;
	this.maxhealth = object.maxhealth;
	this.speed = object.speed;
	
	
	this.healthBary = object.healthBary;
	this.healthBar = this.game.add.sprite(this.sprite.x, this.sprite.y + this.healthBary, 'player_health');
	this.healthBar.anchor.setTo(0.5, 0.5);
	
//	this.game.add.existing(this);

}
Player.prototype = Object.create( Phaser.Sprite.prototype );
Player.prototype.constructor = Player;
Player.prototype.update = function(){

	
	if(this.game.keys.UP.isDown){
			this.sprite.body.velocity.y = -this.speed;
		}
		else if(this.game.keys.DOWN.isDown){
			this.sprite.body.velocity.y = this.speed;
		}
		else{
			this.sprite.body.velocity.y = 0;
		}

		if(this.game.keys.LEFT.isDown){
			this.sprite.body.velocity.x = -this.speed;
			this.sprite.animations.play('left');
		}
		else if(this.game.keys.RIGHT.isDown){
			this.sprite.body.velocity.x = this.speed;
			this.sprite.animations.play('right');
		}
		else{
			this.sprite.body.velocity.x = 0;
		}
	this.updateHealthBar();
};
Player.prototype.updateHealthBar = function(){

	this.healthBar.x = this.sprite.x;
	this.healthBar.y = this.sprite.y + this.healthBary;

	var p = (this.health / this.maxHealth);
	p = parseFloat(p.toFixed(1));
	this.healthBar.frame = 10 - (p * 10);
}