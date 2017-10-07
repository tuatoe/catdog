
var React = require('react');
var axios = require('axios');
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
var API_KEY = '123456789';
var CAT_URL = 'http://localhost:63000/cat/?api_key='+API_KEY;
var DOG_URL = 'http://localhost:63000/dog/?api_key='+API_KEY;

class HomePage extends React.Component {
    constructor(props){
        super(props);
          this.state = {
             cat: {likesCount: 0, result: '', image: ''},
             dog: {likesCount: 0, result: '', image: ''}
          };
          this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
          this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
          this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
          this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
        
    }
    
 
    componentDidMount(){
       this.fetchCatImage();
    }
    
    fetchCatImage(){
         axios.get(CAT_URL)
        .then(function(resp){
            var imageUrl = resp.data.imageUrl;
             
             this.setState(function(prevState){
                 return {
                     cat:{likesCount: prevState.cat.likesCount, result: prevState.cat.result, imageUrl: imageUrl}
                 };
             });
        }.bind(this));
    }
    
    fetchDogImage(){
         axios.get(DOG_URL)
        .then(function(resp){
            var imageUrl = resp.data.imageUrl;
             
             this.setState(function(prevState){
                 return {
                     dog:{likesCount: prevState.dog.likesCount, result: prevState.dog.result, imageUrl: imageUrl}
                 };
             });
        }.bind(this));
    }
    
    fetchImages(){
        this.fetchCatImage();
        this.fetchDogImage();
    }
      handleLikeBtnClick(event){
          this.fetchImages();
          var petName = event.target.value;
          if(petName === 'Cat'){
              this.setState(function(prevState){
                  return {
                    
                      cat:{ likesCount: prevState.cat.likesCount + 1, result: prevState.cat.result,imageUrl: prevState.cat.imageUrl  }
                  };
              });
          }else if(petName === "Dog"){
               this.setState(function(prevState){
                  return {
                     
                       dog:{ likesCount: prevState.dog.likesCount + 1, result: prevState.dog.result,imageUrl: prevState.dog.imageUrl }
                  };
              });
          }
    }
    
    
    handleDislikeBtnClick(event){
        this.fetchImages();
        var petName = event.target.value
         if(petName === 'Cat'){
              this.setState(function(prevState){
                  return {
                    
                       cat:{ likesCount: prevState.cat.likesCount - 1, result: prevState.cat.result,imageUrl: prevState.cat.imageUrl }
                  };
              });
          }else if(petName === "Dog"){
               this.setState(function(prevState){
                  return {
                   
                       dog:{ likesCount: prevState.dog.likesCount - 1, result: prevState.dog.result,imageUrl: prevState.dog.imageUrl }
                  };
              });
          }
    }
    
    handleShowWinnerBtnClick(){
        var catLikesCount = this.state.cat.likesCount;
        var dogLikesCount = this.state.dog.likesCount;
        var catResult = 'Tie', 
            dogResult = 'Tie';
            
        if(catLikesCount > dogLikesCount){
            catResult = 'Winner';
            dogResult = 'Loser'
        }else if(catLikesCount < dogLikesCount){
            catResult = 'Loser';
            dogResult = 'Winner'
        }
        
       this.setState(function(prevState){
           return {
               cat:{ likesCount: prevState.cat.likesCount, result: catResult, imageUrl: prevState.cat.imageUrl },
               dog:{ likesCount: prevState.dog.likesCount, result: dogResult, imageUrl: prevState.dog.imageUrl }
           };
       });
    }
    

    handleStartOverBtnClick(){
        this.fetchImages();
      this.setState({
        cat: {likesCount: 0, result: '', imageUrl: ''},
        dog: {likesCount: 0, result: '', imageUrl: ''},
          
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
            likesCount = {this.state.cat.likesCount}
            petImageUrl={this.state.cat.imageUrl}
            result= {this.state.cat.result}
            onLikeBtnClick = {this.handleLikeBtnClick}
            onDislikeBtnClick = {this.handleDislikeBtnClick}
            />
            <PetComponent 
            petName = "Dog" 
            likesCount = {this.state.dog.likesCount}
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

module.exports = HomePage;
