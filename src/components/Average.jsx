import React from "react";
import { connect } from 'react-redux';

import Card from "./Card";

const Average = props => {

    let {min, max} = props;


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

const mapStateToProps = state => {

    return{

        min: state.numbers.min,
        max: state.numbers.max

    }

}

export default connect(mapStateToProps)(Average)