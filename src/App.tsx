import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./Map/NewComponent";

function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
  return (
    <div>
<NewComponent topCars={topCars} />
      {/*<Header title={'Hello my title'}/>
        <Body titleForBody={'New Body'}/>
        <Footer titleForFooter={'New Footer'}/>*/}
    </div>
  );
}

export default App;
