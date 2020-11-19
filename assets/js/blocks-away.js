
const canvas = document.getElementById('blocks-away');
const context = canvas.getContext("2d");

//width is half height so this has to be accounted for with a double value.
context.scale(10,5);


//Create the blocks in strings, 1s are solid 0 is transparent, easier to see in table sort of view.
const grid = [[1,1,1],
              [0,1,0],
              [0,1,0]];


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

//Define the peices, offset needed to move each block (array) 
function drawBlocks(grid, offset){
    grid.forEach((row, y) =>{
        row.forEach((value, x) =>{
            //Value which is not 0 will be colored (by pixel), this is resized in the scale line above
            if (value !== 0){
                context.fillStyle = "#fcba03";
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
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
        block.position.y = 0;
    }
    fallCount=0;
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
const board = makeBlock(30,30);

//set a position for player, keys can be used later
// x moves block horizontal, y moves block vertical
const block = {
    position: {x: 5, y: 5},
    grid: grid,
}

//Position can be changed in console, below is to listen for keys
document.addEventListener("keydown", event =>{
    console.log(event);
    if (event.key === "ArrowLeft"){
        block.position.x--;
    }else if (event.key === "ArrowRight"){
        block.position.x++;
    }else if (event.key === "ArrowDown"){
        block.position.y++;
        //reset to 0 so down only drops one line
        fallCount=0;
    }
})


autoDraw();