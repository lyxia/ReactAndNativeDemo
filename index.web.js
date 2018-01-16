import "babel-polyfill";
import App from './src/App';
import React from 'react';
import ReactDOM from 'react-dom'
// import { AppRegistry } from 'react-native';

// class App extends React.Component {
//     render() {
//         return (
//             <div>Hello world</div>
//         )
//     }
// }

ReactDOM.render(<App/>, document.getElementById('root'));

// // register the app
// AppRegistry.registerComponent('ReactAndNativeDemo', () => App);
//
// AppRegistry.runApplication('ReactAndNativeDemo', {
//     initialProps: {},
//     rootTag: document.getElementById('root')
// });