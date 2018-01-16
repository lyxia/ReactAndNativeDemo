import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native'

export default class extends Component {
    _loginSuccess = () => {
        const {history} = this.props
        history.replace('/MainTab')
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={this._loginSuccess}>
                    <Text>登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}