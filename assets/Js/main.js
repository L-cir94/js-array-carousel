/* 

*/

/* strumenti: 

*/
//creiamo un array con i link delle immagini 
const carosello = [
    '"./assets/img/01.webp"',
    '"./assets/img/02.webp"',
    '"./assets/img/03.webp"',
    '"./assets/img/04.webp"',
    '"./assets/img/05.webp"'
    ]
// 
const containerImg = document.querySelector('.carosello')
const imgNext = document-querySelector('.next')
const imgPrev = document-querySelector('.prev')

//contatore 
let activeImage = 0

const caroselloElement = document.querySelector('.carosello')

for (let i = 0; i < carosello.length; i++){
    const imgSrc = carosello[i]

}
