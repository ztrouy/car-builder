export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    let paintsHTML = `<section class="optionCard"><h2>Paints</h2><select id="paint">`

    paintsHTML += `<option value="0">Please select option</option>`

    const optionStringArray = paints.map(paint => {return `<option value="${paint.id}">${paint.color}</option>`})

    paintsHTML += `${optionStringArray.join("")}</select></section>`

    return paintsHTML
}