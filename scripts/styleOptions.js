import { setStyleId } from "./transientState.js"

export const styleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let stylesHTML = `<section class="optionCard"><h2>Vehicle Style</h2><select id=style>`

    stylesHTML +=`<option value="0" selected disabled hidden>Please Select a Vehicle Style</option>`

    const optionStringArray = styles.map(style => `<option value="${style.id}">${style.style}</option>`)

    stylesHTML += optionStringArray.join("")
    
    stylesHTML += "</select></section>"

    return stylesHTML
}

const changeHandler = (changeEvent) => {
    const eventTarget = changeEvent.target
    const eventTargetValue = parseInt(eventTarget.value)

    if (eventTarget.id === "style") {
        setStyleId(eventTargetValue)
    }
}

document.addEventListener("change", changeHandler)