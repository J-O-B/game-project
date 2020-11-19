
const canvas = document.getElementById('blocks-away');
const context = canvas.getContext("2d");

//Scale the blocks using the scale function. This will enlarge blocks from 1px to 10px per "1" in string
//devide by one tenth of the dimensions to allow for possible scaling (look into this part!!!)
context.scale((canvas.width / 30),(canvas.height / 60));


//Create the blocks in strings, 1s are solid 0 is transparent
const grid = [[1,1,1],
              [0,1,0],
              [0,1,0],
        ];

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
                context.fillRect(x + offset.x, 
                                 y + offset.y, 1, 1);
            }
        });
    });
}

// Fall rate set at 1000 will drop 1 line every second (1000ms)
let fallCount = 0;
let fallRate = 500;

//update the blocks with request animation frames, can "paste" new blocks 
//Time function is required to make blocks fall, I can now use the time 
//as a way to change the speed of the game.
let firstLoggedTime = 0;

function autoDraw(time = 0){
    const gameTime = time - firstLoggedTime;
    firstLoggedTime = time;
    
    fallCount += gameTime;
    if (fallCount > fallRate){
        block.position.y++;
        fallCount = 0;
    }

    draw();
    requestAnimationFrame(autoDraw)
}

//set a position for player, keys can be used later
// x moves block horizontal, y moves block vertical
const block = {
    position: {x: 5, y: 5},
    grid: grid,
}

autoDraw();