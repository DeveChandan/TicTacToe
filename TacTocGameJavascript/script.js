console.log('Welcome to TicTaoc Toe Game')
let music = new Audio('music.mp3')
let gun = new Audio('gun music.mp3')
let Gameover = false
let trun = 'X'
const changeTrun = () => {
    return trun === 'X' ? 'Z' : 'X'
}
const chackWine = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2,],
        [3, 4, 5,] ,
        [6, 7, 8,], 
        [0, 3, 6,] ,
        [1, 4, 7,] ,
        [2, 5, 8,], 
        [0, 4, 8,] ,
        [2, 4, 6,],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText == boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText = 'Won'
            Gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '40vw'
        }
        //document.querySelector('.line').style.width = '20vw'
        //document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate${e[5]}deg)`
    })
}
//Gameing Logic
music.play();
let boxs = document.getElementsByClassName('box')
Array.from(boxs).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = trun
            trun = changeTrun();
            // gun.play();
            chackWine();
            if (!Gameover) {
                document.getElementsByClassName('info')[0].innerText = 'Trun for' + trun;
            }

        }
    })
})

//reset button onclick addEvenLisner
rest.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element => {
        element.innerText = ''
        document.getElementsByTagName('img')[0].style.width = '0vw'

    })
    trun = 'X'
    Gameover = false
    document.getElementsByClassName('info')[0].innerText = 'Trun for' + trun;
})
