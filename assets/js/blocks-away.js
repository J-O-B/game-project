const canvas = document.getElementById('blocks-away');
const context = canvas.getContext("2d");

//devide width by 30 to get 10px, and canvas height by 60 to get the 10px per 1 
context.scale((canvas.width / 30),(canvas.height / 60));

context.fillStyle = "#000";
context.fillRect(0, 0, canvas.width, canvas.height);

const matrix = [
    //Define the blocks with ones and zeros to create solid(1) and empty (0)
    [0,0,0],
    [1,1,1],
    [0,1,0],
];

matrix.forEach((row, y) =>{
    row.forEach((value, x) =>{
        //Value which is not 0 will be colored (by pixel), this is resized in the scale line above
        if (value !== 0){
            context.fillStyle = "#fafafa";
            context.fillRect(x, y, 1, 1);
        }
    });
});