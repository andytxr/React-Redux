//Action Creator
export function minNumberChanger(newNumber){

    return{

        type: 'CHANGED_MIN_NUM',
        payload: newNumber

    }

}

export function maxNumberChanger(newNumber){

    return{

        type: 'CHANGED_MAX_NUM',
        payload: newNumber

    }

}
