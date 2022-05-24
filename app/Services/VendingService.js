import { ProxyState } from "../AppState.js"

class VendingService {
  constructor() {

  }

  addCoin(value) {
    ProxyState.money += value
  }

  buy(id) {
    let product = ProxyState.products.find(product => product.id === id)
    if (product.qty > 0 && product.price <= ProxyState.money) {
      ProxyState.money -= product.price
      product.qty--
    }
  }
}

export const vendingService = new VendingService()