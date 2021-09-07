import { classes } from 'istanbul-lib-coverage';
import React from 'react';
import Card from '../UI/Card';
import Classes from './Userlist.module.css';


const Userlist=(props)=>{
    return(
        <Card className={Classes.users}>
        <ul>
        {props.users.map((user)=>(
            <li key={user.id}> 
                {user.name}({user.age}Year Old)
            </li>
        ))}
        </ul>
        </Card>
    );
};
export default Userlist;