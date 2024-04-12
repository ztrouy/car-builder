import { completeOrder } from "./transientState.js"

export const ordersList = async () => {
    const response = await fetch("https://localhost:7096/orders")
    const orders = await response.json()

    let ordersHTML = `<h2>Custom Car Orders</h2><section id="ordersList">`

    const divStringArray = orders.map(order => {
        const formattedOrderCost = order.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })


        let orderHTML = `<div class="order">${order.paintColor.color} ${order.style.type} with ${order.wheels.style} wheels, ${order.interior.material} interiors, and the ${order.technology.package} for a total cost of ${formattedOrderCost}`

        orderHTML += `<input type="button" name="complete" id="${order.id}" value="Complete"/></div>`

        return orderHTML
    })

    ordersHTML += `${divStringArray.join("")}</section>`

    return ordersHTML
}

document.addEventListener("click", event => {
    const {name, id} = event.target
    if (name === "complete") {
        completeOrder(id)
    }
})