MainGame.resources = {};

MainGame.resources.BootState = {
	spritesheets: [
		{name: 'spinner', path: 'assets/spritesheets/spinner.png', width: 15, height: 15 }
	]
};
MainGame.resources.LoaderState = {

	  images: [
			{name: 'background', path: 'assets/images/starfield.jpg'}
			,{name: 'bubblegumbutton', path: 'assets/images/bubblegumSelection.png'}
			,{name: 'cornbutton', path: 'assets/images/cornSelection.png'}
			,{name: 'mintbutton', path: 'assets/images/mintSelection.png'}
			,{name: 'bullet', path: 'assets/images/bullet.png'}
		  ]
		  , spritesheets: [
		  
		   {name: 'player_health', path: 'assets/spritesheets/player_health.png', width: 48, height: 6}
		 , {name: 'corn', path: 'assets/spritesheets/corn.png', width: 40, height: 40}
		 , {name: 'mint', path: 'assets/spritesheets/mint.png', width: 40, height: 40}
		 , {name: 'gumball', path: 'assets/spritesheets/gumball.png', width: 44, height: 44}
		 
		 , {name: 'start_btn', path: 'assets/spritesheets/start_btn.png', width: 288, height: 71}
		 ,{name: 'instructions_btn', path: 'assets/spritesheets/instructions_btn.png', width: 288, height: 71}
		 ,{name: 'zombie', path: 'assets/spritesheets/MZombie1.png', width: 36, height: 36}
		] 
		, tilemaps: [
		//  {name: 'test3', path: 'assets/tilemaps/test3.json'}
	]
	, audio: [
		/*
		  {name: 'turret_small_sfx', path: 'assets/audio/turret_small.wav'}
		*/
	]
};
