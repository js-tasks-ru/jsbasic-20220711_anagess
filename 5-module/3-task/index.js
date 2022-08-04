function initCarousel() {
  let slide = document.querySelector(".carousel__inner")
  right = document.querySelector(".carousel__arrow_right");
  left = document.querySelector(".carousel__arrow_left");
let widthSlide = slide.offsetWidth;
let positionLenta = 0;
left.style.display = 'none';


function clickInTheRight (){
  if(positionLenta<3){
  left.style.display = ''; 
  positionLenta += 1;
  }
  if(positionLenta === 3){
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