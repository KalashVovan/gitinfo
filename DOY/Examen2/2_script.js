
let cube = {
    id: 'cube',
    width: 50,
    height: 50,
    y: 50,
    x: 50,
    color: 'red',
    trnst: 0.25,
}

window.onmousedown = function(event){
    is_active = true;
    let x = event.clientX;
    let y = event.clientY;
    if (x > cube.x && y > cube.y) {
        if (x < cube.x + cube.width && y < cube.y + cube.height) {
            let k31 = Math.round(Math.random() * 255);
            let k32 = Math.round(Math.random() * 255);
            let k33 = Math.round(Math.random() * 255);
            cube.color = 'rgb(' + k31 + ',' + k32 + ',' + k33 + ')';
            let t = 0;
            if (t === 0) {
                //minus
                t = 1;
                let h = Math.round(Math.random() * 30 + 20);
                cube.y += (cube.height - h) / 2;
                cube.height = h;
                let w = Math.round(Math.random() * 30 + 20);
                cube.x += (cube.width - w) / 2;
                cube.width = w;
            }
            else {
                //plus
                t = 0;
                let h = Math.round(Math.random() * 50 + 20);
                cube.y -= (cube.height - h) / 2;
                cube.height = h;
                let w = Math.round(Math.random() * 50 + 20);
                cube.x -= (w - cube.width) / 2;
                cube.width = w;
            }
            renderCube();
        }
    }
}
window.onmouseup = function(event) {
    is_active = false;
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
