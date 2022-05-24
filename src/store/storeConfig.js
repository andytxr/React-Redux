import { createStore, combineReducers } from "redux";

let reducers = combineReducers({

    numbers: function(state, action){
        return{

            min: 5,
            max: 50

        }
    }

})

function storeConfig(){
    return createStore(reducers);
}

export default storeConfig;