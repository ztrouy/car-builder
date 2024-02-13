export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    let technologiesHTML = `<section class="optionCard"><h2>Technologies</h2><select id="technology">`

    technologiesHTML += `<option value="0">Please select option</option>`

    const optionStringArray = technologies.map(technology => {return `<option value="${technology.id}">${technology.package}</option>`})

    technologiesHTML += `${optionStringArray.join("")}</select></section>`

    return technologiesHTML
}