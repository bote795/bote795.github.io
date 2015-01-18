function Tank(){
	this.name 		= "tank";
	this.health 	= 200;
	this.maxhealth 	= 200;
	this.speed 		= 80;
  	this.firerate	= 700;
  	this.damage		= 25;
  	this.SpecialCost =25;
	
	//special rate
	this.SpecialOn = false;
	this.SpecialRate = this.firerate;
	this.SpecialTimer = 0;
	this.SpecialTimePeriod = 1000;
	this.nextSpecial = 0;
	this.SpecialZombieRate = 100;
}
//thorn mail
Tank.prototype.special = function(data){
	this.SpecialOn = true;
};