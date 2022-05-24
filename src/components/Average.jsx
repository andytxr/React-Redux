import React from "react";

import Card from "./Card";


export default props => {

    let min = props.min;
    let max = props.max;

    return(

        <Card title="Média dos Números" green>
            <div className="Average">
                <span>
                    <span>Resultado:</span>
                    <strong>{((max+min)/2).toFixed(2)}</strong>
                </span>
            </div>
        </Card>

    )

}