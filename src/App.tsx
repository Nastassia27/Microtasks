import React, {ChangeEvent, useState} from 'react';

import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";


    function App() {
        const [message, setMessage] = useState([
                {message: 'message1'},
                {message: 'message2'},
                {message: 'message3'},

            ]
        )

        let [title, setTitle] = useState('')

        const addMessage = (title: string)=>{
            let newMessage={message: title}
            setMessage([newMessage,...message])

        }

        const callBackButtonHandler = ()=>{
            addMessage(title)
            setTitle('')
        }
        return (
            <div className="App">
                <Input setTitle={setTitle} title={title}/>
               <Button name={'Butt'} callBack={()=>{callBackButtonHandler()}} />
                {/*<div>
                    <input />
                    <button>+</button>
                </div>*/}
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>
        );

}

export default App;

