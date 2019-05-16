class Drawer{
    constructor(){
       this.DESK_SIZE = 10; 
       document.getElementById("player-desk").width = document.getElementById("player-desk").clientWidth;
       document.getElementById("player-desk").height = document.getElementById("player-desk").clientHeight;
       document.getElementById("bot-desk").width = document.getElementById("bot-desk").clientWidth;
       document.getElementById("bot-desk").height = document.getElementById("bot-desk").clientHeight;
    }

    ShowBotDesk(){
        document.getElementById("bot").classList.remove("b-zone_hide");
    }

    HideBotDesk(){
        document.getElementById("bot").classList.add("b-zone_hide");
    }

    DrawBotDesk(greed){
        this.DrawDesk("bot-desk",greed);
    }

    DrawPlayerDesk(greed){
        this.DrawDesk("player-desk",greed);
    }

    DrawSinglePlayerShip(player, control){
        this.DrawPlayerDesk(player.desk);

        let img = document.getElementById("player-desk");
        let context = img.getContext("2d");
        let size = img.clientWidth/this.DESK_SIZE;

        if(control.IsShipCanBePast(player)){
            context.fillStyle = '#3a3';
        } else{
            context.fillStyle = '#a33';
        }

        if(control.orientation == "horizontal"){
            for (let i = 0; i < control.shipSize; i ++) {
                context.fillRect((control.coords.x + i) * size + 1, control.coords.y * size + 1, size - 2, size - 2);
            }
        } else{
            for (let i = 0; i < control.shipSize; i ++) {
                context.fillRect(control.coords.x * size + 1, (control.coords.y + i) * size + 1, size - 2, size - 2);
            }
        }
    }

    DrawDesk(desk,greed){
        let img = document.getElementById(desk);
        let context = img.getContext("2d");
        let size = img.clientWidth/this.DESK_SIZE;

        context.fillStyle = '#000';
        context.fillRect(0, 0, size*this.DESK_SIZE, size*this.DESK_SIZE);

        for (let i = 0; i < this.DESK_SIZE; i ++){
            for (let j = 0; j < this.DESK_SIZE; j ++) {
                if(greed[i][j] === 0){
                    context.fillStyle = '#ddd';
                }
                if(greed[i][j] === 1){
                    context.fillStyle = '#333';
                }
                if(greed[i][j] === 2){
                    context.fillStyle = '#f33';
                }
                context.fillRect(i * size + 1, j * size + 1, size - 2, size - 2);
            }
        }
    }

    ShowControl(){
        document.getElementById("control").classList.remove("b-zone_hide");
    }

    HideControl(){
        document.getElementById("control").classList.add("b-zone_hide");
    }

    ShowChoose(){
        document.getElementById("choose").classList.remove("b-zone_hide");
    }

    HideChoose(){
        document.getElementById("choose").classList.add("b-zone_hide");
    }

    DrawChoose(oneShipCount, twoShipCount, threeShipCount,fourShipCount){
        this.DrawOneChoose("one-ship-count",oneShipCount);
        this.DrawOneChoose("two-ship-count",twoShipCount);
        this.DrawOneChoose("three-ship-count",threeShipCount);
        this.DrawOneChoose("four-ship-count",fourShipCount);
    }

    DrawOneChoose(name,count){
        document.getElementById(name).textContent = count;
    }
}