import { interiorOptions } from "./interiorOptions.js"
import { orderButton } from "./orderButton.js"
import { ordersList } from "./ordersList.js"
import { paintOptions } from "./paintOptions.js"
import { styleOptions } from "./styleOptions.js"
import { technologyOptions } from "./technologyOptions.js"
import { wheelOptions } from "./wheelOptions.js"

const render = async () => {
    const paintHTML = await paintOptions()
    const interiorHTML = await interiorOptions()
    const technologyHTML = await technologyOptions()
    const wheelHTML = await wheelOptions()
    const styleHTML = await styleOptions()
    const buttonHTML = await orderButton()
    const ordersHTML = await ordersList()
    
    const composedHTML = `
    <h1>Cars 'R Us: Personal Car Builder</h1>

    <article id="choices">
        ${paintHTML}
        ${interiorHTML}
        ${technologyHTML}
        ${wheelHTML}
        ${styleHTML}
    </article>

    <article id="orderButton">
        ${buttonHTML}
    </article>

    <article id="customOrders">
        ${ordersHTML}
    </article>
    `
    const mainHTML = document.querySelector("#container")
    mainHTML.innerHTML = composedHTML
}

document.addEventListener("newOrderPlaced", render)

render()