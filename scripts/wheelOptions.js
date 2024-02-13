export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    let wheelsHTML = `<section class="optionCard"><h2>Wheels</h2><select id="wheel">`

    wheelsHTML += `<option value="0">Please select option</option>`

    const optionStringArray = wheels.map(wheel => {return `<option value="${wheel.id}">${wheel.wheel}</option>`})

    wheelsHTML += `${optionStringArray.join("")}</select></section>`

    return wheelsHTML
}