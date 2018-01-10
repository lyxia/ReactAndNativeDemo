import App from './src/App';
import React from 'react';
import { AppRegistry } from 'react-native';

// register the app
AppRegistry.registerComponent('ReactAndNativeDemo', () => App);

AppRegistry.runApplication('ReactAndNativeDemo', {
    initialProps: {},
    rootTag: document.getElementById('root')
});