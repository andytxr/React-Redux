const initialState = {

    min: 1,
    max: 10

}

export default function(state = initialState, action){

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

            return state

    }
    
}