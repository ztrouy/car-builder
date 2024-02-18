const transientState = {
    paintId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0,
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

export const setWheelId = (chosenWheel) => {
    transientState.wheelId = chosenWheel
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

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const submissionEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(submissionEvent)
}