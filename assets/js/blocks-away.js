
const canvas = document.getElementById('blocks-away');
const context = canvas.getContext("2d");

//width is half height so this has to be accounted for with a double value.
context.scale(20,6);



function shapes(shape){
    if (shape === "A"){            //A = Large T shape
        return [[1,1,1],        //B = Smaller T shape
                [0,1,0],        //C = Forwards L shape
                [0,1,0]];       //D = Backwards L shape
    }else if (shape === "B"){      //E = Z shape
        return [[0,0,0],        //F = S Shape
                [1,1,1],        //G = Line 
                [0,1,0]];       //H = Cube
    }else if (shape === "C"){
        return [[1,0,0],
                [1,0,0],
                [1,1,1]];
    }else if (shape === "D"){
        return [[0,0,1],
                [0,0,1],
                [1,1,1]];
    }else if (shape === "E"){
        return [[1,1,0],
                [0,1,0],
                [0,1,1]];
    }else if (shape === "F"){
        return [[0,1,1],
                [0,1,0],
                [1,1,0]];
    }else if (shape === "G"){
        return [[0,1,0],
                [0,1,0],
                [0,1,0]];
    }else if (shape === "H"){
        return [[1,1,1],
                [1,1,1],
                [1,1,1]];
    }
}

//Define the peices, offset needed to move each block (array) 
function drawBlocks(grid, offset){
    grid.forEach((row, y) =>{
        row.forEach((value, x) =>{
            //Value which is not 0 will be colored (by pixel), this is resized in the scale line above
            if (value !== 0){
                context.fillStyle = "#ffa500";
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

//general draw function, this will clear canvas each time a new block is drawn
function draw(){
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawBlocks(board, { x: 0, y: 0 });
    drawBlocks(block.grid, block.position);
}

//iterate over the arrays of the board and the block
//this will add 1's in the table of 60 by 30.
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
        blockReset();
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

//Sets the bottom of the screen where arrays will land;
//To count for the full board, we can have 30 1's to make a complete line,
//And 60 as height (600px / 10px)
const board = makeBlock(15,25);

//set a position for player, keys can be used later
// x moves block horizontal, y moves block vertical
const block = {
    position: {x: 5, y: 5},
    grid: shapes('C'),
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


autoDraw();