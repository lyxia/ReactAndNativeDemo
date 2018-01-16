import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

export default class extends Component {
    render() {
        const {history} = this.props

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>我的</Text>
                <TouchableOpacity onPress={() => history.push(`/Login`)}>
                    <Text>退出登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}