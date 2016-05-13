function StoreMenu(game){

    var width = 1024;
    var height = 768;

	this.game = game;
	Phaser.Group.call(this, game, game.world, "menuScreen");
	
	this.menu = this.create(width/2,height/2,'menu');
	this.menu.anchor.setTo(0.5,0.5);
    this.menu.fixedToCamera = true;
	
	this.name = "store";
	
	this.goldText = this.game.add.text(270, 137, InventoryManager.gold, {font: "30px Arial", fill: 'a6a6a6'}, this);
	this.timeText = this.game.add.text(780, 137, WaveManager.nextWaveIn, {font: "30px Arial", fill: 'a6a6a6'}, this);
	this.goldText.fixedToCamera = true;
  	this.timeText.fixedToCamera = true;
	
	this.exitButton = new Phaser.Button(this.game, width/2, 605, 'exitButton', function(){
		this.visible = false;
		}, this, 1, 0, 0);
	this.exitButton.fixedToCamera = true;
	this.exitButton.anchor.set(0.5,0.5);
	this.add(this.exitButton);	
  
	this.healthButton = new Phaser.Button(this.game, 230, 220, 'healthPotion', function(){
		if (InventoryManager.gold >= 100)
		{
			InventoryManager.addToInventory("health");
			InventoryManager.gold -= 100;
		}
		}, this, 0, 0, 0);
	this.healthButton.fixedToCamera = true;
	this.add(this.healthButton);  
	
	this.energyButton = new Phaser.Button(this.game, 430, 220, 'energyPotion', function(){
		if (InventoryManager.gold >= 100)
		{	
			InventoryManager.addToInventory("energy");
			InventoryManager.gold -= 100;
		}
		}, this, 0, 0, 0);
    this.energyButton.fixedToCamera = true;
    this.add(this.energyButton);  

    this.healthUpgrade = new Phaser.Button(this.game, 260, 270, 'healthUpgrade', function(){
        if (InventoryManager.gold >= 1000)
        {
          	this.game.player.health    += 25;
          	this.game.player.maxhealth += 25
            InventoryManager.gold      -= 1000;
        }
    }, this, 1, 0, 0);
	this.healthUpgrade.fixedToCamera = true;
    this.add(this.healthUpgrade);

    this.energyUpgrade = new Phaser.Button(this.game, 560, 270, 'energyUpgrade', function(){
        if (InventoryManager.gold >= 1000)
        {
          	this.game.player.maxenergy += 10;
            InventoryManager.gold      -= 1000;
        }
    }, this, 1, 0, 0);
	this.energyUpgrade.fixedToCamera = true;
    this.add(this.energyUpgrade);
  
	this.reviveButton = new Phaser.Button(this.game, 630, 220, 'revivePotion', function(){
		if (InventoryManager.gold >= 1000)
		{
			InventoryManager.addToInventory("revive");
			InventoryManager.gold -= 1000;
		}
		}, this, 0, 0, 0);
	this.reviveButton.fixedToCamera = true;
	this.add(this.reviveButton);
    
    this.gun1Button = new Phaser.Button(this.game, 240, 340, 'gun1Button', function(){
      if (InventoryManager.gold >= 1000 && InventoryManager.gun < 1)
      {
        InventoryManager.upgradeGun(1);
        InventoryManager.gold -= 1000;
      }
    }, this, 0, 0, 0);
	this.gun1Button.fixedToCamera = true;
    this.add(this.gun1Button);	
    
    this.gun2Button = new Phaser.Button(this.game, 540, 340, 'gun2Button', function(){
      if (InventoryManager.gold >= 8000 && InventoryManager.gun < 2)
      {
        InventoryManager.upgradeGun(2);
        InventoryManager.gold -= 8000;
      }
    }, this, 0, 0, 0);
	this.gun2Button.fixedToCamera = true;
    this.add(this.gun2Button);
    
    this.gun3Button = new Phaser.Button(this.game, 240, 410, 'gun3Button', function(){
      if (InventoryManager.gold >= 15000 && InventoryManager.gun < 3)
      {
        InventoryManager.upgradeGun(3);
        InventoryManager.gold -= 15000;
      }
    }, this, 0, 0, 0);
	this.gun3Button.fixedToCamera = true;
    this.add(this.gun3Button);
    
    this.gun4Button = new Phaser.Button(this.game, 540, 410, 'gun4Button', function(){
      if (InventoryManager.gold >= 25000 && InventoryManager.gun < 4)
      {
        InventoryManager.upgradeGun(4);
        InventoryManager.gold -= 25000;
      }
    }, this, 0, 0, 0);
	this.gun4Button.fixedToCamera = true;
    this.add(this.gun4Button);
    
    this.gun5Button = new Phaser.Button(this.game, 240, 480, 'gun5Button', function(){
      if (InventoryManager.gold >= 50000 && InventoryManager.gun < 5)
      {
        InventoryManager.upgradeGun(5);
        InventoryManager.gold -= 50000;
      }
    }, this, 0, 0, 0);
	this.gun5Button.fixedToCamera = true;
    this.add(this.gun5Button);
    
    this.gun6Button = new Phaser.Button(this.game, 540, 480, 'gun6Button', function(){
      if (InventoryManager.gold >= 100000 && InventoryManager.gun < 6)
      {
        InventoryManager.upgradeGun(6);
        InventoryManager.gold -= 100000;
      }
    }, this, 0, 0, 0);
	this.gun6Button.fixedToCamera = true;
    this.add(this.gun6Button);

}

StoreMenu.prototype = Object.create(Phaser.Group.prototype);
StoreMenu.prototype.constructor = StoreMenu;

StoreMenu.prototype.update = function(){

		if (WaveManager.betweenWaves)
		{
			this.timeText.setText(WaveManager.nextWaveIn);
			this.goldText.setText(InventoryManager.gold); 
		}
		else
        {
          this.visible = false;
        }
};