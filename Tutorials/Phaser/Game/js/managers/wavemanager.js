function WaveManager(game){

	this.game        = game;
	this.currentWave = 1;
	this.betweenWaves  = false;
	this.states = {
		  PAUSED:    1
		, COUNTDOWN: 2
		, SPAWNING:  3
        , WAVEENDED: 4      
	};
	this._state    	= this.states.SPAWNING;
    this.waveLimit 	= 20;
  	this.waveIn		= 0;
  	this.waveInRate = 1000;
  	this.nextWaveIn = 45;
    this.xSpace = 352,
    this.ySpace = 300,
    this.spawns = {
      spawnIndex: 0,
      x: [this.xSpace, this.xSpace*2, this.xSpace*3, this.xSpace*4, this.xSpace*5, 
          this.xSpace*6, this.xSpace*7, this.xSpace*8, this.xSpace*9, this.xSpace*10, 
          this.xSpace*11, this.xSpace*12, this.xSpace*13, this.xSpace*14, this.xSpace*15, 
          this.xSpace*16, this.xSpace*17, this.xSpace*18, this.xSpace*19, this.xSpace*20, 
          this.xSpace*21, this.xSpace*22, this.xSpace*23, this.xSpace*24, this.xSpace*25,
          50,50,50,50,50,
          50,50,50,50,50,
          50,50,50,50,50,
          50,50,50,50,50,
          50,50,50,50,50,
          this.xSpace, this.xSpace*2, this.xSpace*3, this.xSpace*4, this.xSpace*5, 
          this.xSpace*6, this.xSpace*7, this.xSpace*8, this.xSpace*9, this.xSpace*10, 
          this.xSpace*11, this.xSpace*12, this.xSpace*13, this.xSpace*14, this.xSpace*15, 
          this.xSpace*16, this.xSpace*17, this.xSpace*18, this.xSpace*19, this.xSpace*20, 
          this.xSpace*21, this.xSpace*22, this.xSpace*23, this.xSpace*24, this.xSpace*25,
          12650, 12650, 12650, 12650, 12650, 
           12650, 12650, 12650, 12650, 12650, 
           12650, 12650, 12650, 12650, 12650, 
           12650, 12650, 12650, 12650, 12650, 
           12650, 12650, 12650, 12650, 12650
         ],
      y: [50,50,50,50,50,
          50,50,50,50,50,
          50,50,50,50,50,
          50,50,50,50,50,
          50,50,50,50,50,
          this.ySpace, this.ySpace*2, this.ySpace*3, this.ySpace*4, this.ySpace*5, 
          this.ySpace*6, this.ySpace*7, this.ySpace*8, this.ySpace*9, this.ySpace*10, 
          this.ySpace*11, this.ySpace*12, this.ySpace*13, this.ySpace*14, this.ySpace*15, 
          this.ySpace*16, this.ySpace*17, this.ySpace*18, this.ySpace*19, this.ySpace*20, 
          this.ySpace*21, this.ySpace*22, this.ySpace*23, this.ySpace*24, this.ySpace*25,
          9550, 9550, 9550, 9550, 9550, 
          9550, 9550, 9550, 9550, 9550, 
          9550, 9550, 9550, 9550, 9550, 
          9550, 9550, 9550, 9550, 9550, 
          9550, 9550, 9550, 9550, 9550,
      	  this.ySpace, this.ySpace*2, this.ySpace*3, this.ySpace*4, this.ySpace*5, 
          this.ySpace*6, this.ySpace*7, this.ySpace*8, this.ySpace*9, this.ySpace*10, 
          this.ySpace*11, this.ySpace*12, this.ySpace*13, this.ySpace*14, this.ySpace*15, 
          this.ySpace*16, this.ySpace*17, this.ySpace*18, this.ySpace*19, this.ySpace*20, 
          this.ySpace*21, this.ySpace*22, this.ySpace*23, this.ySpace*24, this.ySpace*25
         ]
    };
	this.spawned   = 0;
	this.spawnMax  = 300;	
    this.onMap     = 0;
    this.killed    = 0;
}

WaveManager.prototype.purge = function(){
	
	this.currentWave = 1;
    this._state      = this.states.SPAWNING;
	this.waveLimit   = 20;
	this.nextWaveIn	 = 45;
    this.spawned     = 0;	
	this.onMap       = 0;
	this.killed      = 0;
};

WaveManager.prototype.update = function()
{
  // count down to give the user time to shop between waves
   if(this._state == this.states.COUNTDOWN)
   {
		if(this.nextWaveIn <= 0){
          	this.nextWaveIn = 45; //reset counter for next wave
			this.currentWave++;
			console.log("BEGINNING WAVE "+this.currentWave);
			
			var waveNum = this.game.add.text(1024/2, 768/2, "WAVE  "+this.currentWave, { font: "150px Viner Hand ITC", fill: "#880015", align: "center" });
			waveNum.anchor.setTo(0.5,0.5);
			waveNum.fixedToCamera = true;
			this.game.add.tween(waveNum).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);

          	this.waveLimit += 20;
    		this.killed = 0;
          	
			console.log(this.spawned);
			this._state = this.states.SPAWNING;
          this.betweenWaves = false;
          
		}
	    if ((this.game.time.now > this.waveIn))
	    {
        	this.waveIn = this.game.time.now + this.waveInRate;
        	this.nextWaveIn--;
        }
	}
   //zombie spawning 
  if(this._state == this.states.SPAWNING)
  {
		if (this.onMap < this.spawnMax && this.spawned < this.waveLimit)
		{
          console.log("spawned");
          	
			var b = new Zombie(this.game, this.getSpawn());
			this.onMap++;
			this.spawned++;
		}
		else if (this.onMap <= 0 && this.spawned == this.waveLimit)
		{
			console.log("WAVE " + this.currentWave + " COMPLETED.");
			this.onMap   = 0;
			this.spawned = 0;
			this._state  = this.states.COUNTDOWN;
          this.betweenWaves = true;
		} 
	}

};  
WaveManager.prototype.getRandomInt = function(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

WaveManager.prototype.getSpawn = function(){

	
  this.spawns.spawnIndex += 1;
  if (this.spawns.spawnIndex > 99) this.spawns.spawnIndex = 0;
  return { x: this.spawns.x[this.spawns.spawnIndex], y: this.spawns.y[this.spawns.spawnIndex] };
  
};

