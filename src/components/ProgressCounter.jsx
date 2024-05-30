import React from 'react';

export default function ProgressCounter({ counter }) {
    return (
        <h2 className='progress-counter' id='progress-counter'>{counter}%</h2>
    );
}