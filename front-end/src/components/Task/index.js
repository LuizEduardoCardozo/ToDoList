import React from 'react';

import './styles.scss';

const Task = ({data}) => {
    const {title, description, color} = data;

    return (
        <div className={`task ${color}`}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}
export default Task;
