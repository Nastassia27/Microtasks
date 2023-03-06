import React, {useState} from 'react';
import {FilterType} from "./App";


type MoneyObjTypes = {
    banknots: string
    value: number
    number: string
}

type NewComponentType = {
    currentMoney: Array<MoneyObjTypes>
    onClickFilterHandler: (name: FilterType)=> void
}
export const FinalMicrotask = (props: NewComponentType)=>{
    return(
        <div>
            <ul>
                {props.currentMoney.map((e,index) => {
                    return (
                        <li key={index}>
                            <span>{e.banknots}</span>
                            <span>{e.value}</span>
                            <span>{e.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => {props.onClickFilterHandler('All')}}>All</button>
                <button onClick={() => {props.onClickFilterHandler('RUBLS')}}>Ruble</button>
                <button onClick={() => {props.onClickFilterHandler('Dollars')}}>Dollar</button>
            </div>
        </div>
    )
}