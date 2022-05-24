import React from "react";
import { connect } from "react-redux";

import Card from "./Card";


const Raffle = props =>{

    let {min, max} = props;
    let random = parseInt(Math.random()*(max-min))+min;

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

const mapStateToProps = state => {

    return{

        min: state.numbers.min,
        max: state.numbers.max

    }

}

export default connect(mapStateToProps)(Raffle)