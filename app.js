var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

var score = 0

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

function handleBoxClick(event) {
    if (event.target.dataset.box) {
        score++
        renderBox()
    }
}

function startGame() {
    $start.classList.add('hide')
    $game.style.backgroundColor = '#fff'
    renderBox()
}

function renderBox() {
    $game.innerHTML = ''
    var box = document.createElement('div')

    box.style.height = box.style.width = '50px'
    box.style.backgroundColor = '#000'
    box.style.position = 'absolute'
    box.style.top = '70px'
    box.style.left = '50px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', true)

    $game.insertAdjacentElement('afterbegin', box)
}
