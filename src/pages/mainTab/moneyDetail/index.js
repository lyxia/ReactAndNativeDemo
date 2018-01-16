import React, {Component} from 'react'
import {
    View,
    Text,
} from 'react-native'

export default class extends Component {
    render() {
        return (
            <div style={{display: 'flex',height:'100%',flexDirection:'column'}}>
                <div style={{flex :1, alignItems: 'center', justifyContent: 'center',boxFlex:1}}>
                    sdsdsd
                </div>
                <div style={{flex :1, alignItems: 'center', justifyContent: 'center',boxFlex:1}}>
                    sdsdsd
                </div>
                <div style={{flex :1, alignItems: 'center', justifyContent: 'center',boxFlex:1}}>
                    sdsdsd
                </div>
                {/*<View style={{flex :1,boxFlex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>
                        Test
                    </Text>
                </View>
                <View style={{flex :1,boxFlex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>
                        Test
                    </Text>
                </View>
                <View style={{flex :1,boxFlex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>
                        Test
                    </Text>
                </View>*/}
            </div>

        )
    }
}