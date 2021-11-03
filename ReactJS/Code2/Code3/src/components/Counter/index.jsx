import React, { useEffect, useRef, useState } from "react";

Counter.propTypes = {};

function Counter() {
    // 0
    const [count, setCount] = useState(0);
    const prevCount = useRef(count);
    
    // 1
    const handleIncreaseClick = () => {
        setCount(x => x + 1);
    };
    
    // 3
    useEffect(() => {
        prevCount.current = count;
    }, [count]);
    
    // 2
    return (
        <div>
            <p>Previous: { prevCount.current }</p>
            <p>Current: { count }</p>
            <div>
                <button onClick={ handleIncreaseClick }>Increase</button>
            </div>
        </div>
    );
};

export default Counter;
