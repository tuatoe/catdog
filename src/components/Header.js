var React = require('react');

var HeaderStyle = {
    textAlign:'center',
    fontSize: '2em',
    color:'rebeccapurple'
};

var Header = function(){
    return(
         <h1 style={HeaderStyle}>
            Welcome to Cat and Dog Cuteness Fight Game!!!
        </h1>
    );
};

module.exports = Header;