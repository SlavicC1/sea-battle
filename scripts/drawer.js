class Drawer{
    constructor(){
        
    }

    ShowBotDesk(){

    }

    HideBotDesk(){

    }

    DrawBotDesk(greed){
        DrawDesk("",greed);
    }

    DrawPlayerDesk(greed){
        DrawDesk("",greed);
    }

    DrawSinglePlayerShip(player, control){
        DrawPlayerDesk(player.desk);

    }

    DrawDesk(desk,greed){

    }

    ShowControl(){

    }

    HideControl(){

    }

    ShowChoose(){

    }

    HideChoose(){
        
    }

    DrawChoose(oneShipCount, twoShipCount, threeShipCount,fourShipCount){
        DrawOneChoose(1,oneShipCount);
        DrawOneChoose(2,twoShipCount);
        DrawOneChoose(3,threeShipCount);
        DrawOneChoose(4,fourShipCount);
    }

    DrawOneChoose(size,count){

    }
}