const transientState = {
    paintId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelsId: 0,
    styleId: 0
}

export const setPaintId = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorId = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTechnologyId = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    console.log(transientState)
}

export const setWheelsId = (chosenWheel) => {
    transientState.wheelsId = chosenWheel
    console.log(transientState)
}

export const setStyleId = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("https://localhost:7096/orders", postOptions)

    setPaintId(0)
    setInteriorId(0)
    setTechnologyId(0)
    setWheelsId(0)
    setStyleId(0)

    const submissionEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(submissionEvent)
}