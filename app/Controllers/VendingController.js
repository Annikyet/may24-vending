import { vendingService } from "../Services/VendingService.js"
import { ProxyState } from "../AppState.js"

function _drawProducts() {
  let html = ``
  for (let i = 0; i < ProxyState.products.length; i++) {
    html += ProxyState.products[i].Template
  }
  document.getElementById('product-cards').innerHTML = html
}

export class VendingController {
  constructor() {
    _drawProducts()
  }
}