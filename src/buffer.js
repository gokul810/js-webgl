/*
 * holds the buffer 
*/

function initPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    /* 
     * more info about HTML5 canvas cordinates can be found here
     * https://diveinto.html5doctor.com/canvas.html
    */

    const position = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

    gl.bufferData(gl.BUFFER_ARRAY, new Float32Array(position), gl.STATIC_DRAW);

    return positionBuffer;
}

function initBuffers(gl) {
    const positionBuffer = initPositionBuffer(gl);

    return {
        position: positionBuffer,
    };

}

export {initBuffers};