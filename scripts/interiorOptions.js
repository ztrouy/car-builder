import { setInteriorId } from "./transientState.js"

export const interiorOptions = async () => {
    const response = await fetch("https://localhost:7096/interiors")
    const interiors = await response.json()

    let interiorsHTML = `<section class="optionCard"><h2>Interiors</h2><select id="interior">`

    interiorsHTML += `<option value="0" selected disabled hidden>Please Select an Interior Material</option>`

    const optionStringArray = interiors.map(interior => {return `<option value="${interior.id}">${interior.material}</option>`})

    interiorsHTML += `${optionStringArray.join("")}</select></section>`

    return interiorsHTML
}

const changeHandler = (changeEvent) => {
    const eventTarget = changeEvent.target
    const eventTargetValue = parseInt(eventTarget.value)

    if (eventTarget.id === "interior") {
        setInteriorId(eventTargetValue)
    }
}

document.addEventListener("change", changeHandler)