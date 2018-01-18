import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import {VisualSize} from '../../../common/GlobalUtil'

export default class extends Component {

    render() {
        const {history} = this.props

        const visualSize = VisualSize();

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',height:visualSize.height-50}}>
                <View style={{flex:1,alignItems: 'center', justifyContent: 'center',width:'100%'}}>
                    <Text>我的</Text>
                </View>
                <View style={{flex:1,alignItems: 'center', justifyContent: 'center',width:'100%'}}>
                    <TouchableOpacity onPress={() => history.push(`/Login`)}>
                        <Text>退出登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}