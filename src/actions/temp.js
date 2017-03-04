import * as types from '../constants/TempActionTypes'

export const temp = (count=0) => ({
    type: types.ADD_COUNT,
    count: count + 1
})


