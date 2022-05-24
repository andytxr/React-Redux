import { createStore, combineReducers } from "redux";

let reducers = combineReducers({

    numbers: function(state, action){

        switch(action.type){

            case 'CHANGED_MIN_NUM':

                return{

                    ...state,
                    min: action.payload

                }
            case 'CHANGED_MAX_NUM':
                
                return{

                    ...state,
                    max: action.payload

                }
            default:

                return{

                    min: 0,
                    max: 10
        
                }

        }
        
    }

})

function storeConfig(){
    return createStore(reducers);
}

export default storeConfig;