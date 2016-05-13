function GUIManager(game){
	this.game = game;
	
}

GUIManager.prototype.setup = function(){
    this.itembar = new Itembar(this.game);
	this.storemenu = new StoreMenu(this.game);
	this.storemenu.visible = false;
};

GUIManager.prototype.handleStore = function(){

	this.storemenu.visible = true;
};

GUIManager.prototype.update = function(){
    this.itembar.update();
	this.storemenu.update();
};

GUIManager.prototype.handleMouseWheel = function(e){

	if( e.wheelDelta < 0 ){

		if(this.itembar.selected == 2){
			this.itembar.selected = 0;
		}
		else{
			this.itembar.selected++;
		}
	}
	else if( e.wheelDelta > 0 ){

    if(this.itembar.selected === 0){
			this.itembar.selected = 2;
		}
		else{
			this.itembar.selected--;
		}
	}
};