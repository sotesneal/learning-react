import React, { useState } from "react";

export function Button() {
    const [counter, setCounter] = useState(5);
    const handleClick = () => setCounter(counter*2);
    return (
        <button onClick={handleClick}>
            {counter}
        </button>
    );
}

// React.