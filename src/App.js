import React,{useState} from 'react';
import Adduser from './components/User/Adduser';
import Userlist from './components/User/Userlist';
function App()
 {
   const [userList,setUserList]=useState([]);
   const addUserHandler=(u_name,u_age)=>{
     setUserList((p_userlist)=>{
       return [...p_userlist,{name:u_name,age:u_age,id:Math.random().toString()}]
     });
   }

  return (
    <>
    <Adduser onAddUser={addUserHandler}/>
    <Userlist users={userList}/>
    </>
  );
}

export default App;
