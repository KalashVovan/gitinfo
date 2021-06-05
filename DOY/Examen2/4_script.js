let cube = {
    id: 'cube',
    width: 50,
    height: 50,
    y: 50,
    x: 50,
    color: 'red',
    trnst: 0.25,
}
let cube1 = {
    id: 'cube1',
    width: 50,
    height: 50,
    y: 0,
    x: 0,
    color: 0,
    trnst: 0.25,
    here: 0,
    pos: 'absolute',
}

window.onmousedown = function(event){
    is_active = true;
    let x = event.clientX;
    let y = event.clientY;
    if (x > cube.x && y > cube.y) {
        if (x < cube.x + cube.width && y < cube.y + cube.height) {
            cube1.here = 1;
            let k31 = Math.round(Math.random() * 255);
            let k32 = Math.round(Math.random() * 255);
            let k33 = Math.round(Math.random() * 255);
            let k41 = Math.round(Math.random() * 80 + 20);
            let k42 = Math.round(Math.random() * 80 + 20);
            cube1.color = 'rgb(' + k31 + ',' + k32 + ',' + k33 + ')';
            cube1.height = k41;
            cube1.width = k42;
            cube1.x = cube.x * 3;
            cube1.y = cube.y;
            let div = document.createElement('div');
            div.id = cube.id + 1;
            document.body.append(div);
            renderCube1();
        }
    }
    if (x > cube.x * 3 && x < cube.x * 3 + cube1.width) {
        if (y > cube.y && y < cube.y + cube1.height) {
            let k51 = Math.round(Math.random() * 255);
            let k52 = Math.round(Math.random() * 255);
            let k53 = Math.round(Math.random() * 255);
            let k61 = Math.round(Math.random() * 80 + 20);
            let k62 = Math.round(Math.random() * 80 + 20);
            cube.color = 'rgb(' + k51 + ',' + k52 + ',' + k53 + ')';
            cube.height = k61;
            cube.width = k62;
            renderCube();
        }
    }
}

window.onmouseup = function(event) {
    is_active = false;
}

function renderCube1() {
    document.getElementById(cube1.id).style.position = cube1.pos;
    document.getElementById(cube1.id).style.transition = cube1.trnst + 's';
    document.getElementById(cube1.id).style.width = cube1.width + 'px';
    document.getElementById(cube1.id).style.height = cube1.height + 'px';
    document.getElementById(cube1.id).style.top = cube1.y + 'px';
    document.getElementById(cube1.id).style.left = cube1.x + 'px';
    document.getElementById(cube1.id).style.backgroundColor = cube1.color;
}
function renderCube() {
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
    document.getElementById(cube.id).style.transition = cube.trnst + 's';
}
renderCube();