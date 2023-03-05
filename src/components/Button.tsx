import React from 'react';
import {MouseEvent} from 'react';

type ButtonType={
    name: string
    callBack: ()=> void
}
export const Button = (props: ButtonType)=>{
    const onCLickHandler = ()=>{
        props.callBack()
    }
    return(
        <button onClick={onCLickHandler}>
            {props.name}
        </button>
    )
}
