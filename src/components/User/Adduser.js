import React,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../User/ErrorModel';
import Classes from './Adduser.module.css';

const Adduser=(props)=>
{
    const [enteredUserName,setEnteredUserName]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState();
    const AddUserHandler=(event)=>
    {
        event.preventDefault();
        if(enteredUserName.trim().length==0 || enteredAge.trim().length==0)
        {
            setError({
                title:"Invalid Input",
                message:"plz Enter Name and Age"
            });
            return;
        }
        if(+enteredAge<1)
        {
            setError({
                title:"Invalid Age",
                message:"plz Enter  Age"
            });
            return;

        }
        props.onAddUser(enteredUserName,enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };
    const UserNameChangedHandler=(event)=>{
        setEnteredUserName(event.target.value);
    };
    const AgeChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }
    const errorHandler=()=>{
        setError(null);
    }
    return(
    <>
    <div>
    {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={Classes.input}>
    <form onSubmit={AddUserHandler}>
        <label htmlFor="username">User-Name:</label>
        <input id ="username" 
        type="text"
        value={enteredUserName}
        onChange={UserNameChangedHandler}

        />

        <label htmlFor="age">Age:</label>
        <input id ="age" 
        type="number" 
        value={enteredAge}
        onChange={AgeChangeHandler}

        />

        <Button type="submit">Add-User</Button>
    </form>
    </Card>
    </div>
    </>
    );
};
export default Adduser;