export const ordersList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel&_expand=style")
    const orders = await response.json()

    let ordersHTML = `<h2>Custom Car Orders</h2><section id="ordersList">`

    const divStringArray = orders.map(order => {
        const orderCost = (order.paint.price + order.interior.price + order.technology.price + order.wheel.price) * order.style.priceMultiplier
        const formattedOrderCost = orderCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })


        const orderHTML = `<div class="order">${order.paint.color} ${order.style.style} with ${order.wheel.wheel} wheels, ${order.interior.type} interiors, and the ${order.technology.package} for a total cost of ${formattedOrderCost}</div>`

        return orderHTML
    })

    ordersHTML += `${divStringArray.join("")}</section>`

    return ordersHTML
}