class Bot{
    constructor(){
        this.DESK_SIZE = 10;

        this.desk;
        this.playerDesk;
        this.botDesk;
        // 0 - fog
        // 1 - free
        // 2 - dameged ship
        DeskInit();
    }

    DeskInit(){
        for(let x = 0; x < this.DESK_SIZE; x++){
            for(let y = 0; y < this.DESK_SIZE; y++){
                this.desk[x,y] = 0;
                this.playerDesk[x,y] = 0;
                this.botDesk[x,y] = 0;
            }
        }
        SetOwnDesk();
    }

    SetOwnDesk(){
        //ai
    }

    MakeChoise(){
        //ai
    }

    TakePlayerShoot(x,y,drawer){
        if(this.desk[x,y] === 1){
            this.desk[x,y] = 2;
            this.botDesk[x,y] = 2;
        }
        else{
            this.botDesk[x,y] = 1;
        }
        drawer.DrawBotDesk(this.desk);
    }


}