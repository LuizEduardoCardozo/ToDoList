import React, {useState} from 'react';

import AddNewTask from '../AddNewTask';

import {FiPlus} from 'react-icons/fi';

import './styles.scss';

const Header = () => {

    const [addNewHidden,setAddNewHidden] = useState(true);
    const data = new Date();
    
    console.log(addNewHidden);

    function buttonHideHandler() {
        setAddNewHidden(!addNewHidden);
    }

    return(
        <header className="header">
            <h1>To-Do List</h1>
            <div>
                <p>{data.getDay()}|{data.getMonth()}|{data.getFullYear()}</p>
                <a onClick={buttonHideHandler}><FiPlus/></a>
            </div>
            <AddNewTask hidden={addNewHidden} />
        </header>
    );
}

export default Header;
