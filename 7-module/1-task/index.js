import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.#render(categories);
    const leftButton = this.elem.querySelector(".ribbon__arrow_left");
    const rightButton = this.elem.querySelector(".ribbon__arrow_right");
    rightButton.classList.add(".ribbon__arrow_visible");
    rightButton.addEventListener("click", this.#onRightClick);
    leftButton.addEventListener("click", this.#onLeftClick);
    const ribbonInner = this.elem.querySelector(".ribbon__inner");
    ribbonInner.addEventListener("click", this.#onHrefClick);
    ribbonInner.addEventListener("scroll", this.#hideButtons);
  }
  #render() {
    const elem = createElement(`<div class="ribbon">`);
    let buttonLeft =
      createElement(`<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`);
    let buttonRight =
      createElement(`<button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`);
    let ribbonInner = createElement(`   <nav class="ribbon__inner">
      <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
      <a href="#" class="ribbon__item" data-id="salads">Salads</a>
      <a href="#" class="ribbon__item" data-id="soups">Soups</a>
      <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
      <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
      <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
      <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
      <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
      <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
    </nav>`);
    elem.append(buttonLeft);
    elem.append(ribbonInner);
    elem.append(buttonRight);
    return elem;
  }
  #onRightClick = () => {
    this.elem
      .querySelector(".ribbon__arrow_left")
      .classList.add("ribbon__arrow_visible");
    const ribbonInner = this.elem.querySelector(".ribbon__inner");
    ribbonInner.scrollBy(350, 0);
  };
  #onLeftClick = () => {
    this.elem
      .querySelector(".ribbon__arrow_right")
      .classList.add("ribbon__arrow_visible");
    const ribbonInner = this.elem.querySelector(".ribbon__inner");
    ribbonInner.scrollBy(-350, 0);
  };
  #onHrefClick = (e) => {
    if (e.target.nodeName === "A") {
      e.preventDefault();
      let event = new CustomEvent("ribbon-select", {
        detail: e.target.getAttribute("data-id"),
        bubbles: true,
      });
      this.elem.dispatchEvent(event);
      if (e.target) {
        this.elem
          .querySelectorAll(".ribbon__item")
          .forEach((elm) => elm.classList.remove("ribbon__item_active"));
        e.target.classList.add("ribbon__item_active");
      }
    }
  };
  #hideButtons = () => {
    const leftButton = this.elem.querySelector(".ribbon__arrow_left");
    const rightButton = this.elem.querySelector(".ribbon__arrow_right");
    const ribbonInner = this.elem.querySelector(".ribbon__inner");
    let scrollWidth = ribbonInner.scrollWidth;
    let scrollLeft = ribbonInner.scrollLeft;
    let clientWidth = ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
    if (scrollRight < 1) {
      rightButton.classList.remove("ribbon__arrow_visible");
    }
    if (scrollLeft === 0) {
      leftButton.classList.remove("ribbon__arrow_visible");
    }
  };
}
