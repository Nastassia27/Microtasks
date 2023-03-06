import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./Map/NewComponent";
import {MouseEvent} from 'react';
import {Button} from "./components/Button";

function App() {
   // let a = 1
    let [a, setA] = useState(1);
    const onClickHandler = () => {
        setA(++a);

        console.log(a)
    }

    const deleteOnCLick = ()=>{
        setA(0);
    }

    return (
        <div className='App'>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={deleteOnCLick}>0</button>
        </div>
    );
}

export default App;
