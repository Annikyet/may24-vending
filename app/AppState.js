import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Product } from "./Models/Product.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Product.js').Product[]} */
  products = [
    new Product('car', 'https://thiscatdoesnotexist.com', 123, 3),
    new Product('car', 'https://thiscatdoesnotexist.com', 100, 3),
    new Product('car', 'https://thiscatdoesnotexist.com', 100, 3),
    new Product('car', 'https://thiscatdoesnotexist.com', 100, 3),
    new Product('car', 'https://thiscatdoesnotexist.com', 100, 3),
    new Product('car', 'https://thiscatdoesnotexist.com', 100, 3),
    new Product('car', 'https://thiscatdoesnotexist.com', 100, 3),
    new Product('car', 'https://thiscatdoesnotexist.com', 100, 3),
    new Product('car', 'https://thiscatdoesnotexist.com', 100, 3),
    new Product('car', 'https://thiscatdoesnotexist.com', 100, 3),
    new Product('car', 'https://thiscatdoesnotexist.com', 100, 3),
    new Product('car', 'https://thiscatdoesnotexist.com', 100, 3)
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
