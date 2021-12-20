// cell로 된 class들을 다 가져와서 배열 형식으로 하나씩 꺼내쓸 예정.
let elements = document.getElementsByClassName('cell');
let isO = true;

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function foo () {
        if (isO) {
            elements[i].innerHTML = "O"
            isO = false;
        } else {
            elements[i].innerHTML = "X"
            isO = true;
        }
    })
}
