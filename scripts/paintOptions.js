import { setPaintId } from "./transientState.js"

export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    let paintsHTML = `<section class="optionCard"><h2>Paints</h2><select id="paint">`

    paintsHTML += `<option value="0">Please Select a Paint Color</option>`

    const optionStringArray = paints.map(paint => {return `<option value="${paint.id}">${paint.color}</option>`})

    paintsHTML += `${optionStringArray.join("")}</select></section>`

    return paintsHTML
}

const changeHandler = (changeEvent) => {
    const eventTarget = changeEvent.target
    const eventTargetValue = parseInt(eventTarget.value)

    if (eventTarget.id === "paint") {
        setPaintId(eventTargetValue)
    }
}

document.addEventListener("change", changeHandler)