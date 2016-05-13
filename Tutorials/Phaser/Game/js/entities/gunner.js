function Gunner(){

	this.name 		= "gunner";
	this.health 	= 100;
	this.maxhealth 	= 100;
	this.speed 		= 100;	
  	this.firerate	= 150;
  	this.damage 	= 9;
  	//special info
  	this.SpecialOn = false;
  	this.SpecialCost =25;
  	this.SpecialSpeed = 600;
  	//special rate
	this.SpecialRate = 1000;//(this.firerate * 5);
	this.nextSpecial = 0;
}
//dash
Gunner.prototype.special = function(){
	this.SpecialOn = true;
}