import { paintOptions } from "./paintOptions.js"

const render = async () => {
    const paintHTML = await paintOptions()
    
    const composedHTML = `
    <h1>Cars 'R Us: Personal Car Builder</h1>

    <article class="choices">
        ${paintHTML}
    </article>

    <article class="order">
    </article>

    <article class="customOrders">
    <h2>Custom Car Orders</h2>
    </article>
    `
    const mainHTML = document.querySelector("#container")
    mainHTML.innerHTML = composedHTML
}

render()