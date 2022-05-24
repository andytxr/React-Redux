import React from 'react';

import Interval from './components/Interval';
import Average from './components/Average';
import AddUp from './components/AddUp';
import Raffle from './components/Raffle';

import './App.css';
function App(){

    return(

        <div className="App">
            <h1>Exercicio React-Redux (Simples)</h1>
            <div className='linha'>
                <Interval></Interval>
            </div>
            <div className='linha'>
                <Average></Average>
                <AddUp></AddUp>
                <Raffle></Raffle>
            </div>
        </div>
    )

}

export default App