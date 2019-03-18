import * as types from './mutation-types'

const mutations = {
    [types.CHANGE_CITY](state,city){
        state.city = city
    }
}

export default mutations