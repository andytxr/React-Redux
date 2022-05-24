import React from "react";

import Card from "./Card";


export default props =>{

    let max = props.max;
    let min = props.min;

    return(

        <Card title="Soma dos Números" blue>
            <div className="AddUp">
                <span>
                    <span>Resultado:</span>
                    <strong>{max+min}</strong>
                </span>

            </div>
        </Card>
    )
    
}