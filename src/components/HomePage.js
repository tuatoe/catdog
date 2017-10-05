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
          this.state = {
              catLikesCount: 0,
              dogLikesCount: 0,
              catResult: '',
              dogResult: ''
          };
          this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
          this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
          this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
          this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
    }
    
      handleLikeBtnClick(event){
          var petName = event.target.value;
          if(petName === 'Cat'){
              this.setState(function(prevState){
                  return {
                      catLikesCount: prevState.catLikesCount + 1
                  }
              });
          }else if(petName === "Dog"){
               this.setState(function(prevState){
                  return {
                      dogLikesCount: prevState.dogLikesCount + 1
                  }
              });
          }
    }
    
    handleDislikeBtnClick(event){
        var petName = event.target.value
         if(petName === 'Cat'){
              this.setState(function(prevState){
                  return {
                      catLikesCount: prevState.catLikesCount - 1
                  }
              });
          }else if(petName === "Dog"){
               this.setState(function(prevState){
                  return {
                      dogLikesCount: prevState.dogLikesCount - 1
                  }
              });
          }
    }
    
    handleShowWinnerBtnClick(){
        var catLikesCount = this.state.catLikesCount;
        var dogLikesCount = this.state.dogLikesCount;
        var catResult = 'Tie', 
            dogResult = 'Tie';
            
        if(catLikesCount > dogLikesCount){
            catResult = 'Winner';
            dogResult = 'Loser'
        }else if(catLikesCount < dogLikesCount){
            catResult = 'Loser';
            dogResult = 'Winner'
        }
        
        this.setState({
            catResult: catResult,
            dogResult: dogResult
        });
    }
    

    handleStartOverBtnClick(){
      this.setState({
          catLikesCount: 0,
          dogLikesCount: 0,
          catResult: '',
          dogResult: ''
      });
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
            likesCount = {this.state.catLikesCount}
            petImageUrl="https://i.pinimg.com/736x/88/50/2b/88502b58b2ca3509be47473044fde8cc--wink-wink-adorable-animals.jpg"
            result= {this.state.catResult}
            onLikeBtnClick = {this.handleLikeBtnClick}
            onDislikeBtnClick = {this.handleDislikeBtnClick}
            />
            <PetComponent 
            petName = "Dog" 
            likesCount = {this.state.dogLikesCount}
            petImageUrl="https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg"
            result={this.state.dogResult}
            onLikeBtnClick = {this.handleLikeBtnClick}
            onDislikeBtnClick = {this.handleDislikeBtnClick}
            />
            </div>
      
            <div style={{textAlign: 'center'}}> 
            <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>
            <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Start Over </button>
            </div>
            
        </div>
    );
    }
}

module.exports = HomePage;
