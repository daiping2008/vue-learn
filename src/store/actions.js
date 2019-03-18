import * as types from './mutation-types'
import {saveToLocal, loadFromLocal} from '../common/js/localStorage'
import {CURR_CITY} from '@/common/js/localStorageKey'

export default {
    changeCityAction({commit}, city){
        saveToLocal(1001, CURR_CITY, city)
        commit(types.CHANGE_CITY, city)
    }
}