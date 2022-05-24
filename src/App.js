import React, {useState} from 'react';

import Interval from './components/Interval';
import Average from './components/Average';
import AddUp from './components/AddUp';
import Raffle from './components/Raffle';

import './App.css';
function App(){

    let [min, setMin] = useState(0);
    let [max, setMax] = useState(10)

    return(

        <div className="App">
            <h1>Exercicio React-Redux (Simples)</h1>
            <div className='linha'>
                <Interval min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}></Interval>
            </div>
            <div className='linha'>
                <Average min={min} max={max}></Average>
                <AddUp min={min} max={max}></AddUp>
                <Raffle min={min} max={max}></Raffle>
            </div>
        </div>
    )

}

export default App