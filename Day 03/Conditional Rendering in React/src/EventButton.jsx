import React from "react";

function EventButton() {
    const handleClick = ()=>{
        alert('ButtonClicked!')
    }
    return (
        <button onClick={handleClick}>Click Me!</button>
    )
}

export default EventButton;