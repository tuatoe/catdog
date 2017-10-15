var React = require('react');
var Header = require('./Header');
var PetGame = require('./PetGame');

var HomePage = function(){
    return(
        <div>
            <Header />
            <PetGame />
        </div>
    );
};

module.exports = HomePage;