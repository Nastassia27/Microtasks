import React from 'react';

type NewCarsType = {
    topCars: Array<CarsMarks>
}

type CarsMarks = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: NewCarsType) => {
    /*const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]*/
    return (
        <div>
            {props.topCars.map((objectFromCarsArray, index) => {
                return (
                    <table key={index}>

                        <tr >

                            <th >

                                <span>{objectFromCarsArray.manufacturer}</span>

                            </th>
                            <th>
                                <span>{objectFromCarsArray.model}</span>
                            </th>
                        </tr>
                    </table>
                )
            })}


        </div>
    )
}