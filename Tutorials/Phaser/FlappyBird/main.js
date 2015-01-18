// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {

    preload: function() { 
		// Function called first to load all the assets
		
		//change the background color of the game
		this.game.stage.backgroundColor = '#71c5cf';
		//load the bird sprite
		this.game.load.image('bird','assets/bird.png');
		//load the pipes
		this.game.load.image('pipe', 'assets/pipe.png');
		//load sound
		this.game.load.audio('jump','assets/jump.wav');
    },

    create: function() { 
    	// Fuction called after 'preload' to setup the game
		
		//display the bird on the screen
		this.bird = this.game.add.sprite(100,245,'bird');
		//add gravity to the bird to make it fall
		this.bird.body.gravity.y = 1000;
		// call the 'jump' function when the space key is hit
		var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		space_key.onDown.add(this.jump, this);
		//adds a group of pipes to display
		this.pipes = game.add.group();
		this.pipes.createMultiple(20, 'pipe');
		this.bird.anchor.setTo(-0.2, 0.5);
		this.jump_sound = this.game.add.audio('jump');
		this.timer = this.game.time.events.loop(1500, this. add_row_of_pipes, this);
		
		this.score = 0;
		var style = {font: "30px Arial", fill: "#ffffff"};
		this.label_score = this.game.add.text(20,20,"0", style);
    },
    
    update: function() {
		// Function called 60 times per second
		//if bird is out of the world (too high or too low), call the 'restart_game' function
		
		if(this.bird.angle < 20)
		{
			this.bird.angle +=1;
		}
		this.game.physics.overlap(this.bird, this.pipes, this.hit_pipe, null, this);
		if(this.bird.inWorld == false)
		{
			this.restart_game();
		}
    },
	jump: function() {
		if(this.bird.alive ==false)
			return;
		//create an animation on the bird
		this.game.add.tween(this.bird).to({angle: -20}, 100).start();
		//add a vertical velocity to the bird
		this.bird.body.velocity.y =-350;
		this.jump_sound.play();
	},
	restart_game: function() {
		this.game.time.events.remove(this.timer);
		//start the 'main' state, which restarts the game
		this.game.state.start('main');
	},
	add_one_pipe: function(x,y) {
		//get this first dead pipe of our group
		var pipe = this.pipes.getFirstDead();
		//set the new position of the pipe
		pipe.reset(x,y);
		//add velocity to the pipe to make it move left
		pipe.body.velocity.x = -200;
		
		//kill the pipe when its no longer visible
		pipe.outOfBoundsKill = true;
	},
	add_row_of_pipes: function() {
		var hole = Math.floor(Math.random()*5)+1;
		
		for(var i= 0; i < 8; i++)
		{
			if(i != hole && i != hole +1 )
			{
				this.add_one_pipe(400, i*60+10);
				
			}
				
		}
		this.score +=1;
		this.label_score.content = this.score;
	},
	hit_pipe: function(){
		//If the bird has already hit a pipe, we have nothing to do
		if(this.bird.alive ==false)
			return;
		//set the alive propert of the bird to false
		this.bird.alive =false;
		//prevent new pipes from appearing
		this.game.time.events.remove(this.timer);
		//go through all the pipes, and stop their movement
		this.pipes.forEachAlive(function(p){
			p.body.velocity.x =0;
			}, this);
	},
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 