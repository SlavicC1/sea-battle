class Player{
    constructor(){
        this.DESK_SIZE = 10;

        this.desk = new Array();
        // 0 - free
        // 1 - ship
        // 2 - dameged ship
    }

    DeskInit(){
        for(let x = 0; x < this.DESK_SIZE; x++){
            this.desk[x] = new Array();
            for(let y = 0; y < this.DESK_SIZE; y++){
                this.desk[x][y] = 0;
            }
        }
    }

    SetShip(x,y,size,orientation, drawer){
        if(orientation === "horizontal"){
            for(let i = x; i < x+size; i++){
                this.desk[i][y] = 1;
            }
        } else{
            for(let i = y; i < y+size; i++){
                this.desk[x][i] = 1;
            }
        }

        drawer.DrawPlayerDesk(this.desk);
    }

    TakeBotShoot(x,y,drawer){
        if(this.desk[x,y] === 1){
            this.desk[x,y] = 2;
            drawer.DrawPlayerDesk(this.desk);
        }
    }
}