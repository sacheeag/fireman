
const canvas = document.getElementById('gameCanvas');
if (!canvas) {
    console.error('Canvas element not found');
    
}

let ctx = canvas.getContext('2d');
if (!ctx) {
    console.error('Canvas 2D context not found');
    
}


    const maze =[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1],
    [1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1],
    [1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1],
    [1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1],
    [1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1],
    [1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1],
    [1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1],
    [1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1],
    [1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1],
    [1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1],
    [1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
    [1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],
    [1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

    const wall=new Image();
    wall.src='wall.png';
    if (!wall) {
        console.error('Canvas 2D context not found');
        
    }

    const empty=new Image();
    empty.src='empty.png';
    if (!empty) {
        console.error('Canvas 2D context not found');
        
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
    }
    resizeCanvas();

    



    function draw(ctx){
        tilesize= Math.min(canvas.width / maze[0].length, canvas.height / maze.length);
        ctx= canvas.getContext('2d');
        if (!ctx) {
            console.error('Canvas 2D context not found');
            
        }

        wall.onload = () => {
            empty.onload = () => {
                
                for (let row=0;row<maze.length;row++) {
                    for (let column=0;column<maze[row].length; column++) {
                        const img= maze[row][column] ===1 ? wall : empty;
                        ctx.drawImage(img ,column*tilesize, row*tilesize, tilesize,tilesize);
                    }
                }
            };

        };
    }
    window.addEventListener('resize', () => {
        resizeCanvas();
        draw();
    });
    
    // Initial setup
    resizeCanvas();
    draw();
    
