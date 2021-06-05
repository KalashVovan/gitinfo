let cube = {
    id: 'cube',
    width: 50,
    height: 50,
    y: 50,
    x: 50,
    color: 'red',
    trnst: 0.25,
    count: 15,
    k: 0,
    pos: 'absolute',
}
let tik = setInterval(() => create(), 1000);

function create() {
    if (cube.k < cube.count) {
        cube.k += 1;
        cube.x += 70;
        cube.width = Math.round(Math.random() * 40 + 20);
        cube.height = Math.round(Math.random() * 40 + 20);
        let k31 = Math.round(Math.random() * 255);
        let k32 = Math.round(Math.random() * 255);
        let k33 = Math.round(Math.random() * 255);
        cube.color = 'rgb(' + k31 + ',' + k32 + ',' + k33 + ')';
        var pipka = document.getElementById('cubes');
        pipka.insertAdjacentHTML('beforeend', '<div id="cube_' + cube.k + '"></div>');
        document.getElementById('cube_' + cube.k).style.width = cube.width + 'px';
        document.getElementById('cube_' + cube.k).style.height = cube.height + 'px';
        document.getElementById('cube_' + cube.k).style.top = cube.y + 'px';
        document.getElementById('cube_' + cube.k).style.left = cube.x + 'px';
        document.getElementById('cube_' + cube.k).style.backgroundColor = cube.color;
        document.getElementById('cube_' + cube.k).style.transition = cube.trnst + 's';
        document.getElementById('cube_' + cube.k).style.position = cube.pos;
    }
}

window.onmousedown = function(event){
    is_active = true;
    let x = event.clientX;
    let y = event.clientY;
    let ck = -1;
    let cx = 50;
    while (ck < cube.count) {
        ck += 1;
        if (y > cube.y && y < cube.y + 60) {
            if (x > cx && x < cx + 70) {
                document.getElementById('cube_' + ck).style.opacity = 0;
            }
        }
        cx += 70;
    }
    
}
window.onmouseup = function(event) {
    is_active = false;
}
