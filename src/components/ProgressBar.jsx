import React, { useEffect, useState } from 'react';

export default function ProgressBar({ counter }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(counter);
    }, [counter]);

    return (
        <section className="progress-bar">
            <div className="bar">
                <div className="progress" style={{ width: `${width}%` }}></div>
            </div>
        </section>
    );
}