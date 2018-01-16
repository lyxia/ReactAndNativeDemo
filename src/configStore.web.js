import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from './reducers.web' // Or wherever you keep your reducers

import createHistory from 'history/createBrowserHistory'
// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function () {
    return createStore(
        combineReducers({
            ...reducers,
            router: routerReducer
        }),
        composeEnhancers(applyMiddleware(middleware)),
    )
}