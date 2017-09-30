var React = require('react');
var PetComponent = require('./PetComponent');

var style = {
    textAlign:'center',
    fontSize: '2em',
    color:'rebeccapurple'
};

var btnStyle = {
    marginTop: '30px',
    marginRight: '5px',
    height: '25px'
};

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.catCompInstRef = null;
        this.dogCompInstRef = null;
//        this.catCompInstRef = this.catCompInstRef.bind(this);
//        this.dogCompInstRef = this.dogCompInstRef.bind(this);
    }
    
    handleShowWinnerBtnClick(){
        console.log(this.catCompInstRef);
        console.log(this.dogCompInstRef);
        
        var catLikesCount = this.catCompInstRef.state.likesCount;
        var dogLikesCount = this.dogCompInstRef.state.likesCount;
        
        if(catLikesCount > dogLikesCount){
            console.log('Cat is the winner');
        }else if(catLikesCount < dogLikesCount){
            console.log('Dog is the winner');
        }else {
            console.log('Game is a Tie');
        }
        
    }
    
    handleStartOverBtnClick(){
        
    }
    render(){
        return (
       <div>
         <h1 style={style}>
            Welcome to Cat and Dog Cuteness Fight Game!!!
        </h1>
       <div style={{marginTop: 60, textAlign:'center'}}>
        <PetComponent 
            petName = "Cat" 
            ref={function(compInst){ this.catCompInstRef = compInst; }.bind(this)}
            petImageUrl="https://i.pinimg.com/736x/88/50/2b/88502b58b2ca3509be47473044fde8cc--wink-wink-adorable-animals.jpg"/>
        <PetComponent 
            petName = "Dog" 
            ref={function(compInst){ this.dogCompInstRef = compInst; }.bind(this)}
            petImageUrl="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"/>
        </div>
            <div style={{textAlign: 'center'}}> 
            <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>
            <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Start Ovder </button>
            </div>
            
        </div>
    );
    }
}

module.exports = HomePage;
