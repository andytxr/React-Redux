import React from 'react';
import Card from './components/Card'
function App(){

    return(

        <div className="App">
            <h1>Exercicio React-Redux (Simples)</h1>
            <div className='linha'>
                <Card title="Card 1"></Card>

            </div>
            <div className='linha'>
                <Card title="Card 2"></Card>
            </div>
        </div>
    )

}

export default App