var React = require('react');
var PetComponent = require('./PetComponent');

var style = {
    textAlign:'center',
    fontSize: '2em',
    color:'rebeccapurple'
};

var HomePage = function(){
    return (
       <div>
         <h1 style={style}>
            Welcome to Cat and Dog Cuteness Fight Game!!!
        </h1>
       <div style={{marginTop: 60, textAlign:'center'}}>
        <PetComponent 
            petName = "Cat" petImageUrl="https://i.pinimg.com/736x/88/50/2b/88502b58b2ca3509be47473044fde8cc--wink-wink-adorable-animals.jpg"/>
        <PetComponent 
            petName = "Dog" 
            petImageUrl="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"/>
        </div>
        </div>
    );
};


module.exports = HomePage;
