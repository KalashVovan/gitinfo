let tik = setInterval(() => colored(), 1000);
let cube = {
    id: 'cube',
    width: 50,
    height: 50,
    y: 500,
    x: 500,
    color: 0,
    trnst: 0.25,
}

function colored() {
    let k2 = Math.round(Math.random()); 
    if (k2 === 1) {
        cube.width -= 10;
        cube.height -= 10;
        cube.x += 5;
        cube.y += 5;
        let k31 = Math.round(Math.random() * 255);
        let k32 = Math.round(Math.random() * 255);
        let k33 = Math.round(Math.random() * 255);
        cube.color = 'rgb(' + k31 + ',' + k32 + ',' + k33 + ')';
        renderCube();
    }
    else if (k2 === 0) {
        cube.width += 10;
        cube.height += 10;
        cube.x -= 5;
        cube.y -= 5;
        let k31 = Math.round(Math.random() * 255);
        let k32 = Math.round(Math.random() * 255);
        let k33 = Math.round(Math.random() * 255);
        cube.color = 'rgb(' + k31 + ',' + k32 + ',' + k33 + ')';
        renderCube();
    }
}

function renderCube() {
    if (cube.height < 0) {
        cube.height = 40;
        cube.y -= 20;
        cube.width = 40;
        cube.x -= 20;
    }
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
    document.getElementById(cube.id).style.transition = cube.trnst + 's';
}
