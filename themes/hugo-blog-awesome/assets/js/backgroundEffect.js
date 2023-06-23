const vsSource = `#version 300 es
in vec4 aVertexPosition;
void main() {
    gl_Position = aVertexPosition;
}
`;

const fsSource = `#version 300 es
precision mediump float;

uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;
uniform float uBlobOffset;
uniform int uNumBlobs;
out vec4 fragColor;

vec2 mouseNow = vec2(0.0, 0.0);
/**
 * Sphere
 * @param {vec3} p Arbitrary point in space
 * @param {vec3} c Center of sphere
 * @param {float} r Radius of sphere
 */
float sphere(vec3 p, vec3 c, float r) {
    return length(p - c) - r;
}

float box_frame(vec3 p, vec3 c, vec3 b, float e )
{
    p = p - c;
    p = abs(p  )-b;
    vec3 q = abs(p+e)-e;

    return min(min(
        length(max(vec3(p.x,q.y,q.z),0.0))+min(max(p.x,max(q.y,q.z)),0.0),
        length(max(vec3(q.x,p.y,q.z),0.0))+min(max(q.x,max(p.y,q.z)),0.0)),
        length(max(vec3(q.x,q.y,p.z),0.0))+min(max(q.x,max(q.y,p.z)),0.0));
}

float opU(float i, float c) {
    return min(i, c);
}

float map(vec3 p) {
    float sp = sphere(p, vec3(0.0, 0.0, 0.0), 1.0 + sin(uTime) * 0.1);
    float b = box_frame(p, vec3(0.0, 0.0, 0.0), vec3(0.5), 0.055);
    float scene = mix(sp, b, sin(uTime * 1.5) * 0.5 + 0.5);

    float t = cos(uTime) * 0.5 + 0.5 * mouseNow.x;
    float t2 = sin(uTime) * 0.5 + 0.5 * mouseNow.y;
    float displacement = sin(3.0 * p.x * t) * sin(7.0 * p.y) * sin(5.0 * p.z * t2) * 0.25;
    scene += displacement;

    for (int i = 0; i < uNumBlobs; i++) {
        float us = sin(uTime + float(i) * cos(uTime * 0.2)) * 1.5 * (1.0 - uBlobOffset);
        float uc = cos(uTime + float(i) * cos(uTime * 0.2)) * 1.5 * (1.0 - uBlobOffset);
        float x = us;
        float y = uc;
        scene = opU(sphere(p, vec3(x, y, 0.0), 0.1), scene);
    }
    return scene;
}

vec3 calculate_normal(in vec3 p)
{
    const vec3 small_step = vec3(0.001, 0.0, 0.0);

    float gradient_x = map(p + small_step.xyy) - map(p - small_step.xyy);
    float gradient_y = map(p + small_step.yxy) - map(p - small_step.yxy);
    float gradient_z = map(p + small_step.yyx) - map(p - small_step.yyx);

    vec3 normal = vec3(gradient_x, gradient_y, gradient_z);

    return normalize(normal);
}

vec3 ray_march(vec3 ro, vec3 rd) {
    float total_distance_traveled = 0.0;
    const int NUMBER_OF_STEPS = 32;
    const float MINIMUM_HIT_DISTANCE = 0.001;
    const float MAXIMUM_TRACE_DISTANCE = 1000.0;

    for (int i = 0; i < NUMBER_OF_STEPS; i++) {
        vec3 p = ro + total_distance_traveled * rd;
        float distance_to_closest_object = map(p);

        if (distance_to_closest_object < MINIMUM_HIT_DISTANCE) {
            vec3 normal = calculate_normal(p);

            vec3 light_position = vec3(mouseNow.x * -2.0, mouseNow.y * 5.0, 3.0);
            vec3 direction_to_light = normalize(p - light_position);
            float d = dot(normal, direction_to_light);
            float diffuse_intensity = max(0.05, d);

            float factor = 3.0;
            diffuse_intensity = ceil(diffuse_intensity * factor) / factor;
            
            // color
            vec3 mc = vec3(1, 0.11, 0.34);
            
            // diffuse_intensity = step(diffuse_intensity, 0.2);

            vec3 diffuse = mc * diffuse_intensity;
            vec3 refl = normalize(reflect(rd, normal));
            vec3 specular = vec3(pow(max(0.0, dot(refl, direction_to_light)), 64.0));
            return (diffuse);
        }

        if (total_distance_traveled > MAXIMUM_TRACE_DISTANCE) {
            break;
        }

        total_distance_traveled += distance_to_closest_object;
    }

    return vec3(0.07, 0.08, 0.09);
}

void main() {
    vec2 p = (2.0*gl_FragCoord.xy-uResolution.xy)/uResolution.y;
    mouseNow = (2.0 * uMouse.xy - uResolution.xy) / uResolution.y;
    
    vec3 cp = vec3(0.0, 0.0, -2.0);
    vec3 ro = cp;
    vec3 rd = vec3(p, 1.0);
    
    vec3 shaded = ray_march(ro, rd);


    shaded = clamp(shaded, 0.0, 1.0);
    fragColor = vec4(shaded, 1.0);
}
`;

var gl = null;
let then = 0.0;
let deltaTime = 0.0;
let programInfo = null;
let positionBuffer = null;
let program = null;
let canvas = null;
let mousePos = [0, 0];
let nBlobs = 0;
let blobsOffset = 0.0;

function _render(now) {
    deltaTime = (now - then) * 0.001;
    then = now;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    render();
    requestAnimationFrame(_render, canvas);
}

function easeOutBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
}

function init() {
    console.log('init');
    const vertexShader = load_shader(gl.VERTEX_SHADER, vsSource);
    const fragShader = load_shader(gl.FRAGMENT_SHADER, fsSource);

    program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.log(
            `Unable to initialize the shader program: ${gl.getProgramInfoLog(
                program
            )}`
        );
    }

    // attributes
    programInfo = {
        program: program,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(program, 'aVertexPosition'),
        },
        uniformLocations: {
            resolution: gl.getUniformLocation(program, 'uResolution'),
            time: gl.getUniformLocation(program, 'uTime'),
            mouse: gl.getUniformLocation(program, 'uMouse'),
            blobOffset: gl.getUniformLocation(program, 'uBlobOffset'),
            nBlobs: gl.getUniformLocation(program, 'uNumBlobs'),
        },
    };

    // buffers
    positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
        1.0, 1.0,
        -1.0, 1.0,
        1.0, -1.0,
        -1.0, -1.0
    ]

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);


}

function getMousePos(c, evt) {
    var rect = c.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end
}

const clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
}

let t = 0.0;
let lastBlobs = 0;
function render() {

    const s = (Math.sin(t) + 1.0) / 2.0;
    const c = (Math.cos(t) + 1.0) / 2.0;
    t += deltaTime;
    gl.clearColor(s, c, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    setPositionAttribute(gl, { position: positionBuffer }, programInfo);

    // console.log(`mousePos: ${mousePos}`);
    // Tell WebGL to use our program when drawing
    gl.useProgram(programInfo.program);

    gl.uniform2f(programInfo.uniformLocations.resolution, gl.canvas.width, gl.canvas.height);
    gl.uniform1f(programInfo.uniformLocations.time, t);
    gl.uniform2f(programInfo.uniformLocations.mouse, mousePos.x, mousePos.y);
    gl.uniform1i(programInfo.uniformLocations.nBlobs, nBlobs);

    if (nBlobs != lastBlobs) {
        blobsOffset = lerp(blobsOffset, 1.0, 0.1);

        if (blobsOffset > 0.90) {
            lastBlobs = nBlobs;
        }
    } else {
        blobsOffset = lerp(blobsOffset, 0.0, 0.05);
    }

    blobsOffset = clamp(blobsOffset, 0.0, 1.0);
    gl.uniform1f(programInfo.uniformLocations.blobOffset, blobsOffset);

    {
        const offset = 0;
        const vertexCount = 4;
        gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
    }
}

function load_shader(type, source) {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.log(
            `An error occurred compiling the shaders: ${gl.getShaderInfoLog(
                shader
            )
            }`
        );
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function setPositionAttribute(gl, buffers, programInfo) {
    const numComponents = 2; // pull out 2 values per iteration
    const type = gl.FLOAT; // the data in the buffer is 32bit floats
    const normalize = false; // don't normalize
    const stride = 0; // how many bytes to get from one set of values to the next
    // 0 = use type and numComponents above
    const offset = 0; // how many bytes inside the buffer to start from
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
}

function addBlobs() {
    nBlobs += 1;
    if (nBlobs > 15) {
        nBlobs = 0;
    }
}

function main() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        return;
    }

    canvas = document.getElementById('bg-canvas');
    gl = canvas.getContext('webgl2', { premultipliedAlpha: false });
    console.log(`Width: ${canvas.width}, Height: ${canvas.height}`);
    if (gl == null) {
        console.log("Could not create WebGL context.");
        return;
    }

    document.addEventListener("mousemove", (event) => {
        mousePos = getMousePos(canvas, event);
    });

    document.addEventListener("mouseup", (event) => {
        addBlobs();
    });
    init();

    requestAnimationFrame(_render);
}

setTimeout(main, 1000);