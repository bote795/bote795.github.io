function Sniper(){
	this.name 		= "sniper";
	this.health 	= 80;
	this.maxhealth 	= 80;
	this.speed 		= 150;
  	this.firerate	= 750;
	this.damage		= 50;

	//special info
	this.bulletId = 1;
	this.SpecialCost =25;
	//special rate
	this.SpecialRate = this.firerate;
	this.nextSpecial = 0;
	
}
Sniper.prototype.special = function(data){
	var bullet;
    bullet =game.add.sprite(data.x + 10, data.y + 15, 'sbullet');
    bullet.unique ='SpecialSniper';
    game.physics.arcade.enable(bullet);
    bullet.rotation = game.physics.arcade.moveToPointer(bullet, 1000);
    bullet.id = game.player.id;
    bullet.bullet_id =this.bulletId;
    this.bulletId++;
    bullet.outOfBoundsKill = true;
    bullet.checkWorldBounds = true;
    CollisionManager.addObjectToGroup(bullet, 'bullets');
}