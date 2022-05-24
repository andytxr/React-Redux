import React from "react";

import Card from "./Card";

import './Average.css';

export default props => {

    return(

        <Card title="Média dos Números" green>
            <div className="Average">
                <span>
                    <span>Resultado:</span>
                    <strong>5</strong>
                </span>
            </div>
        </Card>

    )

}