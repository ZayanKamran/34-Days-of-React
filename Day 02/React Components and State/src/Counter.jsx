import React, {useState} from "react";

function Counter() {
    const [count, setcount] = useState(0);

    return (
        <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setcount(count + 1)}>Increase</button>
        <button onClick={() => setcount(count - 1)}>Decrease</button>
        </div>
    )
}


export default Counter;