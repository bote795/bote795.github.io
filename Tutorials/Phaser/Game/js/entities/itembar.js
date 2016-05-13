function Itembar(game){
    this.game = game;
    this.selected = 0;
    
    this.hud = this.game.add.sprite(10, 10, 'hud');
    this.hud.fixedToCamera = true;
    
    this.playing = true;
    this.muteButton = this.game.add.button(195, 75, 'mute', function(){
		if (this.playing)
		{
            this.playing = false;
            this.game.music.stop();
            this.muteButton.setFrames(0);
		}
		else
		{
            this.playing = true;
            this.game.music.play('',0,1,true);
            this.muteButton.setFrames(1);
		}
		}, this, 0, 1, 0);
	this.muteButton.fixedToCamera = true;
    
    Phaser.Sprite.call(this, this.game, 5, 600, 'itembar');
    this.animations.add('h', [0], 3, false);
    this.animations.add('e', [1], 3, false);
    this.animations.add('r', [2], 3, false);
    this.fixedToCamera = true;
    this.game.add.existing(this);
}
Itembar.prototype = Object.create( Phaser.Sprite.prototype );
Itembar.prototype.constructor = Itembar;

Itembar.prototype.update = function(){
    
    if (this.selected === 0)
        this.animations.play('h');
    if (this.selected == 1)
        this.animations.play('e');
    if (this.selected == 2)
        this.animations.play('r');
        

};