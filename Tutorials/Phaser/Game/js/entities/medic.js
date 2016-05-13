function Medic(){
	this.name 		= "medic";
	this.health 	= 125;
	this.maxhealth 	= 125;
	this.speed 		= 95;
  	this.firerate	= 250;
  	this.damage		= 12;
  	this.SpecialCost =25;

  	//special rate
  	this.SpecialOn = false;
	this.SpecialRate = this.firerate;
	this.nextSpecial = 0;
	this.SpecialTimer = 0;
	this.SpecialTimePeriod = 100;
	this.SpecialHealth = 15;
}
//heal everyone 15 health
Medic.prototype.special = function(){
	this.SpecialOn = true;
}
