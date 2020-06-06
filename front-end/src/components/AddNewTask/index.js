import React from 'react'

import './styles.scss'

const AddNewTask = ({hidden}) => {
    console.log(hidden);
    return (
            <div className={`addNew ${(hidden) ? 'hidden' : ''} `}>
                <input name="newTaskTitle"></input>
                <input name="newTaskDescription"></input>
                <select>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Yellow</option>
                    <option>Black</option>
                </select>
                <button>Enviar</button>
        </div>
    );
}

export default AddNewTask;
