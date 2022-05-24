import React from "react";

import Card from "./Card";

import './Raffle.css';

export default props =>{

    return(

        <Card title="Sorteio de um número" purple>
            <div className="Raffle">
                <span>
                    <span>Resultado: </span>
                    <strong>8</strong>
                </span>
            </div>
        </Card>



    )

}