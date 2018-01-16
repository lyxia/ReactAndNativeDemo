import { combineReducers } from 'redux'

function testReducer(state, action) {
    return state
}

export default combineReducers({
    test: testReducer,
})