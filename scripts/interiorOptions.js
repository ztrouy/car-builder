export const interiorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    let interiorsHTML = `<section class="optionCard"><h2>Interiors</h2><select id="interior">`

    interiorsHTML += `<option value="0">Please select option</option>`

    const optionStringArray = interiors.map(interior => {return `<option value="${interior.id}">${interior.type}</option>`})

    interiorsHTML += `${optionStringArray.join("")}</select></section>`

    return interiorsHTML
}