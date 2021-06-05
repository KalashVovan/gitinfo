document.onkeydown = checkButton;

let cube = {
    id: 'cube',
    width: 50,
    height: 50,
    y: 50,
    x: 50,
    color: 'red',
    trnst: 0.25,
    step: 25,
    widthM: window.innerWidth,
    heightM: window.innerHeight,
}

function checkButton(event) {
    if (event.keyCode === 37) {
        console.log("ArrowLeft");
        if (cube.x - cube.step < 0) {
            cube.x = 0;
        }
        else {cube.x -= cube.step;}
        renderCube(cube);
    }
    if (event.keyCode === 39) {
        console.log("ArrowRight");
        if (cube.x + cube.width + cube.step > cube.widthM) {
            cube.x = cube.widthM - cube.width;
        }
        else {cube.x += cube.step;}
        renderCube(cube);
    }
    if (event.keyCode === 38) {
        console.log("ArrowUp");
        if (cube.y - cube.step < 0) {
            cube.y = 0;
        }
        else {cube.y -=cube.step;}
        renderCube(cube);
    }
    if (event.keyCode === 40) {
        console.log("ArrowDown");
        if (cube.y + cube.height + cube.step > cube.heightM) {
            cube.y = cube.heightM - cube.height;
        }
        else {cube.y += cube.step;}
        renderCube(cube);
    }
}

function renderCube() {
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
    document.getElementById(cube.id).style.transition = 'linear ' + cube.trnst + 's';
}
renderCube();