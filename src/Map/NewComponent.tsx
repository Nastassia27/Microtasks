import React from 'react';

type NewCarsType = {
    topCars: Array<CarsMarks>
}

type CarsMarks = {
    manufacturer:string
    model:string
}

export const NewComponent = (props: NewCarsType) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    /*<table>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
    </table>*/
    return (
        <div>
            {props.topCars.map((objectFromCarsArray, index) => {
                return (
                    <table>
                        <tr>
                            <th>
                                key={index[1]}
                                <span>{objectFromCarsArray.manufacturer}</span>
                                <span>{objectFromCarsArray.model}</span>
                            </th>

                        </tr>


                    </table>
                )
            })}


        </div>
    )
}