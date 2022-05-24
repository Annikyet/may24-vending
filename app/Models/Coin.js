export class Coin {
  constructor(value) {
    this.value = value
  }

  get Template() {
    return `<button class="btn btn-primary" onclick="app.vendingController.addCoin(${this.value})">${this.value}¢</button>`
  }
}