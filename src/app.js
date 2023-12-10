/* 
 * JavaScript WebGL learning to make future games fr fr
 * 10/12/2023 -  Sunday - 9:20 AM
*/

/*
 * canvas error handling
*/

const canvas = document.getElementById("window");
const gl = canvas.getContext("webgl"); if (!gl) {console.log("error: WebGL failed to load");}
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
   gl.clearColor(0.0, 0.0, 0.0, 1.0);
   gl.clear(gl.COLOR_BUFFER_BIT);
}

draw();

