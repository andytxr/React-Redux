import React from "react";
import { connect } from "react-redux";

import Card from './Card';
import { minNumberChanger, maxNumberChanger } from '../store/actions/numbers'
import './Interval.css';


const Interval = props =>{

    let {min, max} = props;

    if(min>=max){

        props.changeMin(max-1);
        
    }

    return(
        
        <Card title="Intervalo de Números" red>
            <div className="Interval">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} onChange={

                        e=>props.changeMin(+e.target.value)

                    }></input>
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max} onChange={

                        e=>props.changeMax(+e.target.value)

                    }></input>
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

function mapDispatchToProp(dispatch){

    return{

        changeMin(newNumber){

            //ActionCreator retorna uma Action
            const action = minNumberChanger(newNumber);
            dispatch(action);

        },
        changeMax(newNumber){

            const action = maxNumberChanger(newNumber);
            dispatch(action)

        }
    }

}

export default connect(mapStateToProps, mapDispatchToProp)(Interval)