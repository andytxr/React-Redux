import React from "react";
import { connect } from "react-redux";

import Card from './Card';
import './Interval.css';

const Interval = props =>{

    let {min, max} = props;


    return(
        
        <Card title="Intervalo de Números" red>
            <div className="Interval">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} readOnly></input>
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max} readOnly></input>
                </span>
            </div>
        </Card>

    )

}

const mapStateToProps = state =>{

    return{

        min: state.numbers.min,
        max: state.numbers.max

    }

}

export default connect(mapStateToProps)(Interval)