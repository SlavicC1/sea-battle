class Choise{
    constructor(){
        this.fourShipCount = 1;
        this.threeShipCount = 2;
        this.twoShipCount = 3;
        this.oneShipCount = 4; 
    }

    ChooseOneShip(control,drawer,player){
        if(this.oneShipCount > 0){
            this.oneShipCount--;
            control.SetShipSize(1,player,drawer);
            this.Draw(drawer);
        }
    }

    ChooseTwoShip(control,drawer,player){
        if(this.twoShipCount > 0){
            this.twoShipCount--;
            control.SetShipSize(2,player,drawer);
            this.Draw(drawer);
        }
    }

    ChooseThreeShip(control,drawer,player){
        if(this.threeShipCount > 0){
            this.threeShipCount--;
            control.SetShipSize(3,player,drawer);
            this.Draw(drawer);
        }
    }

    ChooseFourShip(control,drawer,player){
        if(this.fourShipCount > 0){
            this.fourShipCount--;
            control.SetShipSize(4,player,drawer);
            this.Draw(drawer);
        }
    }

    Draw(drawer){
        drawer.DrawChoose(this.oneShipCount, this.twoShipCount, this.threeShipCount, this.fourShipCount);
        drawer.HideChoose();
        drawer.ShowControl();
    }

    IsShipsLast(){
        return (this.oneShipCount + this.twoShipCount + this.threeShipCount + this.fourShipCount) > 0;
    }
}