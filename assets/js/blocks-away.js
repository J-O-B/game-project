//game starts from here.
const canvas = document.getElementById('blocks-away');
const context = canvas.getContext("2d");

//width is half height so this has to be accounted for with a double value.
context.scale(20,6);

function shapes(shape){
    if (shape === "A") {            //A = Large T shape
        return [[1,1,1],            //B = Smaller T shape
                [0,1,0],         //C = Forwards L shape
                [0,1,0]];       //D = Backwards L shape
    }else if (shape === "B"){      //E = Z shape
        return [[0,0,0],        //F = S Shape
                [2,2,2],        //G = Line 
                [0,2,0]];       //H = Cube
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

//Define the peices, offset needed to move each block (array) 
function drawBlocks(grid, offset){
    grid.forEach((row, y) =>{
        row.forEach((value, x) =>{
            //Value which is not 0 will be colored (by pixel), this is resized in the scale line above
            if (value !== 0){
                context.fillStyle = color[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}


//this will check to see if a 1 lands ontop of another 1 
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

function makeBlock(width,height){
    const newBlock = [];
    //check here
    while (height--){
        newBlock.push(new Array(width).fill(0));
    }
    return newBlock;
};

//General function which can draw for us.
function draw(){
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawBlocks(board, { x: 0, y: 0 });
    drawBlocks(block.grid, block.position);
}

//iterate over the arrays of the board and the block
//this will add values to the string, where 0 is the 'not solid'
function merge(board, block){
    block.grid.forEach((row, y) =>{
        row.forEach((value, x) =>{
            if (value !== 0){
                board[y+block.position.y][x+block.position.x] = value;
            }
        });
    });
}

// Fall rate set at 1000 will drop 1 line every second (1000ms)
let fallCount = 0;
let fallRate = 500;

//function to drop the block (array) one column, we also want to check
//a 1 will land ontop of another 1 and then stop moving.
function dropBlock(){
    block.position.y++;
    //check for collision (1 landing ontop of another 1) or the edge of 
    //canvas, then reset position to top.
    if (stack(board, block)){
        block.position.y--;
        merge(board, block);
        //reset the board when full
        blockReset();
        //remove line when full
        clearTheLine();
        //add the score to scoreboard.
        trackScore();
    }
    fallCount=0;
}

//This will define the left and right movement to keep the block on the 
//canvas
function blockMove(direction){
    block.position.x += direction;
    if (stack(board, block)){
        block.position.x -= direction;
    }
}

//Randomize the shape (array) that appears using Math random
function blockReset(){
    const shape = "ABCDEFGH";
    block.grid = shapes(shape[shape.length * Math.random() | 0]);
    block.position.y = 0;
    block.position.x = (board[0].length / 2 | 0) - (block.grid[0].length / 2 | 0);
    if (stack(board, block)){
        board.forEach(row => row.fill(0));
        
        //find out how to save the score value to memory!
        player.score = 0;

        //and play a sound
        $('#site-audio').each(function(){
        this.pause(); // Start playing
        });
        $('#you-lose').each(function(){
        this.play(); // Start playing
        });
        document.getElementById("you-lose").addEventListener("ended", function() {
        $('#site-audio').each(function(){
        this.play(); // Start playing
        });
        });
        trackScore();
        //now go to game over..
    }
}

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

//In keeping with Tetris style, to "rotate" an array, i can use the reverse
//and transpose methods which javascript can perform.
function rotation(grid, direction){
    for (let y= 0; y < grid.length; ++y){
        for (let x= 0; x < y; ++x){
            //allow the flip
            [grid[x][y],grid[y][x]] = [grid[y][x],grid[x][y]];
        }
    }
    //if the direction is positive then we want a specific outcome
    if (direction > 0){
        grid.forEach(row => row.reverse());
    }else{
        grid.reverse();
    }
}

//update the blocks with request animation frames, can "paste" new blocks 
//Time function is required to make blocks fall, I can now use the time 
//as a way to change the speed of the game.
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

//The canvas or frame will be called board.
const board = makeBlock(15,25);

//Create a player so we can track the score
const player = {
    score:0,
};

function trackScore() {
    document.getElementById('player-score').innerText = `Your Score: ${player.score}`;
}

//set a position for player, keys can be used later
// x moves block horizontal, y moves block vertical
const block = {
    position: {x: 0, y: 0},
    grid: null,
}

//The loop that monitors for a full row, so we can then delete this row
//from the board, we can also count this for a score.
function clearTheLine(){
    let lineCounter = 1;
    checkLine: for (let y = board.length - 1; y > 0; --y){
        for (let x = 0; x < board[y].length; ++x){
            //check for a 0 in the row (not full)
            if (board[y][x] === 0){
                continue checkLine; 
            }
        }
        //when we find an empty line, we can copy it and return it to 
        //the top of the board.
        const line = board.splice(y,1)[0].fill(0);
        board.unshift(line);
        ++y;
        
        //Play sound on line break
        $('#line-break').each(function(){
        this.play(); // Start playing
        });

        player.score += lineCounter * 10;
        lineCounter *= 2;
    }
}



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

//Colors for blocks
const color = [null,"#FF2D00","#FF9300","#51FF00","#00FF93","#0087FF","#4E49A7","#9649A7","#F10B38"];

trackScore();
blockReset();
autoDraw();