import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import { Provider } from 'react-redux'

import { Route } from 'react-router-dom'

import { ConnectedRouter } from 'react-router-redux'

import configureStore, { history } from './configStore'

import {
    MainTab,
    Login,
} from './pages'

export default class extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <ConnectedRouter history={history}>
                    <div style={{position:'absolute',bottom:0,left:0,width:'100%',height:'100%', }}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/MainTab" component={MainTab}/>
                        <Route path="/Login" component={Login}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

const Home = ({histroy}) => (
       <View>
           <TouchableOpacity onPress={() => history.push(`/MainTab/Home`)}>
               <Text style={{
                   color: 'red'
               }}>MainTab</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => history.push(`/Login`)}>
               <Text>Login</Text>
           </TouchableOpacity>
       </View>
)