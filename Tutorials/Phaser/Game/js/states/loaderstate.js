MainGame.LoaderState = function(game){

	this._continue = Date.now();// + 1000;
};

MainGame.LoaderState.prototype = {

	preload: function(){
	var width  = 1024;
	var height = 768;
		this.game.stage.backgroundColor = '#202020';
		var spinner = this.add.sprite(width/2, height-50, 'zombie');
		spinner.anchor.setTo(0.5, 0.5);
		spinner.animations.add('spin', [0, 1, 2, 3], 7, true);
		spinner.animations.play('spin');
      
        var spinner = this.add.sprite(width/2-50, height-50, 'zombie');
		spinner.anchor.setTo(0.5, 0.5);
		spinner.animations.add('spin', [0, 1, 2, 3], 7, true);
		spinner.animations.play('spin');
      
        var spinner = this.add.sprite(width/2+50, height-50, 'zombie');
		spinner.anchor.setTo(0.5, 0.5);
		spinner.animations.add('spin', [0, 1, 2, 3], 7, true);
		spinner.animations.play('spin');

		var q = this.game.add.sprite(300, 130, 'ql');
      	this.game.add.existing(q);
		var wasd = this.game.add.sprite(300, 220, 'wasdl');
      	this.game.add.existing(wasd);
        var mouse = this.game.add.sprite(650, 200, 'mousel');
      	this.game.add.existing(mouse);
        var shift = this.game.add.sprite(300, 385, 'shiftl');
      	this.game.add.existing(shift);
      	var space = this.game.add.sprite(300, 470, 'spacel');
		this.game.add.existing(space);
      
		var text1 = "Use Items - ";
		var style1 = { font: "40px Arial", fill: "#a6a6a6", textAlign: "center" };
		var t1 = this.game.add.text(90, 135, text1, style1);
		this.game.add.existing(t1);	
		
		var text2 = "Move -";
		var t2 = this.game.add.text(175, 260, text2, style1);
		this.game.add.existing(t2);
		
		var text3 = "Use mouse to fire";
		var t3 = this.game.add.text(575, 135, text3, style1);
		this.game.add.existing(t3);	
		
		var text4 = "Sprint -";
		var t4 = this.game.add.text(170, 400, text4, style1);
      	
	    var text5 = "Special -";
      	var t5 = this.game.add.text(145, 480, text5, style1);	
      
		var resources = MainGame.resources;

		//load all game assets!

		//IMAGES
		for( var i = 0; i < resources.LoaderState.images.length; i++ ){
			var obj = resources.LoaderState.images[i];
			this.game.load.image(obj.name, obj.path);
		}

		//SPRITESHEETS
		for( var i = 0; i < resources.LoaderState.spritesheets.length; i++ ){
			var obj = resources.LoaderState.spritesheets[i];
			this.game.load.spritesheet(obj.name, obj.path, obj.width, obj.height);
		}

		//TILEMAPS
		for( var i = 0; i < resources.LoaderState.tilemaps.length; i++ ){
			var obj = resources.LoaderState.tilemaps[i];
			this.game.load.tilemap(obj.name, obj.path, null, Phaser.Tilemap.TILED_JSON);
		}

		//SOUNDS
		for( var i = 0; i < resources.LoaderState.audio.length; i++ ){
			var obj = resources.LoaderState.audio[i];
			this.game.load.audio(obj.name, obj.path);
		}
      
	},

	update: function(){

		if(Date.now() > this._continue){
			this.game.state.start('MainMenu');
		}
	}
};