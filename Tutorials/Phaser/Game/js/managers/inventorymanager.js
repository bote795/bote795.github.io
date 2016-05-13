function InventoryManager(game){

	this.game = game;
	this.inventory = [];
	this.maxSpace = 4;
	this.gold = 0;
	this.gun = 0;
	
	var obj1 = {
		name: "health",
		amount: 0
	};	
	var obj2 = {
		name: "energy",
		amount: 0
	};
	var obj3 = {
		name: "revive",
		amount: 0
	};
	
	this.inventory.push(obj1);
	this.inventory.push(obj2);
	this.inventory.push(obj3);
	
}

InventoryManager.prototype.purge = function(){
	
	this.gold = 0;
   	for (var i = 0; i <this.inventory.length; i++)
      this.inventory[i].amount = 0;
  	this.gun = 0;
};

InventoryManager.prototype.addToInventory = function(name){

	for (var i = 0; i < this.inventory.length; i++){
		
		var obj = this.inventory[i];
		if (obj.name == name)
			obj.amount++;
	}

}

InventoryManager.prototype.upgradeGun = function(gun){
    if (this.game.player.name == "sniper")
    {
        switch(gun)
        {
            case 1:
            	this.gun = 1;
            	this.game.player.damage = 120;
                break;
            case 2:
            	this.gun = 2;
            	this.game.player.damage = 320;
                break;
            case 3:
            	this.gun = 3;
            	this.game.player.damage = 800;
                break;
            case 4:
            	this.gun = 4;
            	this.game.player.damage = 2000;
                break;
            case 5:
            	this.gun = 5;
            	this.game.player.damage = 6000;
                break;
            case 6:
            	this.gun = 6;
            	this.game.player.damage = 12000;
                break;
        }
    }
    else if (this.game.player.name == "gunner")
    {
        switch(gun)
        {
            case 1:
            	this.gun = 1;
            	this.game.player.damage = 23;
                break;
            case 2:
            	this.gun = 2;
            	this.game.player.damage = 55;
                break;
            case 3:
            	this.gun = 3;
            	this.game.player.damage = 145;
                break;
            case 4:
            	this.gun = 4;
            	this.game.player.damage = 360;
                break;
            case 5:
            	this.gun = 5;
            	this.game.player.damage = 1000;
                break;
            case 6:
            	this.gun = 6;
            	this.game.player.damage	= 3000;
                break;
        }
    }
    else if (this.game.player.name == "medic")
    {
        switch(gun)
        {
            case 1:
            	this.gun = 1;
            	this.game.player.damage = 29;
                break;
            case 2:
            	this.gun = 2;
            	this.game.player.damage = 75;
                break;
            case 3:
            	this.gun = 3;
            	this.game.player.damage = 190;
                break;
            case 4:
            	this.gun = 4;
            	this.game.player.damage = 475;
                break;
            case 5:
            	this.gun = 5;
            	this.game.player.damage = 1375;
                break;
            case 6:
            	this.gun = 6;
            	this.game.player.damage = 4000;
                break;
        }
    }
    else if (this.game.player.name == "tank")
    {
        switch(gun)
        {
            case 1:
            	this.gun = 1;
            	this.game.player.damage = 100;
                break;
            case 2:
            	this.gun = 2;
            	this.game.player.damage = 250;
                break;
            case 3:
            	this.gun = 3;
            	this.game.player.damage = 700;
                break;
            case 4:
            	this.gun = 4;
            	this.game.player.damage = 1600;
                break;
            case 5:
            	this.gun = 5;
            	this.game.player.damage = 4750;
                break;
            case 6:
            	this.gun = 6;
            	this.game.player.damage = 10000;
                break;
        }
    }

};