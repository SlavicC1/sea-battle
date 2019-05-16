(function(){
    let gameState = "choose"; 
    //start
    //choose
    //control
    //player-turn
    //bot-turn
    //end

    let player = new Player();
    let choise = new Choise();
    let control = new Control();
    let bot = new Bot();
    let drawer = new Drawer();

    player.DeskInit();
    bot.DeskInit();

    drawer.DrawChoose(choise.oneShipCount, choise.twoShipCount, choise.threeShipCount, choise.fourShipCount);
    drawer.DrawPlayerDesk(player.desk);

//choose
    document.getElementById("one-ship").onclick = function(){
        gameState = "control";
        choise.ChooseOneShip(control,drawer,player);
    };
    document.getElementById("two-ship").onclick = function(){
        gameState = "control";
        choise.ChooseTwoShip(control,drawer,player);
    };
    document.getElementById("three-ship").onclick = function(){
        gameState = "control";
        choise.ChooseThreeShip(control,drawer,player);
    };
    document.getElementById("four-ship").onclick = function(){
        gameState = "control";
        choise.ChooseFourShip(control,drawer,player);
    };
//control
    document.getElementById("left-b").onclick = function(){
        control.Left(player,drawer);
    };
    document.getElementById("right-b").onclick = function(){
        control.Right(player,drawer);
    };
    document.getElementById("up-b").onclick = function(){
        control.Up(player,drawer);
    };
    document.getElementById("down-b").onclick = function(){
        control.Down(player,drawer);
    };
    document.getElementById("rotate-b").onclick = function(){
        control.Rotate(player,drawer);
    };
    document.getElementById("paste-b").onclick = function(){
        if(choise.IsShipsLast()){
            gameState = "choose";
        } else{
            gameState = "player-turn";
        }
        control.Paste(player,choise,drawer);
    };
//game start
    drawer.DrawBotDesk(bot.botDesk);
//game
    
})();