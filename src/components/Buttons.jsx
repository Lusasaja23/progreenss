import React, { useState } from 'react';

export function AddButton({updateCounter, data_value}) {
    const [isMinus, setIsMinus] = useState(false);

    const handleClick = () => {
        updateCounter(isMinus ? -data_value : data_value);
    };

    const handleContextMenu = (e) => {
        e.preventDefault();
        setIsMinus((prevIsMinus) => !prevIsMinus);
    };

    return (
        <button className={isMinus ? 'remove' : ''} data-is-minus={isMinus} onClick={handleClick} onContextMenu={handleContextMenu}>
            {isMinus ? `-${data_value}` : `+${data_value}`}
        </button>
    );
}

export function ShortButton({updateCounter, data_value}) {

    const handleClick = () => {
        updateCounter(data_value, true);
    };

    return (
        <button className={`to${data_value}`} onClick={handleClick}>
            To {data_value}
        </button>
    );
}