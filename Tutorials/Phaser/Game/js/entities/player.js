function Player(game, spawn, chosen) 
{
	this.object;
	if( chosen == 'Sniper')
		this.object = new Sniper();
	else if( chosen == 'Gunner')
		this.object = new Gunner();
	else if( chosen == 'Medic')
		this.object = new Medic();
	else if( chosen == 'Tank')
		this.object = new Tank();
	
	this.game = game;
	Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, this.object.name);
	this.name = this.object.name;
  	this.class = chosen;
	
	this.animations.add('right', [0,1,2,3], 7, true);
	this.animations.add('right-idle', [0],  7, true);
	this.animations.add('left', [4,5,6,7], 7, true);
	this.animations.add('left-idle', [4],   7, true);
	
	if (this.object.name == "tank" || this.object.name == "medic")
	{
		this.animations.add('right-TM', [8,9,10,11], 7, true);
		this.animations.add('left-TM', [15,14,13,12], 7, true);
	}
	
	this.animations.play('right-idle');
	this.anchor.setTo(0, 0);
	//physics	
	this.game.physics.arcade.enable(this);

    this.body.bounce = 0.999;
	this.speed 		= this.object.speed;
  	this.baseSpeed 	= this.object.speed;
  	this.speedBoost = this.object.speed+35;
  
	this.body.collideWorldBounds = true;
	this.body.bounce = .999;
	this.speed = this.object.speed;

	this.gun = 0;
	this.energy 		= 100;
	this.maxenergy      = 100;
	this.nextEnergy 	= 0;
  	this.energyRate 	= 2000;
  	this.useNextEnergy 	= 0;
  	this.useEnergyRate 	= 300;
  
	this.health = this.object.health;
	this.maxhealth = this.object.maxhealth;
	
	
  
	

	//inventory
	this.gold = 0;
	this.healthPotions = 0;
	this.manaPotions = 0;
	this.revivePotions = 0;
	
	this.alive = true;
	//timers for shoting and geting hit
	this.lastHitTimer = Date.now();
	this.damagedTimer = Date.now();
	this.attackTimer = Date.now();
	this.attackCoolDown = 150;
	this.nextFire =0;
	this.fireRate	= this.object.firerate;
  	this.damage		= this.object.damage;
	
    //settting up the bullets
  	this.bullets = game.add.group();
	this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
	this.bullets.createMultiple(300, 'bullet');
	this.bullets.setAll('anchor.x', 0);
	this.bullets.setAll('anchor.y', 0);
	this.bullets.setAll('outOfBoundsKill', true);
	this.bullets.setAll('checkWorldBounds',true);


	/*
	this.shotgun = game.add.emitter(0,0,300);
	this.shotgun.enableBody = true;
    this.shotgun.physicsBodyType = Phaser.Physics.ARCADE;
	this.shotgun.makeParticles('bullet');
    this.shotgun.minRotation = 0;
    this.shotgun.maxRotation = 0;
    this.shotgun.gravity = 0;
    */
  
     //adding health bar
 	this.healthBary = 36;

	this.healthBar = this.game.add.sprite(this.x, this.y + this.healthBary, 'player_health');
	this.healthBar.anchor.setTo(0, 0);
	//adding it to collision manager to take care of collisons
	CollisionManager.addObjectToGroup(this, 'players');
	//adds it to game and game calls update function automaticly 

	this.game.add.existing(this);
	
}
Player.prototype = Object.create( Phaser.Sprite.prototype );
Player.prototype.constructor = Player;
Player.prototype.update = function(){
	//move the plaer up or down	
	if(this.game.keys.UP.isDown)
    {
		this.body.velocity.y = -this.speed;
	}
	else if(this.game.keys.DOWN.isDown)
    {
		this.body.velocity.y = this.speed;
	}
	else
    {
		this.body.velocity.y = 0;
	}

  	//move the player left or right
	if(this.game.keys.LEFT.isDown)
    {
		this.body.velocity.x = -this.speed;
		if((this.object.name == "tank" || this.object.name == "medic") && this.object.SpecialOn )
        {
        	this.animations.play('left-TM');
        }
        else
			this.animations.play('left');
		this.dir = "left";
	}
	else if(this.game.keys.RIGHT.isDown)
    {
		this.body.velocity.x = this.speed;
		if((this.object.name == "tank" || this.object.name == "medic") && this.object.SpecialOn )
        {
        	this.animations.play('right-TM');
        }
        else
			this.animations.play('right');
		this.dir = "right";
	}
	else
    {
		this.body.velocity.x = 0;
	}

	if(this.body.velocity.x ==0 && this.body.velocity.y == 0)
	{
		if((this.object.name == "tank" || this.object.name == "medic") 
			&& this.object.SpecialOn )
		{
			
        		this.animations.play(this.dir +'-TM');
		}
			
		else
		{
        		this.animations.play(this.dir +'-idle');
        	
		}
	}
	else
	{
		if((this.object.name == "tank" || this.object.name == "medic") && this.object.SpecialOn )
        {
        	this.animations.play(this.dir +'-TM');
        }
        else
			this.animations.play(this.dir);
	}
  	//use potions from inventory
	if (this.game.keys.Q.isDown){

        if (InventoryManager.inventory[GUIManager.itembar.selected].amount>0)
        {

            switch(GUIManager.itembar.selected)
            {

                case 0:
                	if (this.health == this.maxhealth)
                      	break;
                	
                	InventoryManager.inventory[GUIManager.itembar.selected].amount--;
                    this.health += 25;
                	//if player who used potion is a medic, then everyone gets +10 health also
                    if (this.health > this.maxhealth)
                        this.health = this.maxhealth;
                    break;

                case 1:
                	if (this.energy == this.maxenergy)
                      	break;
                	
                	InventoryManager.inventory[GUIManager.itembar.selected].amount--;
                    this.energy += 50;
                    if (this.energy > this.maxenergy)
                        this.energy = this.maxenergy;
                    break;
                case 2:
                    //what to do if a revive potion is used
                    break;
            }
        }
	}
  	
  	if (this.game.keys.SHIFT.isDown)
    {
		if (this.game.time.now > this.useNextEnergy && this.energy>0)
	    {
        	this.useNextEnergy = this.game.time.now + this.useEnergyRate;
        	this.energy--;
    		this.speed = this.speedBoost;
        }
      	else if (this.energy<=0)
          this.speed = this.baseSpeed;
  	}
  	else
    {
    	if(this.object.name == "gunner" && this.object.SpecialOn )
        {
          if (this.game.time.now > this.object.nextSpecial)
          {
			this.object.SpecialOn = false;
			this.speed = this.baseSpeed;
          }
		}
		else
		{
            this.speed = this.baseSpeed;
            if ((this.game.time.now > this.nextEnergy) && (this.energy<this.maxenergy))
            {
                this.nextEnergy = this.game.time.now + this.energyRate;
                if (this.body.velocity.x === 0 && this.body.velocity.y ===0)
                {
                    this.energy += 2;
                }
                else
                {
                    this.energy++;
                }
	    	}
    	}
    }

	this.updateHealthBar();
	if(this.game.input.activePointer.isDown)
	{
		this.fire();
	}
	
	if(this.game.keys.SPECIAL.isDown)
	{
		if(this.object.name == "sniper" && this.energy >= this.object.SpecialCost
			&& this.game.time.now > this.object.nextSpecial )
		{
			this.object.nextSpecial = this.game.time.now + this.object.SpecialRate;
			this.energy -= this.object.SpecialCost;
			this.object.special({x:this.x,y:this.y});
		}
		else if(this.object.name == "gunner" && this.energy >= this.object.SpecialCost
			&& this.game.time.now > this.object.nextSpecial )
		{
			this.object.nextSpecial = this.game.time.now + this.object.SpecialRate;
			this.energy -= this.object.SpecialCost;
			this.object.special();
			this.speed = this.object.SpecialSpeed;
		}
		else if(this.object.name == "medic" && this.energy >= this.object.SpecialCost 
			&& this.game.time.now > this.object.nextSpecial && this.health < this.maxhealth)
		{
			this.object.nextSpecial = this.game.time.now + this.object.SpecialRate;
			this.energy -= this.object.SpecialCost;
			this.object.special(this.health);
			this.object.SpecialTimer = this.game.time.now + this.object.SpecialTimePeriod;
			this.object.special();
			this.health += this.object.SpecialHealth;
          	if (this.health>this.maxhealth)
              	this.health = this.maxhealth;
		}
		else if(this.object.name == "tank" && this.energy >= this.object.SpecialCost 
			&& this.game.time.now > this.object.nextSpecial)
		{
			if(this.object.name == "tank" && this.object.SpecialOn && this.dir == "left")
	        {
	        	this.animations.play('left-TM');
	        }
	        else
	        	this.animations.play('right-TM');
	        
			this.object.nextSpecial = this.game.time.now + this.object.SpecialRate;
			this.energy -= this.object.SpecialCost;
			this.object.SpecialTimer = this.game.time.now + this.object.SpecialTimePeriod;
			this.object.special();
		}
		else ;     
	}
    if((this.object.name == "tank" || this.object.name == "medic") && this.object.SpecialOn && this.game.time.now > this.object.SpecialTimer)
    {
    	this.object.SpecialOn = false;
    }
};
Player.prototype.attack = function(target){

	if(Date.now() < this.attackTimer){
		return;
	}

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

	var b = new Bullet(this.game, {x:start_x, y: this.sprite.y}, 'player', {x: nx, y: ny}, this);
	this.attackTimer = Date.now() + this.attackCoolDown;
};
Player.prototype.updateHealthBar = function(){

	this.healthBar.x = this.x;
	this.healthBar.y = this.y + this.healthBary;

	var p = (this.health / this.maxhealth);
	p = parseFloat(p.toFixed(1));
	this.healthBar.frame = 10 - (p * 10);
};
Player.prototype._damage = function(amount){

	this.lastHitTimer = Date.now();
	if( this.lastHitTimer >= this.damagedTimer )
	{
        if (this.alive)
      {
          this.health -= amount;
          this.damagedTimer = Date.now() +200;
          if (this.health <= 0)
          {
              if (InventoryManager.inventory[2].amount<=0)
              {
                  this.kill();
                  this.healthBar.destroy();
                  this.alive = false;
                  this.die(true);
              }
              else
              {
                InventoryManager.inventory[2].amount--;
                this.x = 300;
                this.y = 300;
                this.health = this.maxhealth;
              }
          }
      }
		
    }
};
Player.prototype.fire = function  () {

	    if (this.game.time.now > this.nextFire )
	    {
	        this.nextFire = this.game.time.now + this.fireRate;
	       
	       // console.log(bullet.rotation);
          if(this.class == 'Sniper') {
          
            var bullet = this.bullets.getFirstDead();
            bullet.reset(this.x + 10, this.y + 15);
	        bullet.angle = this.game.physics.arcade.moveToPointer(bullet, 1000);
            var pbullet = {bullet: bullet, pierced: []};
            //console.log(pbullet.pierced);
            CollisionManager.addObjectToGroup(pbullet, 'pbullets');
          
              
          }
          else if (this.class == 'Tank') {
              
              var bullet = this.bullets.getFirstDead();
			  bullet.reset(this.x + 10, this.y + 15);
	          bullet.angle = this.game.physics.arcade.moveToPointer(bullet, 1000);
              CollisionManager.addObjectToGroup(bullet, 'bullets');
             // console.log(bullet.rotation);
            
              var bulletLL = this.bullets.getFirstDead();
               bulletLL.reset(this.x + 10, this.y + 15);
              bulletLL.angle = this.game.physics.arcade.moveToXY(bulletLL, this.game.input.activePointer.worldX + 50, this.game.input.activePointer.worldY - 50, 1000);
              CollisionManager.addObjectToGroup(bulletLL, 'bullets');
             // console.log(bulletLL.rotation);
            
               var bulletLM = this.bullets.getFirstDead();
                bulletLM.reset(this.x + 10, this.y + 15);
              bulletLM.angle = this.game.physics.arcade.moveToXY(bulletLM, this.game.input.activePointer.worldX + 25, this.game.input.activePointer.worldY - 25, 1000);
              CollisionManager.addObjectToGroup(bulletLM, 'bullets');
              //console.log(bulletLM.rotation);
            
               var bulletRR = this.bullets.getFirstDead();
                bulletRR.reset(this.x + 10, this.y + 15);
              bulletRR.angle = this.game.physics.arcade.moveToXY(bulletRR, this.game.input.activePointer.worldX - 50, this.game.input.activePointer.worldY + 50, 1000);
              CollisionManager.addObjectToGroup(bulletRR, 'bullets');
              //console.log(bulletRR.rotation);
            
               var bulletRM = this.bullets.getFirstDead();
                bulletRM.reset(this.x + 10, this.y + 15);
              bulletRM.angle = this.game.physics.arcade.moveToXY(bulletRM, this.game.input.activePointer.worldX - 25, this.game.input.activePointer.worldY + 25, 1000);
               CollisionManager.addObjectToGroup(bulletRM, 'bullets');
              //console.log(bulletRM.rotation);
              
              
              /*
              this.shotgun.x = this.x;
              this.shotgun.y = this.y;
              this.shotgun.start(true, 0, 0, 5);
              
              */
             
          }
          else
          {
          	    
          	    var bullet = this.bullets.getFirstDead();
			
                bullet.reset(this.x + 10, this.y + 15);
	            bullet.rotation = this.game.physics.arcade.moveToPointer(bullet, 1000);
          	    CollisionManager.addObjectToGroup(bullet, 'bullets');
          	    
          }
	    }
	};
	
Player.prototype.die = function(points){
	this.game.state.start('GameOverState');
};
