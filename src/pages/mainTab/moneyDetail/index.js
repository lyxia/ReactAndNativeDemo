import React, {Component} from 'react'
import {
    View,
    Text,
} from 'react-native'
import './index.css'
import {VisualSize} from '../../../common/GlobalUtil'

export default class extends Component {

    render() {

        const visualSize = VisualSize();

        //visualSize.height-50:可视手机浏览器高度-tab高度
        return (
            <div className="flex-box" style={{height:visualSize.height-50}}>
                <div className="flex flex-box-child" style={{width:'100%',borderBottom:'1px solid #000'}}>
                    111111
                </div>
                <div className="flex flex-box-child" style={{width:'100%',borderBottom:'1px solid #000'}}>
                    222222
                </div>
                <div className="flex flex-box-child" style={{width:'100%',borderBottom:'1px solid #000'}}>
                    333333
                </div>
            </div>
        )
    }
}