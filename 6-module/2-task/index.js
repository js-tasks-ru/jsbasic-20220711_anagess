import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.elem = this.#render(product);
    const button = this.elem.querySelector("#" + product.id);
    this.id = button.getAttribute("id");
    button.addEventListener("click", this.#onProductAddClick);
  }
  #render(product) {
    const element = createElement(`<div class="card">`);
    const cardTop = createElement(`<div class="card__top">
  <img src="/assets/images/products/${
    product.image
  }" class="card__image" alt="product">
  <span class="card__price">€${product.price.toFixed(2)}</span>
</div>`);
    const cardBody = createElement(`
<div class="card__body">
  <div class="card__title">${product.name}</div>
  <button id = "${product.id}" type="button" class="card__button">
    <img src="/assets/images/icons/plus-icon.svg" alt="icon">
  </button>
</div>`);
    element.append(cardTop);
    element.append(cardBody);
    return element;
  }
  #onProductAddClick = () => {
    const event = new CustomEvent("product-add", {
      detail: this.id,
      bubbles: true,
    });
    document.body.querySelector(".card").dispatchEvent(event);
  };
}
