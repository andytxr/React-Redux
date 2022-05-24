import React from "react";

import Card from "./Card";


export default props =>{

    const {min, max} = props;
    let random = parseInt(Math.random()*(max-min)) + min;

    return(

        <Card title="Sorteio de um número" purple>
            <div className="Raffle">
                <span>
                    <span>Resultado: </span>
                    <strong>{random}</strong>
                </span>
            </div>
        </Card>



    )

}