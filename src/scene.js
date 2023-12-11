/* 
 * scene building
*/

function setPositionAttribute(gl, buffers,  programInfo){
    const numComponents = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;

    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset,
    );

    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    
}


function drawScene(gl, programInfo, buffers) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // clears the entire screen to black (r, g, b, a);
    gl.clearDepth(1.0); // clear everything
    gl.enable(gl.DEPTH_TEST); // depth testing
    gl.depthFunc(gl.LEQUAL)
    
    /*
     * clearing the screen before drawing things on it
    */

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const fieldOfview = 48 * (Math.PI) / 180
    const aspect = gl.clientWidth / gl.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const mat4 = glMatrix.mat4;
    const projectionMatrix = mat4.create();

    mat4.perspective(projectionMatrix, fieldOfview, aspect, zNear, zFar);

    const modelViewMatrix = mat4.create();
     // something is wrong with this line could'nt figure it out

    mat4.translate(
        modelViewMatrix,
        modelViewMatrix,
        [-0.0, 0.0, -6.0],
    );

    gl.useProgram(programInfo.program);
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        projectionMatrix,
    );

    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix,
    );

    setPositionAttribute(gl, buffers, programInfo);

    {
        const offset = 0;
        const vertexCount = 4;
        gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
    }
}

export { drawScene };