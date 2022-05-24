import { formatMoney } from "../Utils/formatMoney.js"

export class Coin {
  constructor(value) {
    this.value = value
  }

  get Template() {
    return `
      <div class="col-4 px-1">
        <button class="btn btn-primary w-100" onclick="app.vendingController.addCoin(${this.value})">
          ${formatMoney(this.value)}
        </button>
      </div>`
  }
}