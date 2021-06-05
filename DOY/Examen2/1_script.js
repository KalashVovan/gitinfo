let cube = {
    id: 'cube',
    width: Math.round(Math.random() * 30 + 20),
    height: Math.round(Math.random() * 30 + 20),
    y: 50,
    x: 50,
    color: 'red',
    trnst: 0.25,
}

let k31 = Math.round(Math.random() * 255);
let k32 = Math.round(Math.random() * 255);
let k33 = Math.round(Math.random() * 255);
cube.color = 'rgb(' + k31 + ',' + k32 + ',' + k33 + ')';

function renderCube() {
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
    document.getElementById(cube.id).style.transition = cube.trnst + 's';
}
renderCube();