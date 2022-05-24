import { createStore, combineReducers } from "redux";

import numbersActions from './reducers/numbersActions';

let reducers = combineReducers({

    numbers: numbersActions

})

function storeConfig(){
    return createStore(reducers);
}

export default storeConfig;