import React from 'react'

const Greet = (props) => {
    function buttonClick() {
        console.log("Button Clicked")
    }

    return (
        <div>
            <h1>Hello {props.name}!</h1>
            <button onClick = {() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default Greet