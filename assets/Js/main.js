/* 

*/

/* strumenti: 

*/
//creiamo un array con i link delle immagini 
const carosello = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp"
]
// 

const imgNext = document.querySelector('.next')
const imgPrev = document.querySelector('.prev')

//contatore 
let activeImage = 0

const caroselloElement = document.querySelector('.carosello')

for (let i = 0; i < carosello.length; i++) {
    const imgSrc = carosello[i]
    let classActive = i === activeImage ? 'active' : ''
    const imgElement = `<img class="img-fluid ${classActive}" src="${imgSrc}" alt="">`
    console.log(imgElement)
    caroselloElement.insertAdjacentHTML('beforeend', imgElement);
}

// select all slides
const slideImagesElements = document.querySelectorAll('.card > .carosello')  


// listen for clicks on next button
const nextEl = document.querySelector('.next')
nextEl.addEventListener('click', function () {
  console.log('cliccato next');
  console.log(slideImagesElements); //array[index]
  // select the current slide
  const currentSlide = slideImagesElements[activeImage]
  console.log(currentSlide);
  // remove the active class from the active image
  currentSlide.classList.remove('active')
  // incremente the value of the activeImage variable
  activeImage++ // increment the value of activeImage of 1 every time we click on the next button
  // select the next slide
  console.log(activeImage);
  const nextImage = slideImagesElements[activeImage]
  // add the active class
  console.log(nextImage);
  nextImage.classList.add('active')
  
})
// listen for clicks on prev button
const prevEl = document.querySelector('.prev')
prevEl.addEventListener('click', function () {
  console.log('cliccato prev')
})