import { formatMoney } from "../Utils/formatMoney.js"
import { generateId } from "../Utils/generateId.js"

export class Product {
  constructor(name, imgUrl, price, qty) {
    this.id = generateId()
    this.name = name
    this.imgUrl = imgUrl
    this.price = price
    this.qty = qty
  }

  get Template() {
    return `
      <div class="col-6 col-lg-4 py-3">
        <div class="card">
          <img src="${this.imgUrl}" alt="${this.name}" class="card-img">
          <div class="card-body">
            <h3 class="card-title">${this.name}</h3>
            <div class="d-flex justify-content-between">
              <p class="card-text">${formatMoney(this.price)}</p>
              <button class="btn btn-primary" onclick="app.vendingController.buy('${this.id}')" id="${this.id}" disabled>Buy</button>
            </div>
          </div>
        </div>
      </div>`
  }
}