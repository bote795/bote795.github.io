MainGame.resources = {};

MainGame.resources.BootState = {
  	images: [
    		{name: 'wasdl', path: 'assets/images/wasdload.png'}
			,{name: 'ql', path: 'assets/images/qload.png'}
			,{name: 'mousel', path: 'assets/images/leftclickload.png'}
			,{name: 'shiftl', path: 'assets/images/shiftload.png'}
		    ,{name: 'spacel', path: 'assets/images/spacebarload.png'}
    ]
  	,spritesheets: [
			{name: 'zombie', path: 'assets/spritesheets/MZombie1.png', width: 36, height: 36}
	]
};
MainGame.resources.LoaderState = {

    images: [
             {name: 'background', path: 'assets/images/background.png'}
            ,{name: 'gameover', path: 'assets/images/gameover.png'}	
        
			,{name: 'sniperbutton', path: 'assets/images/sniperChoice.png'}
			,{name: 'gunnerbutton', path: 'assets/images/gunnerChoice.png'}
			,{name: 'medicbutton', path: 'assets/images/medicChoice.png'}
			,{name: 'tankbutton', path: 'assets/images/tankChoice.png'}
	
            ,{name: 'hud', path: 'assets/images/hud.png'}
            ,{name: 'wasd', path: 'assets/images/wasd.png'}
			,{name: 'q', path: 'assets/images/q.png'}
			,{name: 'mouse', path: 'assets/images/leftclick.png'}
			,{name: 'shift', path: 'assets/images/shift.png'}
		    ,{name: 'space', path: 'assets/images/spacebar.png'}
			,{name: 'bullet', path: 'assets/images/bullet.png'}
			,{name: 'sbullet', path: 'assets/images/specialbullet.png'}
			
            ,{name: 'store', path: 'assets/images/store.png'}
			,{name: 'healthPotion', path: 'assets/images/healthpotion.png'}
			,{name: 'energyPotion', path: 'assets/images/energypotion.png'}
			,{name: 'revivePotion', path: 'assets/images/revivepotion.png'}
			,{name: 'healthUpgrade', path: 'assets/images/healthupgrade.png'}
			,{name: 'energyUpgrade', path: 'assets/images/energyupgrade.png'}
			,{name: 'gun1Button', path: 'assets/images/gun1.png'}
			,{name: 'gun2Button', path: 'assets/images/gun2.png'}
			,{name: 'gun3Button', path: 'assets/images/gun3.png'}
			,{name: 'gun4Button', path: 'assets/images/gun4.png'}
			,{name: 'gun5Button', path: 'assets/images/gun5.png'}
			,{name: 'gun6Button', path: 'assets/images/gun6.png'}
			,{name: 'exitButton', path: 'assets/images/exitshop.png'}
			,{name: 'menu', path: 'assets/images/menu.png'}
          ,{name: 'tiles1', path: 'assets/tilemap/tileset/grass-tiles-2-small.png'}
          ,{name: 'tiles2', path: 'assets/tilemap/tileset/town.png'}
			
        ]
    ,spritesheets: [
  
         {name: 'player_health', path: 'assets/spritesheets/player_health.png', width: 48, height: 6}
		,{name: 'tank', path: 'assets/spritesheets/tank.png', width: 36, height: 36}
		,{name: 'sniper', path: 'assets/spritesheets/assassin_snipe.png', width: 36, height: 36}
		,{name: 'gunner', path: 'assets/spritesheets/smoker.png', width: 36, height: 36}
		,{name: 'medic', path: 'assets/spritesheets/medic.png', width: 36, height: 36}
		 
		//,{name: 'health_btn', path: 'assets/spritesheets/healthupgrade.png', width: 165, height: 61}
	//	,{name: 'energy_btn', path: 'assets/spritesheets/energyupgrade.png', width: 216, height: 54}
	//	,{name: 'exitButton', path: 'assets/spritesheets/exitshop.png', width: 288, height: 71}
		
		,{name: 'itembar', path: 'assets/spritesheets/itembar.png', width: 68.33, height: 142}
		,{name: 'mute', path: 'assets/spritesheets/mute.png', width: 9, height: 10}
		 
	    ,{name: 'advanced', path: 'assets/spritesheets/advanced.png', width: 224, height: 49}
		,{name: 'controls_btn', path: 'assets/spritesheets/controlsbutton.png', width: 288, height: 71}
        ,{name: 'ready_btn', path: 'assets/spritesheets/ready_btn.png', width: 320, height: 60}
		,{name: 'backbutton', path: 'assets/spritesheets/backbutton.png', width: 216.5, height: 53}
		,{name: 'start_btn', path: 'assets/spritesheets/start_btn.png', width: 288, height: 71}
		,{name: 'instructions_btn', path: 'assets/spritesheets/instructions_btn.png', width: 288, height: 71}
        ,{name: 'zombie', path: 'assets/spritesheets/MZombie1.png', width: 36, height: 36}
	
		] 
    ,tilemaps: [
            {name: 'map1', path: 'assets/tilemap/map.json'}
	]
	, audio: [
      {name: 'music1', path: ['assets/Music/TIZE_Game_Music.mp3','assets/Music/TIZE_Game_Music.ogg']}
      ]
};
