import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./Map/NewComponent";
import {MouseEvent} from 'react';
import {Button} from "./components/Button";

function App() {
    /*const myFirstSubscriber = (event: number) => {
        console.log('Hello im Vasya')
    }
    const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello im Ivan')
    }*/

const Button1Foo = (subscriber: string, age:number)=>{
    console.log(subscriber, age)
}
    const Button2Foo = (subscriber: string, age:number)=>{
        console.log(subscriber, age)
    }
    const Button3Foo = ()=>{
        console.log("im stupid button")
    }
    return (
        <div className='App'>

            <Button name={'YouTubeChannel-1'} callBack={()=> Button1Foo('im vasya',21)}/>
            <Button name={'YouTubeChannel-2'} callBack={()=>Button2Foo('im ivan',22)}/>
            <Button name={'im stupid button'} callBack={Button3Foo}/>



        </div>
    );
}

export default App;
