//5 parts
//1.Initial states
//anonymous functiojns

window.onload = function() {
    var num;
    var box;
    var ctx;
    var turn = 1;
    var filled;//array
    let symbol = ['', '', '', '', '', '', '', '', ''];
    var winner;//8 cases  when a play wins.
    var gameOver = false;
    
    filled = [false, false, false, false, false, false, false, false, false];
    
    // symbol = ['', '', '', '', '', '', '', '', ''];
    
    winner =[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    
    //2.NewGame Button - event + function
    var n = document.getElementById("new");
    n.addEventListener("click", newGame);
    
    //newGame function
    function newGame() {
        document.location.reload();
    }
    //Canvas click + retrieving the box's number
    //canvas click event 
    document.getElementById("tic").addEventListener("click", function(e) {
        boxClick(e.target.id);
    });
    
    function boxClick(numId) {
        box = document.getElementById(numId);
        ctx = box.getContext("2d");
        //alert(numId);
        switch(numId) {
            case "canvas1": num = 1;
                break;
            case "canvas2": num = 2;
                break;
            case "canvas3": num = 3;
                break;
            case "canvas4": num = 4;
                break;
            case "canvas5": num = 5;
                break;
            case "canvas6": num = 6;
                break;
            case "canvas7": num = 7;
                break;
            case "canvas8": num = 8;
                break;
            case "canvas9": num = 9;
                break;
        }
        
        //drawing the shape of the canvases
        if(filled[num-1] === false) {
            if(gameOver === false) {
                if(turn%2 !== 0){//if is odd
                    //draw x
                    ctx.beginPath();
                    ctx.moveTo(15, 15);
                    ctx.lineTo(85, 85);
                    ctx.moveTo(85, 15);
                    ctx.lineTo(15, 85);
                    ctx.strokeStyle = "white";
                    ctx.stroke();
                    ctx.closePath();
                    symbol[num-1] = "X";
                }
                else {
                //draw o
                ctx.beginPath();
                ctx.arc(50, 50, 35, 0, 2 * Math.PI, false);
                ctx.strokeStyle = "white";
                ctx.stroke();
                ctx.closePath();
                symbol[num-1] = "O";
                }
                
                turn++;
                filled[num-1] = true;
                
                //5. winner check
                var s = symbol[num-1];
                for(var j = 0; j < winner.length; j++) {
                 //winner[0] = [0,1,2]
                 //checking if (symbol[0]==symbol[1]==symbol[2])
                    if((symbol[winner[j][0]] == s) && (symbol[winner[j][1]] == s) &&(symbol[winner[j][2]] == s)){
                        document.getElementById("result").innerText = "Player " + s + " won!";
                        gameOver = true;
                    }
                }
                
                //draw condition
                //turn > 9 && gameOver != true
                if(turn > 9 && gameOver != true) {
                    document.getElementById("result").innerText = "Sorry! Game over!";
                    gameOver = true;
                }
            }
            else {//else the game is over
                alert("Game is over! Please click the New Game button to start again!");
            }
        }
        else {//when a box is already drawn by a symbol
            alert("This box was already filled. Please click on another one\(or New Game button\).");
            
        }
    }    
}