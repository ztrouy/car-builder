import { setTechnologyId } from "./transientState.js"

export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    let technologiesHTML = `<section class="optionCard"><h2>Technologies</h2><select id="technology">`

    technologiesHTML += `<option value="0">Please Select a Technology Package</option>`

    const optionStringArray = technologies.map(technology => {return `<option value="${technology.id}">${technology.package}</option>`})

    technologiesHTML += `${optionStringArray.join("")}</select></section>`

    return technologiesHTML
}

const changeHandler = (changeEvent) => {
    const eventTarget = changeEvent.target
    const eventTargetValue = parseInt(eventTarget.value)

    if (eventTarget.id === "technology") {
        setTechnologyId(eventTargetValue)
    }
}

document.addEventListener("change", changeHandler)