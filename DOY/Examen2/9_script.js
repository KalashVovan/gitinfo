
let cube = {
    id: 'cube',
    width: 50,
    height: 50,
    y: 50,
    x: 50,
    color: 'red',
    trnst: 0.25,
    step: 25,
    k: 0,
    widthM: window.innerWidth,
    heightM: window.innerHeight,
}

let tik = setInterval(() => moving(), 1000);

function moving() {
    cube.k = Math.round(Math.random());
    cube.step = Math.round(Math.random() * 50 + 20);
    if (cube.k === 0) {
        cube.x -= cube.step;
    }
    else {
        cube.x += cube.step;
    }
    renderCube();
}

function renderCube() {
    if (cube.y < 0) {
        cube.y = 0;
    }
    else if (cube.y + cube.height > cube.heightM) {
        cube.y = cube.heightM - cube.height;
    }
    else if (cube.x < 0) {
        cube.x = 0;
    }
    else if (cube.x + cube.width > cube.widthM) {
        cube.x = cube.widthM - cube.width;
    }
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
    document.getElementById(cube.id).style.transition = 'linear ' + cube.trnst + 's';
}
renderCube();