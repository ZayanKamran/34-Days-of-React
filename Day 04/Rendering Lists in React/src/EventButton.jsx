import React from "react";

function EventButton() {
    const handleClick = () => {
        alert('Button Clicked!')
    }
    return (
        <button onClick={handleClick}>Click Me!</button>
    )
}

export default EventButton;
