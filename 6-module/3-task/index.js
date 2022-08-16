import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  positionLenta = 0;

  constructor(slides) {
    this.slides = slides;
    this.elem = this.#render(slides);
    const leftButton = this.elem.querySelector(".carousel__arrow_left");
    const rightButton = this.elem.querySelector(".carousel__arrow_right");
    leftButton.style.display = "none";
    rightButton.addEventListener("click", this.#onRightArrowClick);
    leftButton.addEventListener("click", this.#onLeftArrowClick);
    let buttons = this.elem.querySelectorAll(".carousel__button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", this.#onProductAddClick);
    }
  }
  #render(slides) {
    const elem = createElement(`<div class="carousel"></div>`);
    let right =
      createElement(`<div class="carousel__arrow carousel__arrow_right">
   <img src="/assets/images/icons/angle-icon.svg" alt="icon">
 </div>`);
    let left = createElement(`<div class="carousel__arrow carousel__arrow_left">
   <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
 </div>`);
    elem.append(right);
    elem.append(left);
    let carouselInner = createElement(`<div class="carousel__inner">`);
    for (let slide of slides) {
      let newSlide = createElement(`
      <div class="carousel__slide" data-id="${slide.id}">
             <img src="/assets/images/carousel/${
               slide.image
             }" class="carousel__img" alt="slide">
             <div class="carousel__caption">
               <span class="carousel__price">€${slide.price.toFixed()}</span>
               <div class="carousel__title">${slide.name}</div>
               <button type="button" class="carousel__button">
                 <img src="/assets/images/icons/plus-icon.svg" alt="icon">
               </button>
             </div>
             </div>`);
      carouselInner.append(newSlide);
      elem.append(carouselInner);
    }
    return elem;
  }

  #onRightArrowClick = () => {
    const carouselInner = this.elem.querySelector(".carousel__inner");
    let maxNumber = this.elem.querySelectorAll(".carousel__button").length - 1;
    let slideWidth = carouselInner.offsetWidth;
    if (this.positionLenta < maxNumber) {
      this.elem.querySelector(".carousel__arrow_left").style.display = "";
      this.positionLenta += 1;
    }
    if (this.positionLenta === maxNumber) {
      this.elem.querySelector(".carousel__arrow_right").style.display = "none";
    }
    carouselInner.style.transform = `translateX(${
      -slideWidth * this.positionLenta
    }px)`;
  };

  #onLeftArrowClick = () => {
    const carouselInner = this.elem.querySelector(".carousel__inner");
    let slideWidth = carouselInner.offsetWidth;
    this.elem.querySelector(".carousel__arrow_right").style.display = "";
    if (this.positionLenta === 1) {
      this.elem.querySelector(".carousel__arrow_left").style.display = "none";
    }
    if (this.positionLenta > 0) {
      this.positionLenta -= 1;
    }
    carouselInner.style.transform = `translateX(${
      -slideWidth * this.positionLenta
    }px)`;
  };

  #onProductAddClick = () => {
    let currentSlide = this.elem.querySelector(".carousel__inner").childNodes[this.positionLenta];
    console.log(currentSlide)
    let event = new CustomEvent("product-add", {
      detail: currentSlide.getAttribute("data-id"),
      bubbles: true,
    });
    this.elem.dispatchEvent(event);
  };
}
