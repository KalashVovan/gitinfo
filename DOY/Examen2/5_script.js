let cube = {
    id: 'cube',
    width: 50,
    height: 50,
    y: 50,
    x: 50,
    color: 'red',
    trnst: 0.25,
    count: 10,
    k: 0,
    pos: 'absolute',
}

while (cube.k < cube.count) {
    cube.k += 1;
    cube.x += 70;
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

window.onmousedown = function(event){
    is_active = true;
    let x = event.clientX;
    let y = event.clientY;
    cube.k = -1;
    cube.x = 50;
    while (cube.k < cube.count) {
        cube.k += 1;
        if (y > cube.y && y < cube.y + cube.height) {
            if (x > cube.x && x < cube.x + cube.width) {
                document.getElementById('cube_' + cube.k).style.opacity = 0;
                console.log(cube.k);
            }
        }
        cube.x += 70;
    }
    
}
window.onmouseup = function(event) {
    is_active = false;
}
