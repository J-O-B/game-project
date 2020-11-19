
const canvas = document.getElementById('blocks-away');
const context = canvas.getContext("2d");

//width is 300 so / 30 to get 10px, height is 600 so / 60 to get 10px;
context.scale((canvas.width / 30),(canvas.height / 60));


//Create the blocks in strings, 1s are solid 0 is transparent, easier to see in table sort of view.
const grid = [[1,1,1],
              [0,1,0],
              [0,1,0]];

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
    drawBlocks(block.grid, block.position);
}

//Define the peices, offset needed to move each block (array) 
function drawBlocks(grid, offset){
    grid.forEach((row, y) =>{
        row.forEach((value, x) =>{
            //Value which is not 0 will be colored (by pixel), this is resized in the scale line above
            if (value !== 0){
                context.fillStyle = "#fafafa";
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

//merge function to blend into arrays
function merge(board, block){

}

// Fall rate set at 1000 will drop 1 line every second (1000ms)
let fallCount = 0;
let fallRate = 500;

//function for down key
function dropBlock(){
    block.position.y++;
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
const board = makeBlock(30,60);

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