const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
]

const cashInRegister = 100
const orderQueue = []


/**
 * A utility function "addNewPizza" that takes a pizza object and adds it to the menu.
 * @param {Object} pizzaObj  - { name: String, price: Number}
 */
const addNewPizza = (pizzaObj) => {
  menu.push(pizzaObj)
}

/**
 * Takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * @param { String } pizzaName 
 * @returns - the new order object
 */
const placeOrder = (pizzaName) => {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  cashInRegister += selectedPizza.price
  const newOrder = { pizza: selectedPizza, status: "ordered" }
  orderQueue.push(newOrder)

  return newOrder
}