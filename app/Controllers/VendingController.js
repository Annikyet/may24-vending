import { vendingService } from "../Services/VendingService.js"
import { ProxyState } from "../AppState.js"
import { formatMoney } from "../Utils/formatMoney.js"

function _drawProducts() {
  let html = ``
  for (let i = 0; i < ProxyState.products.length; i++) {
    html += ProxyState.products[i].Template
  }
  document.getElementById('product-cards').innerHTML = html
}

function _drawCoins() {
  let html = ``
  for (let i = 0; i < ProxyState.coins.length; i++) {
    html += ProxyState.coins[i].Template
  }
  document.getElementById('add-coins').innerHTML = html
}

function _drawMoney() {
  document.getElementById('money').innerText = formatMoney(ProxyState.money)
}

function _updateAvailable() {
  for (let i = 0; i < ProxyState.products.length; i++) {
    document.getElementById(ProxyState.products[i].id).disabled = ProxyState.money < ProxyState.products[i].price || ProxyState.products[i].qty <= 0
  }
}

function _updateMoney() {
  _drawMoney()
  _updateAvailable()
}

export class VendingController {
  constructor() {
    _drawProducts()
    _drawCoins()
    _drawMoney()
    ProxyState.on('money', _updateMoney)
  }

  addCoin(value) {
    vendingService.addCoin(value)
  }

  buy(id) {
    vendingService.buy(id)
  }
}