document.getElementById('sfx-butt-on').onclick = function(){
    $('#you-lose').volume = 0.0;
    $('#line-break').volume = 0.0;
    $('#thud').volume = 0.0;
}

document.getElementById('start').onclick = function(){
const canvas = document.getElementById('blocks-away');
const context = canvas.getContext("2d");

//------------------------------------------------------------------------------------------ Scale The Blocks.
context.scale(20,6);

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
                [3,3,3]];
    }else if (shape === "D"){
        return [[0,0,4],
                [0,0,4],
                [4,4,4]];
    }else if (shape === "E"){
        return [[5,5,0],
                [0,5,0],
                [0,5,5]];
    }else if (shape === "F"){
        return [[0,6,6],
                [0,6,0],
                [6,6,0]];
    }else if (shape === "G"){
        return [[0,7,0],
                [0,7,0],
                [0,7,0]];
    }else if (shape === "H"){
        return [[8,8,8],
                [8,8,8],
                [8,8,8]];
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
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawBlocks(board, { x: 0, y: 0 });
    drawBlocks(block.grid, block.position);
}

//------------------------------------------------------------------------------------------ Itterate Over Strings
function merge(board, block){
    block.grid.forEach((row, y) =>{
        row.forEach((value, x) =>{
            if (value !== 0){
                board[y+block.position.y][x+block.position.x] = value;
            }
        });
    });
}

//------------------------------------------------------------------------------------------ Rate At Which Blocks Fall (Tie this to user clock)
// Fall rate 500 seems to be fair time, check about lowering (speeding up) the further a game progresses.
let fallCount = 0;
let fallRate = 500;

//------------------------------------------------------------------------------------------ Move Down One Row At A Time, Scan For Array With No 0's Each Time To Clear
//                                                                                           The Line.
function dropBlock(){
    block.position.y++;
    //Check No Impact, If Stack True, Merge Original Array, 
    //Then 'Reset' With New Block At Top Of Board.
    //If A Row Is Full && No 0's Clear The Line & Place New
    //Empty Array At Top Of Board. 
    if (stack(board, block)){
        block.position.y--;
        merge(board, block);
        $('#thud').each(function(){
                    this.play();
                    });
        //Reset The Board When Full ------------------------------------------------------------------------------------------ CHECK HERE FOR GAME OVER SCREEN!!!!
        blockReset();
        //Remove line when full
        clearTheLine();
        //Add the score to scoreboard.
        trackScore();
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
    const shape = "ABCDEFGH";
    block.grid = shapes(shape[shape.length * Math.random() | 0]);
    block.position.y = 0;
    block.position.x = (board[0].length / 2 | 0) - (block.grid[0].length / 2 | 0);
    if (stack(board, block)){
        board.forEach(row => row.fill(0));
        
        //------------------------------------------------------------------------------------------THIS NEEDS TO BE FIGURED OUT!!!! (SAVE SCORE TO BROWSER MEMORY)
        

        //First pause background music, play 'you lose' then when 'you lose ends
        // resume background music.
        $('#site-audio').each(function(){
            this.pause();
            });
        $('#you-lose').each(function(){
            this.play();
            });
        document.getElementById("you-lose").addEventListener("ended", function() {
        $('#site-audio').each(function(){
            this.play(); 
            });
        });
        trackScore();
        
        //------------------------------------------------------------------------------------------now go to game over.. NEEDS WORK!!!!!!!
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
    for (let y= 0; y < grid.length; ++y){
        for (let x= 0; x < y; ++x){
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
//Set first time to 0, 
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

//Create a player so we can track the score
const player = {
    score:0,
};

function trackScore() {
    document.getElementById('player-score').innerText = `Your Score: ${player.score}`;
}

//------------------------------------------------------------------------------------------ Define The Blocks
const block = {
    position: {x: 0, y: 0},
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
        $('#line-break').each(function(){
        this.play();
        });
        player.score += lineCounter * 10;
        lineCounter *= 2;
    }
}


//------------------------------------------------------------------------------------------ Controls (Place Buttons Below Canvas For Mobile/Tablet Users)
//Position can be changed in console, below is to listen for keys
document.addEventListener("keydown", event =>{
    if (event.key === "a"){
        blockMove(-1);        
    }else if (event.key === "d"){
        blockMove(+1);
    }else if (event.key === "s"){
        dropBlock();
    }else if (event.key === "q"){
        blockRotation(-1);    
    }else if (event.key === "e"){
        blockRotation(1);    
    }
});

//------------------------------------------------------------------------------------------ Block Colors
const color = [null,"#FF2D00","#FF9300","#51FF00","#00FF93","#0087FF","#4E49A7","#9649A7","#F10B38"];

trackScore();
blockReset();
autoDraw();
}