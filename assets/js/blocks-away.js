//-------------------------------------------------------------------Audio
// Keep track of audio setting
var audio = {
    playing : 0,
}
// Audio On & Off buttons
$(".on").click(function(){
    document.getElementById('background').play();
    document.getElementById('game-song').pause();
    $('.audioFeedback').text("Audio Selected: ON");
    $('#sound').show();
    $('#mute').hide();
    audio.playing = 1;
});
$(".off").click(function(){
    document.getElementById('background').pause();
    document.getElementById('game-song').pause();
    $('.audioFeedback').text("Audio Selected: OFF");
    $('#sound').hide();
    $('#mute').show();
    audio.playing = 0;
});

//Global Sound Button
$('#mute').click(function(){
    document.getElementById('background').play();
    document.getElementById('game-song').pause();
    $('.audioFeedback').text("Audio Selected: ON");
    $('#sound').show();
    $('#mute').hide();
    audio.playing = 1;
});
$('#sound').click(function(){
    document.getElementById('background').pause();
    document.getElementById('game-song').pause();   
    $('.audioFeedback').text("Audio Selected: OFF");
    $('#sound').hide();
    $('#mute').show();
    audio.playing = 0;
});

// ***BUG FIX***
// Fill the board with 0's then run gameMode function, this way the board is reset and ready incase a user re-enters the game.
$('.back').click(function(){
    alive = false;
    board.forEach(row => row.fill(0));
    gameMode();
})

//increase game difficulty as game progresses
function progression(){
    fallRate --;
}

// ------------------------------------MAIN GAME AREA: ---------------------------------------------
const canvas = document.getElementById('blocks-away');
const context = canvas.getContext("2d");  


//------------------------------------------------------------------------------------------ Scale The Blocks.
context.scale(20,6);

//Create a player so we can track the score
var player = {
    top: 0,
    score: 0,
};

var alive = false;
//------------------------------------------------------------------------------------------ Preset Block Shapes In Strings.
//Numbers in strings have to change from 1 else all will appear same color. 
function shapes(shape){
    if (shape === "A") {            //A = Large T shape && color #FF2D00
        return [[1,1,1],            //B = Smaller T shape && color #FF9300
                [0,1,0],            //C = Forwards L shape && color #51FF00
                [0,1,0]];           //D = Backwards L shape && color #00FF93
    }else if (shape === "B"){       //E = Z shape && color #0087FF
        return [[0,0,0],            //F = S Shape && color #4E49A7
                [2,2,2],            //G = Straight Line && color #9649A7
                [0,2,0]];           //H = Cube && color #F10B38
    }else if (shape === "C"){
        return [[3,0,0],
                [3,0,0],
                [3,3,0]];
    }else if (shape === "D"){
        return [[0,0,4],
                [0,0,4],
                [4,4,4]];
    }else if (shape === "E"){
        return [[0,0,0],
                [5,5,0],
                [0,5,5]];
    }else if (shape === "F"){
        return [[0,0,0],
                [0,6,6],
                [6,6,0]];
    }else if (shape === "G"){
        return [[0,7,0],
                [0,7,0],
                [0,7,0]];
    }else if (shape === "H"){
        return [[0,0,0,0],
                [0,8,8,0],
                [0,8,8,0],
                [0,0,0,0]];
    }else if (shape === "I"){
        return [[0,0,0],
                [0,0,0],
                [0,0,0]];
    }   
}

//------------------------------------------------------------------------------------------ Draw The Strings With !0 Value
//Define the peices, offset needed to move each block (array) 
function drawBlocks(grid, offset){
    grid.forEach((row, y) =>{
        row.forEach((value, x) =>{
            //Value which is not 0 will be colored, by adding different number can access
            //different colors for the different blocks.
            if (value !== 0){
                context.fillStyle = color[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

//------------------------------------------------------------------------------------------ Check For Impact!
//If a number which is !0 lands on another number which is !0 we detect the impact
//and play sound.
function stack(board,block){
    const [g,o] = [block.grid, block.position]
    for (let y = 0; y < g.length; ++y){
        for (let x = 0; x < g[y].length; ++x){
            if (g[y][x] !==0 && (board[y + o.y] && board[y + o.y][x + o.x]) !== 0){
                return true;
            }
        }
    }
    return false;
}

//------------------------------------------------------------------------------------------ Create Blocks
function makeBlock(width,height){
    const newBlock = [];
    while (height--){
        newBlock.push(new Array(width).fill(0));
    }
    return newBlock;
};

//------------------------------------------------------------------------------------------ Draw Function
function draw(){
    context.fillStyle = "rgb(77,88,20)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawBlocks(board, { x: 0, y: 0 });
    drawBlocks(block.grid, block.position);
}

//------------------------------------------------------------------------------------------ Check for numbers != 0
function merge(board, block){
    block.grid.forEach((row, y) =>{
        row.forEach((value, x) =>{
            if (value !== 0){
                board[y+block.position.y][x+block.position.x] = value;
            }
        });
    });
}

//------------------------------------------------------------------------------------------ Rate At Which Blocks Fall
// Fall rate 500 can be default, provides a default difficulty which 
// most users should be able to have fun with.
let fallCount = 0;
var fallRate = 500;

//------------------------------------------------------------------------------------------ Move Down One Row At A Time, Scan For Array With No 0's Each Time To Clear
//                                                                                           The Line.
function dropBlock(){
    if (alive == true){
        block.position.y++;
        //Check No Impact, If Stack True, Merge Original Array, 
        //Then 'Reset' With New Block At Top Of Board.
        //If A Row Is Full && No 0's Clear The Line & Place New
        //Empty Array At Top Of Board. 
        if (stack(board, block) && alive == true){
            block.position.y--;
            merge(board, block);
            
            if (audio.playing == 1){
                $('#thud').each(function(){
                    this.play();
                });
            }else{
                
            }
            //Lower the fallRate value (difficulty)
            progression();
            //Call new block
            blockReset();
            //Remove line when full
            clearTheLine();
            //Add the score to scoreboard.
            trackScore(); 
        }
    }
    fallCount=0;
}

//------------------------------------------------------------------------------------------ Move The Blocks But Not Off The Board
function blockMove(direction){
    block.position.x += direction;
    if (stack(board, block)){
        block.position.x -= direction;
    }
}
//------------------------------------------------------------------------------------------ Math Random To Pick Block Array At Random
function blockReset(){
    if (alive == false){
    block.grid = shapes('I');
    block.position.y = 1;
    block.position.x = (board[0].length / 2 | 0) - (block.grid[0].length / 2 | 0);
    }else if (alive == true){
    const shape = "ABCDEFGH";
    block.grid = shapes(shape[shape.length * Math.random() | 0]);
    block.position.y = 1;
    block.position.x = (board[0].length / 2 | 0) - (block.grid[0].length / 2 | 0);
    progression();
    }
    
    if (stack(board, block)){
       board.forEach(row => row.fill(0));  
        if (player.score > player.top && player.score > localStorage.getItem("player",player.top)){
                player.top = player.score;
                player.top = JSON.stringify(player.score)
                localStorage.setItem("player",player.top);
                    alive = false;
                    trackScore();
                    gameOver();
                    return;

            }else if(player.score >= player.top && player.score <= localStorage.getItem("player",player.top)){
                    alive = false;
                    trackScore();
                    gameOver();
                    return;

            }else if(player.score <= player.top && player.score <= localStorage.getItem("player",player.top)){
                    alive = false;
                    trackScore();
                    gameOver();
                    return;
            }
    }
}

//------------------------------------------------------------------------------------------ Rotate & Transpose Arrays To Allow Rotation
// Had Bugs, Used Stack Overflow For Answer: stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
function blockRotation(direction){
    rotation(block.grid, direction);
    //BUG - Stack not detecting horizontally, only vertically.
    //FIX - Use a loop to check left and right from current position.
    const position = block.position.x;
    let horiCheck = 1;
    while(stack(board, block)){
        //FIX - check one place first before growing the check
        block.position.x += horiCheck;
        horiCheck = -(horiCheck + (horiCheck > 0 ? 1 : -1));
        //Use the if to stop the loop check
        if (horiCheck > 10){
            rotation(block.grid, - direction);
            //else we need to return to the regular state
            block.position.x = position;
            return; 
        }
    }
}

//------------------------------------------------------------------------------------------ Rotate & Transpose Arrays To Allow Rotation
// Had Bugs, Used Stack Overflow For Answer: stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
function rotation(grid, direction){
    for (let y= 0; y < grid.length; y++){
        for (let x= 0; x < y; x++){
            //allow the flip
            [grid[x][y],grid[y][x]] = [grid[y][x],grid[x][y]];
        }
    }
    //Direction Rotation
    if (direction > 0){
        grid.forEach(row => row.reverse());
    }else{
        grid.reverse();
    }
}

//------------------------------------------------------------------------------------------ Game Timing  
let firstLoggedTime = 0;

function autoDraw(time = 0){
    const gameTime = time - firstLoggedTime;
    firstLoggedTime = time;
    
    fallCount += gameTime;
    if (fallCount > fallRate){
        dropBlock();
    }

    draw();
    requestAnimationFrame(autoDraw)
}

//------------------------------------------------------------------------------------------ Define The Board (Canvas)
const board = makeBlock(15,25);

function trackScore() {
    if (JSON.parse(localStorage.getItem("player",player.top)) > 0){
        document.getElementById('player-score').innerHTML = 
        `<h5>Scoreboard</h5>
        <p>Top Score: ${(JSON.parse(localStorage.getItem("player",player.top)))}</p>
        <p>Current Score: ${player.score}</p>`;
        return;
    }else{
        document.getElementById('player-score').innerHTML = 
        `<h5>Scoreboard</h5>
        <p>Top Score: ${player.top}</p>
        <p>Current Score: ${player.score}</p>`;
        return;
    }
}

//------------------------------------------------------------------------------------------ Define The Blocks
const block = {
    position: {x: 0, y: 1},
    grid: null,
}

//------------------------------------------------------------------------------------------ Clear A Full Line (Array)
// Clear the line, play a noise and add a score to the scoreboard.
function clearTheLine(){
    let lineCounter = 1;
    checkLine: for (let y = board.length - 1; y > 0; --y){
        for (let x = 0; x < board[y].length; ++x){
            //check for a 0 in the row (not full)
            if (board[y][x] === 0){
                continue checkLine; 
            }
        }
        //Take the full line, empty the array, fill with 0s and move it to the top.
        const line = board.splice(y,1)[0].fill(0);
        board.unshift(line);
        ++y;
        
        //Play sound on line break
        if (audio.playing == 1){
            $('#line-break').each(function(){
            this.play();
            });
        }
        player.score += lineCounter * 10;
        lineCounter *= 2;
    }
}


//------------------------------------------------------------------------------------------ Controls (Place Buttons Below Canvas For Mobile/Tablet Users)
//Position can be changed in console, below is to listen for keys
    $("#a").click(function(){
         blockMove(-1);
    })
    $("#s").click(function(){
         dropBlock();
    })
    $("#d").click(function(){
         blockMove(+1);
    })
    $("#q").click(function(){
         blockRotation(-1);
    })
    $("#e").click(function(){
         blockRotation(1);
    })


document.addEventListener("keydown", event =>{
    if (event.key === "a" || event.key === "A" || event.code === 65){
        blockMove(-1);     
    }else if (event.key === "d" || event.key === "D" || event.code === 68){
        blockMove(+1);
    }else if (event.key === "s" || event.key === "S" || event.code === 83){
        dropBlock();
    }else if (event.key === "q" || event.key === "Q" || event.code === 81){
        blockRotation(-1);  
    }else if (event.key === "e" || event.key === "E" || event.code === 69){
        blockRotation(1);  
    }
});

// Difficulty: (game starting difficulty)
$('#easy').click(function(){
    fallRate = 500;
    difficulty = 1;
    $('.difficulty').text("Difficulty: Easy Selected");
})
$('#med').click(function(){
    fallRate = 400;
    difficulty = 2;
    $('.difficulty').text("Difficulty: Medium Selected");
})
$('#hard').click(function(){
    fallRate = 300;
    difficulty = 3;
    $('.difficulty').text("Difficulty: Hard Selected");
});

function testFall(){
    while (fallRate == 500 || fallRate == 400 || fallRate == 300){
        console.log(fallRate);
    }
}
testFall();

function resetFallRate(){
    if (difficulty == 1){
        fallRate = 500;
    }else if (difficulty ==2){
        fallRate = 400;
    }else if (difficulty ==3){
        fallRate = 300;
    }
}

//------------------------------------------------------------------------------------------ Block Colors
//If time change from colors to sprites.
var color = [null,"#FF2D00","#FF9300","#51FF00","#00FF93","#0087FF","#4E49A7","#9649A7","#F10B38"];

//------------------------------------------------------------------------------------game over screen:
function gameOver(){
    //first hide the game
board.forEach(row => row.fill(0));
$('#blocks-away').fadeOut(1000, function(){
    $('.key-buttons').hide();
    //pause any music if there is any
    if (audio.playing == 1){
        document.getElementById('background').pause();
        document.getElementById('game-song').pause();
        document.getElementById('gameOver').play();
    }
    //toggle the game over screen
   $('#game-over').show();
        $(".back").hide();
        $('#player-score').hide();
        $("#no").click(function(){
                        if (audio.playing == 1){
                            document.getElementById('background').pause();
                            document.getElementById('gameOver').pause();
                            document.getElementById('game-song').pause();
                            document.getElementById('background').play();
                            }
            $('.content').fadeOut(500);
            $("game-over").hide();
            $(".menu").fadeIn(2000); 

            gameMode();
            resetFallRate();
        })
        $("#yes").click(function(){
           if (audio.playing == 1){
                document.getElementById('game-song').play();
            }  
            alive = true;
            player.score = 0;
            board.forEach(row => row.fill(0));
            $('#game-over').hide();
            $('.key-buttons').fadeIn(500);
            $('#player-score').fadeIn(500);
            $('#blocks-away').fadeIn(1000);
            $('.back').fadeIn(1000);
            trackScore();
            blockReset();
            autoDraw();
            resetFallRate();
        })
    });
}

function gameMode(){
    document.getElementById('play');
     $('#start-game').click(function(){
        //On starting game we want to remove the functionality of the start button
            if (audio.playing == 1){
                document.getElementById('background').pause();
                document.getElementById('game-song').play();
            }
        
            alive = true;
            board.forEach(row => row.fill(0));
            trackScore();
            blockReset();
            autoDraw();
            progression();
            $('#game-over').hide();
            $("#player-score").fadeIn(500);
            $('.key-buttons').fadeIn(500);
            $("#blocks-away").fadeIn(500);
            $("#quit").show();
     });
    }
gameMode();


