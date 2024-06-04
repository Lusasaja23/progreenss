import { useEffect, useState } from "react";

export default function CustomAmount({ counter, updateCounter }) {
    const [inputValue, setInputValue] = useState(counter.toString());

    useEffect(() => {
        setInputValue(counter.toString());
    }, [counter]);

    const handleChange = (e) => {
        const value = e.target.value;
        const parsedValue = parseInt(value);

        if (value === "" || isNaN(value)) {
            setInputValue("");
            updateCounter(0, true);
        } else if (parsedValue > 100) {
            setInputValue("100");
            updateCounter(100, true);
        } else if (parsedValue < 0) {
            setInputValue("0");
            updateCounter(0, true);
        } else {
            setInputValue(value);
            updateCounter(parsedValue, true);
        }
    };

    return (
        <>
            <button
                disabled={counter <= 0}
                onClick={updateCounter(-1)}
            >-</button>
            <input type="number" value={inputValue} onChange={handleChange} />
            <button
                disabled={counter >= 100}
                onClick={updateCounter(1)}
            >+</button>
        </>
    );
}