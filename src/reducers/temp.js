import * as types from '../constants/TempActionTypes'


const initialState = {
    count: 0
}

const temp = (state = initialState,action) => {
    switch (action.type) {
        case types.ADD_COUNT:
            return {
                ...state,
                count:action.count
            }
        default:
            return state
    }
}

export default temp