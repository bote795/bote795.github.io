MainGame.CharacterSelectionState = function(game){

};
MainGame.CharacterSelectionState.prototype = {

	create: function(){
		var width = 1024;
		this.add.sprite(0, 0, 'background');
		var text = "Choose your Character.";
		var style = { font: "65px Arial", fill: "#a6a6a6", align: "center" };
		var t = this.game.add.text(width/2, 50, text, style);
      	t.anchor.setTo(0.5,0.5);
		this.game.add.existing(t)

		var sniper_btn = new Phaser.Button(this.game, width/5, 200, 'sniperbutton', function(){
			this.game.key = 'Sniper';
			this.game.state.start('Game');
		}, this, 0, 0, 0);
		sniper_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(sniper_btn);
		var texts = "Sniper";
		var styles = {font: "40px Arial", fill: "#a6a6a6", align: "center"};
		var s = this.game.add.text(width/5, 325, texts, styles);
      	s.anchor.setTo(0.5,0.5);
		this.game.add.existing(s);
		
		var gunner_btn = new Phaser.Button(this.game, 2*width/5, 200, 'gunnerbutton', function(){
			this.game.key = 'Gunner';
			this.game.state.start('Game');
		}, this, 0, 0, 0);
		gunner_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(gunner_btn);
		var textg = "Gunner";
		var styleg = {font: "40px Arial", fill: "#a6a6a6", align: "center"};
		var g = this.game.add.text(2*width/5, 325, textg, styleg);
       	g.anchor.setTo(0.5,0.5);
		this.game.add.existing(g);

		
		var medic_btn = new Phaser.Button(this.game, 3*width/5, 200, 'medicbutton', function(){
			this.game.key = 'Medic';
			this.game.state.start('Game');
		}, this, 0, 0, 0);
		medic_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(medic_btn);
		var textm = "Medic";
		var stylem = {font: "40px Arial", fill: "#a6a6a6", align: "center"};
		var m = this.game.add.text(3*width/5, 325, textm, stylem);
       	m.anchor.setTo(0.5,0.5);
		this.game.add.existing(m);
		
		var tank_btn = new Phaser.Button(this.game, 4*width/5, 200, 'tankbutton', function(){
			this.game.key = 'Tank';
			this.game.state.start('Game');
		}, this, 0, 0, 0);
		tank_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(tank_btn);
		var textt = "Tank";
		var stylet = {font: "40px Arial", fill: "#a6a6a6", align: "center"};
		var t = this.game.add.text(4*width/5, 325, textt, stylet);
       	t.anchor.setTo(0.5,0.5);
		this.game.add.existing(t);
		
		var back_btn = new Phaser.Button(this.game, width/2, 700, 'backbutton', function(){
			this.game.state.start('MainMenu');
		}, this, 1, 0, 0);
		back_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(back_btn);

	},

	update: function(){

	}
};