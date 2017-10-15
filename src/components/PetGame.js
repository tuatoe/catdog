
var React = require('react');
var axios = require('axios');
var PetComponent = require('./PetComponent');
var constants = require('../constants');


var btnStyle = {
    marginTop: '30px',
    marginRight: '5px',
    height: '25px'
};

var CAT = constants.CAT;
var DOG = constants.DOG;
var WINNER = constants.WINNER;
var LOSER = constants.LOSER;
var TIE = constants.TIE;
var API_KEY = constants.API;
var CAT_URL = 'http://localhost:63000/cat/?api_key='+constants.API_KEY;
var DOG_URL = 'http://localhost:63000/dog/?api_key='+constants.API_KEY;

class PetGame extends React.Component {
    constructor(props){
        super(props);
          this.state = {
             cat: { result: '', image: ''},
             dog: { result: '', image: ''}
          };
    
          this.catLikesCount = 0;
          this.dogLikesCount = 0;

          this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
          this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
          this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
          this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
        
    }
    
 
    componentDidMount(){
       this.fetchImages();
    }
 
    
    fetchPetImage(PET_URL, petName){
        petName = petName.toLowerCase();
        axios.get(PET_URL).then(function(resp){
            var imageUrl = resp.data.imageUrl;
            
            this.setState(function(prevState){
                var state = {};
                state[petName] = {
                    result: prevState[petName].result, imageUrl: imageUrl
                };
                      
                return state;
            });
        }.bind(this))
    }
    
    fetchImages(){
        this.fetchPetImage(CAT_URL, CAT);
        this.fetchPetImage(DOG_URL, DOG);
    }
    
    handleLikeDisLikeBtnClicks(petName, operation){
         this.fetchImages();
        
        if(petName === CAT){
              this.catLikesCount += operation;
          } else if(petName === "Dog"){
               this.dogLikesCount += operation;
          }
    }
    
    handleLikeBtnClick(event){
         this.handleLikeDisLikeBtnClicks(event.target.value, 1);
    }
    
    
    handleDislikeBtnClick(event){
        this.handleLikeDisLikeBtnClicks(event.target.value, -1);
    }
    
    handleShowWinnerBtnClick(){
        var catLikesCount = this.catLikesCount;
        var dogLikesCount = this.dogLikesCount;
        var catResult = TIE, 
            dogResult = TIE;
            
        if(catLikesCount > dogLikesCount){
            catResult = WINNER;
            dogResult = LOSER
        }else if(catLikesCount < dogLikesCount){
            catResult = LOSER;
            dogResult = WINNER
        }
        
       this.setState(function(prevState){
           return {
               cat:{result: catResult, imageUrl: prevState.cat.imageUrl },
               dog:{result: dogResult, imageUrl: prevState.dog.imageUrl }
           };
       });
    }
    

    handleStartOverBtnClick(){
        this.fetchImages();
        this.catLikesCount = 0;
        this.dogLikesCount = 0;
        this.setState({
        cat: {result: '', imageUrl: ''},
        dog: {result: '', imageUrl: ''},
          
      });
    }
    render(){
     
        return (
       <div>
        
       <div style={{marginTop: 60, textAlign:'center'}}>
            <PetComponent 
            petName = {CAT} 
            likesCount = {this.likesCount}
            petImageUrl={this.state.cat.imageUrl}
            result= {this.state.cat.result}
            onLikeBtnClick = {this.handleLikeBtnClick}
            onDislikeBtnClick = {this.handleDislikeBtnClick}
            />
            <PetComponent 
            petName = {DOG} 
            likesCount = {this.doglikesCount}
            petImageUrl={this.state.dog.imageUrl}
            result={this.state.dog.result}
            onLikeBtnClick = {this.handleLikeBtnClick}
            onDislikeBtnClick = {this.handleDislikeBtnClick}
            />
            </div>
      
            <div style={{textAlign: 'center'}}> 
            {!this.state.dog.result && <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show Winner</button>}
            <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Start Over </button>
            </div>
            
        </div>
    );
    }
}

module.exports = PetGame;
