
export default class ProductCard {
  constructor(product) {
  let div = document.createElement("div");
  div.classList.add("card");
  
  let result = `<div class="card__top">
  <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
  <span class="card__price">€${product.price.toFixed(2)}</span>
</div>
<div class="card__body">
  <div class="card__title">${product.name}</div>
  <button id = "${product.id}" type="button" class="card__button">
    <img src="/assets/images/icons/plus-icon.svg" alt="icon">
  </button>
</div>`;
div.innerHTML = result;
this.elem = div;

function createEvent(){
let event = new CustomEvent("product-add", {
  detail: product.id,
  bubbles: true,
  }); 
div.dispatchEvent(event)}
let button = div.querySelector("#"+product.id);
button.addEventListener('click', createEvent);
}
}