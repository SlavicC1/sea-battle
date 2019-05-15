class Control{
    constructor(){
        this.shipSize = 0;
        this.orientation = "horizontal";
        this.coords = { x:0, y:0 };
    }

    SetShipSize(shipSize){
        this.shipSize = shipSize;
        this.orientation = "horizontal";
        this.coords = { x:0, y:0 };
    }

    Up(player,drawer){
        if(this.coords.y >= 1){
            this.coords.y--;
        }
        drawer.DrawSinglePlayerShip(player, this);
    }

    Down(player,drawer){
        if(this.orientation === "horizontal"){
            if(this.coords.y < player.DESK_SIZE - 1){
                this.coords.y++;
            }
        } else{
            if(this.coords.y + this.shipSize - 1 < player.DESK_SIZE - 1){
                this.coords.y++;
            }
        }
        drawer.DrawSinglePlayerShip(player, this);
    }

    Left(player,drawer){
        if(this.coords.x >= 1){
            this.coords.x--;
        }
        drawer.DrawSinglePlayerShip(player, this);
    }

    Right(player,drawer){
        if(this.orientation === "horizontal"){
            if(this.coords.x + this.shipSize - 1 < player.DESK_SIZE - 1){
                this.coords.x++;
            }
        } else{
            if(this.coords.x < this.player - 1){
                this.coords.x++;
            }
        }
        drawer.DrawSinglePlayerShip(player, this);
    }

    Rotate(player, drawer)
    {
        if(this.orientation === "horizontal"){
            this.orientation = "vertical";
            while(this.coords.y + this.shipSize - 1 > player.DESK_SIZE - 1){
                this.coords.y--;
            }
        } else{
            this.orientation = "horizontal";
            while(this.coords.x + this.shipSize - 1 > player.DESK_SIZE - 1){
                this.coords.x--;
            }
        }

        drawer.DrawSinglePlayerShip(player, this);
    }

    Paste(player,choose,drawer){
        if(IsShipCanBePast(player)){
            drawer.HideControl();
            if(choose.IsShipsLast()){
                drawer.ShowChoose();
            } else{
                drawer.ShowBotDesk();
            }
            player.SetShip(this.coords.x, this.coords.y, this.shipSize, this.orientation, drawer);
        }
    }

    IsShipCanBePast(player){
        let flag = true;
        if(this.orientation === "horizontal"){
            for(let i = this.coords.x; i < this.coords.x + this.shipSize; i++){
                if(player.desk[i,this.coords.y] != 0){
                    flag = false;
                }
            }
        } else{
            for(let i = this.coords.y; i < this.coords.y + this.shipSize; i++){
                if(player.desk[this.coords.x,i] != 0){
                    flag = false;
                }
            }
        }
        return flag;
    }
        
}