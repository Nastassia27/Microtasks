import React, {useState} from 'react';

import './App.css';
/*import {Header} from "./site/Header";
import logo from './logo.svg';
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./Map/NewComponent";
import {MouseEvent} from 'react';
import {Button} from "./components/Button";*/
import {FinalMicrotask, MoneyObjTypes} from "./FinalMicrotask";

export type FilterType = 'All' | 'Dollars' | 'RUBLS';
function App() {



    const [money, setMoney] = useState<Array<MoneyObjTypes>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money
    if (filter === 'RUBLS') {
        (
            currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
        )
    }
    if (filter === 'Dollars') {
        (
            currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
        )
    }

    const onClickFilterHandler = (value: FilterType) => {
        setFilter(value);

    }


    return (
        <FinalMicrotask money={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        /*<div>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>Ruble</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollar</button>
            </div>
        </div>*/
    );
}

export default App;

