import React, {useState, useEffect} from 'react';

import Task from '../Task';

import api from '../../services/api';

import './styles.scss';

const Board = () => {

    const [tasksList, setTasksList] = useState([]);

    useEffect(() => {
        const request = api();
        setTasksList(request);
    }, []);

    return (
        <div className="board">
            {tasksList.map(task => <Task key={task.id} data={task} />)}
        </div> 
    );
}

export default Board;