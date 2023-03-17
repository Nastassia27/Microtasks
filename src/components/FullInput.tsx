/*
import React, {ChangeEvent, useState} from "react";


type FullInputPropsType={
    message: (title: string)=>void
}
export const FullInput = (props: FullInputPropsType) => {


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value);


    }

    const onClickButtonHandler = ()=>{
       props.message(title)
        setTitle('')


    }

    return (
        <div>

            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={() => {onClickButtonHandler()}}>+</button>

        </div>
    )

}*/
