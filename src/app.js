/* 
 * JavaScript WebGL learning to make future games fr fr
 * 10/12/2023 -  Sunday - 9:20 AM
*/

/*
 * canvas error handling
*/

const canvas = document.getElementById("window");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export const gl = canvas.getContext("webgl"); if (!gl) {console.log("error: WebGL failed to load");}
const info_text = document.getElementById("info-text");

/* temp */
if (canvas){info_text.innerHTML = `Scene Loaded canvas-w: ${window.innerwidth} canvas-h: ${window.innerheight}`}

/*
 * VertexShader Source
*/
const vsSource = `
   attribute vec4 aVertexPosition;
   uniform mat4 uModelViewMatrix;
   uniform mat4 uProjectionMatrix;
   void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
   }
`;

/*
 * FragmentShader Source
*/
const fsSource = `
   void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
   }
`;

function initShaderProgram(gl, vsSource, fsSource) {
   const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
   const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
   // creating shader program 

   const shaderProgram = gl.createProgram();
   gl.attachShader(shaderProgram, vertexShader);
   gl.attachShader(shaderProgram, fragmentShader);
   gl.linkProgram(shaderProgram);

   // checking weather shader program failed
   if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      info_text.innerHTML = `error: unable to initialize the shader program ${gl.getProgramInfoLog(shaderProgram)}`;
      return null;
   }

   return shaderProgram;
}

function loadShader(gl, type, source) {
   const shader = gl.createShader(type);

   // send source to shader object

   gl.shaderSource(shader, source);

   // compile the shader program

   gl.compileShader(shader);

   // see if it compiled
   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.log(`error: while compiling the shader: ${gl.getShaderInfoLog(shader)}`);
      gl.deleteShader(shader);
      return null;
   }

   return shader;
}

const shaderProgram = initShaderProgram(gl, vsSource, fsSource);


function draw() {
   gl.clearColor(0.0, 0.0, 0.0, 1.0);
   gl.clear(gl.COLOR_BUFFER_BIT);
}

draw();

