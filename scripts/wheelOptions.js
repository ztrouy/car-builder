import { setWheelId } from "./transientState.js"

export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let wheelsHTML = `<section class="optionCard"><h2>Wheels</h2><select id="wheel">`

    wheelsHTML += `<option value="0">Please Select a Wheel Type</option>`

    const optionStringArray = wheels.map(wheel => {return `<option value="${wheel.id}">${wheel.wheel}</option>`})

    wheelsHTML += `${optionStringArray.join("")}</select></section>`

    return wheelsHTML
}

const changeHandler = (changeEvent) => {
    const eventTarget = changeEvent.target
    const eventTargetValue = parseInt(eventTarget.value)

    if (eventTarget.id === "wheel") {
        setWheelId(eventTargetValue)
    }
}

document.addEventListener("change", changeHandler)