import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  
  constructor(slides) {
    this.slides = slides;
    const elem = createElement(`<div class="carousel"></div>`);  

 let right = createElement(`<div class="carousel__arrow carousel__arrow_right">
   <img src="/assets/images/icons/angle-icon.svg" alt="icon">
 </div>`)
 let left = createElement(`<div class="carousel__arrow carousel__arrow_left">
   <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
 </div>`);
 elem.append(right);
 elem.append(left);
 
    let carouselInner = createElement(`<div class="carousel__inner">`);
  
    for (let slide of slides) {
      let newSlide = createElement(`
      <div class="carousel__slide" data-id="${slide.id}">
             <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
             <div class="carousel__caption">
               <span class="carousel__price">€${slide.price.toFixed()}</span>
               <div class="carousel__title">${slide.name}</div>
               <button type="button" class="carousel__button">
                 <img src="/assets/images/icons/plus-icon.svg" alt="icon">
               </button>
             </div>
             </div>`);
        carouselInner.append(newSlide);    
elem.append(carouselInner)
}

this.elem = elem;
let leftButton = elem.querySelector(".carousel__arrow_left");
let rightButton = elem.querySelector(".carousel__arrow_right");
leftButton.style.display = 'none';
let allSlides = carouselInner.childNodes;
let maxNumber = allSlides.length - 1;
let positionLenta = 0;
let currentSlide = allSlides[positionLenta]

function clickInTheRight (){
  let divInner = elem.querySelector(".carousel__inner");
  let slideWidth = divInner.offsetWidth;
  if(positionLenta<maxNumber){
  leftButton.style.display = ''; 
  positionLenta += 1;
  currentSlide = allSlides[positionLenta];
  }
  if(positionLenta === maxNumber){
    rightButton.style.display = 'none'
  }

 divInner.style.transform = `translateX(${-slideWidth*positionLenta}px)`;
}
rightButton.addEventListener('click', clickInTheRight);

function clickInTheLeft (){
  let divInner = elem.querySelector(".carousel__inner");
  let slideWidth = divInner.offsetWidth;
  rightButton.style.display = '';  
  if(positionLenta===1){
  leftButton.style.display = 'none'
  }
  if(positionLenta>0){ 
  positionLenta -= 1;
  currentSlide = allSlides[positionLenta]
  }
 divInner.style.transform = `translateX(${-slideWidth*positionLenta}px)`;
}
leftButton.addEventListener('click', clickInTheLeft);

function createEvent(){
  let event = new CustomEvent("product-add", {
   detail: currentSlide.getAttribute("data-id"),
    bubbles: true,
    }); 
  elem.dispatchEvent(event)
}
let buttons = elem.querySelectorAll(".carousel__button");
for (let i = 0; i<buttons.length; i++) {
  buttons[i].addEventListener('click', createEvent);
}
}
 }