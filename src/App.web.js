import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import { Provider } from 'react-redux'

import { Route, Link } from 'react-router-dom'

import { ConnectedRouter } from 'react-router-redux'

import configureStore, { history } from './configStore'

import {
    MainTab,
    Login,
} from './pages'

export default class extends Component {
    render() {
        return <div>Hello world</div>

        return (
            <Provider store={configureStore()}>
                <ConnectedRouter history={history}>
                    <View style={{flex: 1}}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/MainTab" component={MainTab}/>
                        <Route path="/Login" component={Login}/>
                    </View>
                </ConnectedRouter>
            </Provider>
        )
    }
}

const Home = ({histroy}) => (
       <View>
           <TouchableOpacity onPress={() => history.push(`/MainTab/Home`)}>
               <Text>MainTab</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => history.push(`/Login`)}>
               <Text>Login</Text>
           </TouchableOpacity>
       </View>
)