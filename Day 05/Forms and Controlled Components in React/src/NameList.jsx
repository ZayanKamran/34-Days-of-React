import React from "react";

function NameList() {
    const names = [ 'Zayan' , 'Ali' , 'Sara' , 'Ayesha']

    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    )
}

export default NameList;
