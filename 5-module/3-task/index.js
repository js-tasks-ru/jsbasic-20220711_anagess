function initCarousel() {
  let slide = document.querySelector(".carousel__inner")
  right = document.querySelector(".carousel__arrow_right");
  left = document.querySelector(".carousel__arrow_left");
let widthSlide = slide.offsetWidth;
let positionLenta = 0;
left.style.display = 'none';
let allSlides = document.querySelectorAll(".carousel__slide");
let maxNumber= allSlides.length - 1;
console.log(maxNumber)

function clickInTheRight (){
  if(positionLenta<maxNumber){
  left.style.display = ''; 
  positionLenta += 1;
  }
  if(positionLenta === maxNumber){
    right.style.display = 'none'};
  position = -widthSlide*positionLenta;
 slide.style.transform = `translateX(${position}px)`;
}
right.addEventListener('click', clickInTheRight);

function clickInTheLeft (){
  right.style.display = '';  
  if(positionLenta===1){
  left.style.display = 'none'
  }
  if(positionLenta>0){ 
  positionLenta -= 1;
  }
  position = -widthSlide*positionLenta
 slide.style.transform = `translateX(${position}px)`
}
left.addEventListener('click', clickInTheLeft);
}