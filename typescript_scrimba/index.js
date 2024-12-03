const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
]

const cashInRegister = 100
const nextOrderId = 1
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
 * 4. add the id
 * @param { String } pizzaName 
 * @returns - the new order object
 */
const placeOrder = (pizzaName) => {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  cashInRegister += selectedPizza.price
  const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
  orderQueue.push(newOrder)

  return newOrder
}

/**
 * Finds the correct order in the orderQueue, and marks its status as "completed".
 * @param { Number } orderId 
 * @returns - the found order from the function
 */
const  completeOrder = ( orderId ) =>   {
  const order = orderQueue.find(order => order.id === orderId)
  order.status = "completed"

  return order
}

// Add pizzas
addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

// Create an order
placeOrder("Chicken Bacon Ranch")

completeOrder("1")


// See on console
console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
