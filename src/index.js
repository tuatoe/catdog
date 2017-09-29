var React = require('react'),
    ReactDOM = require('react-dom');

//import component
var HomePage = require('./components/HomePage');

//render component onto the screen
//takes two argument, one what to render second where to mount the component on 
//the DOM
ReactDOM.render(
    <HomePage />, document.getElementById('root')
);