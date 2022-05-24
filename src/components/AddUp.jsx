import React from "react";

import Card from "./Card";

import './AddUp.css';

export default props =>{

    return(

        <Card title="Soma dos Números" blue>
            <div className="AddUp">
                <span>
                    <span>Resultado:</span>
                    <strong>10</strong>
                </span>

            </div>
        </Card>
    )
    
}