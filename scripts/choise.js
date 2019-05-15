class Choise{
    constructor(){
        this.fourShipCount = 1;
        this.threeShipCount = 2;
        this.twoShipCount = 3;
        this.oneShipCount = 4; 
    }

    ChooseOneShip(control,drawer){
        if(this.oneShipCount > 0){
            this.oneShipCount--;
            control.SetShipSize(1);
            Draw(drawer);
        }
    }

    ChooseTwoShip(control,drawer){
        if(this.twoShipCount > 0){
            this.twoShipCount--;
            control.SetShipSize(2);
            Draw(drawer);
        }
    }

    ChooseThreeShip(control,drawer){
        if(this.threeShipCount > 0){
            this.threeShipCount--;
            control.SetShipSize(3);
            Draw(drawer);
        }
    }

    ChooseFourShip(control,drawer){
        if(this.fourShipCount > 0){
            this.fourShipCount--;
            control.SetShipSize(4);
            Draw(drawer);
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