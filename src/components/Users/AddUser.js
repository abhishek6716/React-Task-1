import React, {useState} from 'react';
import Card from "../UI/Card";
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            return;
        }
        if (+enteredUserAge < 1) {
            return;
        }
        props.onAddUser(enteredUserName, enteredUserAge);
        setEnteredUserName('');
        setEnteredUserAge('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
            <label htmlFor="age">Age(years)</label>
            <input id="age" type="number" value={enteredUserAge} onChange={ageChangeHandler} />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
    ); 
};

export default AddUser; 