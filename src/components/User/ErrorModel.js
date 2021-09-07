import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Classes from './ErrorModel.module.css';
const ErrorModel=(props)=>{
    return (
    <>
    <div>
    <div className={Classes.backdrop} onClick={props.onConfirm}/>
    <Card className={Classes.modal}>
        <header className={Classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={Classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={Classes.actions}>
            <Button onClick={props.onConfirm}>OK</Button>
        </footer>
    </Card>;
    </div>
    </>);
};
export default ErrorModel;