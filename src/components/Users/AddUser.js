import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const Name = nameInputRef.current.value;
    const Age = ageInputRef.current.value;
    if (Name.trim().length === 0 || Age.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+Age < 1) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(Name, Age);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUserName("");
    // setEnteredUserAge("");
  };

  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredUserAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUserName}
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(years)</label>
          <input
            id="age"
            type="number"
            // value={enteredUserAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
