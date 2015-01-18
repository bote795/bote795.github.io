MainGame.GameState = function(game){

};

MainGame.GameState.prototype = {

	create: function(){
      
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		 
        this.game.music = this.game.add.audio('music1',1,true);	 
        this.game.music.play('',0,1,true);
		 
		this.game.map = this.game.add.tilemap('map1');
		this.game.map.addTilesetImage('Inq XP MT- Medieval Town','tiles2');
		this.game.map.addTilesetImage('grass-tiles-2-small','tiles1');	
		
		this.game.map.setCollisionByExclusion([0], true, 1);
		this.game.map.setCollisionByExclusion([0], true, 2);
		this.game.map.setCollisionByExclusion([0], true, 3);
		this.game.map.setCollisionByExclusion([0], true, 4);
		
		this.game.map.layers[0] = this.game.map.createLayer(0);
		this.game.map.layers[0].resizeWorld();
		this.game.map.layers[0].debug = false;
		this.game.map.layers[1] = this.game.map.createLayer(1);
		this.game.map.layers[1].resizeWorld();
		this.game.map.layers[1].debug = false;
		this.game.map.layers[2] = this.game.map.createLayer(2);
		this.game.map.layers[2].resizeWorld();
        this.game.map.layers[2].debug = false;
		this.game.map.layers[3] = this.game.map.createLayer(3);
		this.game.map.layers[3].resizeWorld();
		this.game.map.layers[3].debug = false;
		this.game.map.layers[4] = this.game.map.createLayer(4);
		this.game.map.layers[4].resizeWorld();
		this.game.map.layers[4].debug = false;
		 
		 
		 
		CollisionManager.addObjectToGroup(this.game.map.layers[1], 'layers');
		CollisionManager.addObjectToGroup(this.game.map.layers[2], 'layers');
		CollisionManager.addObjectToGroup(this.game.map.layers[3], 'layers');
		CollisionManager.addObjectToGroup(this.game.map.layers[4], 'stores');
		 
		//this.game.player = new Player(this.game, {x:300, y:300} );
		
		this.game.player = new Player(this.game, {x:300, y:300}, this.game.key  ); 
		//this.game.camera.follow(this.game.player);
		//this.game.zombie = new Zombie(this.game, {x:200, y:200} );
		
		this.game.camera.follow(this.game.player);
      
        GUIManager.setup();
		
		
	},

	update: function(){
		
		CollisionManager.update();
        WaveManager.update();
        GUIManager.update();
	},

	render: function(){
	    game.debug.text("Health: "+this.game.player.health+"/"+this.game.player.maxhealth, 15, 35, '#a6a6a6', "22px Arial");
	    game.debug.text("Energy: "+this.game.player.energy+"/"+this.game.player.maxenergy, 15, 60, '#a6a6a6', "22px Arial");
	    game.debug.text("Gold: "+InventoryManager.gold, 15, 83, '#a6a6a6', "20px Arial");
        
		game.debug.text('Zombies: ' + WaveManager.killed + ' / ' + WaveManager.waveLimit, 835, 740, '#880015', "20px Arial Rounded Empty Bold");
	
        game.debug.text('Wave: '+WaveManager.currentWave, 865, 35, '#880015', "30px Arial" );
		
		game.debug.text('Potions', 9, 595, '#880015', "20px Arial Rounded Empty Bold");
		game.debug.text('Health', 19, 620, '#a6a6a6', "15px Arial");
		game.debug.text(InventoryManager.inventory[0].amount, 35, 640, '#a6a6a6', "15px Arial");
		game.debug.text('Energy', 16, 665, '#a6a6a6', "15px Arial");
		game.debug.text(InventoryManager.inventory[1].amount, 35, 685, '#a6a6a6', "15px Arial");
        game.debug.text('Revive', 17, 710, '#a6a6a6', "15px Arial");
        game.debug.text(InventoryManager.inventory[2].amount, 35, 730, '#a6a6a6', "15px Arial");

	}
};
