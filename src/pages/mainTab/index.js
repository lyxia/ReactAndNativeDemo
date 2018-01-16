import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'

import {Route, Redirect} from 'react-router-dom'

import {TabBar} from 'antd-mobile'

import Home from './home'
import MoneyDetail from './moneyDetail'
import Mine from './mine'

class MainTab extends Component {
    render() {
        const {history, match, location} = this.props

        return (
            <View style={{ flex: 1 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="Home"
                        key="Home"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        onPress={() => {
                            history.push(`${match.url}/Home`)
                        }}
                        selected={location.pathname === `${match.url}/Home`}
                    >
                        <Route path={`${match.url}/Home`} component={Home}/>
                    </TabBar.Item>
                    <TabBar.Item
                        title="MoneyDetail"
                        key="MoneyDetail"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        onPress={() => {
                            history.push(`${match.url}/MoneyDetail`)
                        }}
                        selected={location.pathname === `${match.url}/MoneyDetail`}
                    >
                        <Route path={`${match.url}/MoneyDetail`} component={MoneyDetail}/>
                    </TabBar.Item>
                    <TabBar.Item
                        title="Mine"
                        key="Mine"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        onPress={() => {
                            history.push(`${match.url}/Mine`)
                        }}
                        selected={location.pathname === `${match.url}/Mine`}
                    >
                        <Route path={`${match.url}/Mine`} component={Mine}/>
                    </TabBar.Item>
                </TabBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MainTab