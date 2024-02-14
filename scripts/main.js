import { interiorOptions } from "./interiorOptions.js"
import { orderButton } from "./orderButton.js"
import { paintOptions } from "./paintOptions.js"
import { technologyOptions } from "./technologyOptions.js"
import { wheelOptions } from "./wheelOptions.js"

const render = async () => {
    const paintHTML = await paintOptions()
    const interiorHTML = await interiorOptions()
    const technologyHTML = await technologyOptions()
    const wheelHTML = await wheelOptions()
    const buttonHTML = await orderButton()
    
    const composedHTML = `
    <h1>Cars 'R Us: Personal Car Builder</h1>

    <article class="choices">
        ${paintHTML}
        ${interiorHTML}
        ${technologyHTML}
        ${wheelHTML}
    </article>

    <article class="order">
        ${buttonHTML}
    </article>

    <article class="customOrders">
    <h2>Custom Car Orders</h2>
    </article>
    `
    const mainHTML = document.querySelector("#container")
    mainHTML.innerHTML = composedHTML
}

render()