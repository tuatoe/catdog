var React = require('react');

//dog component 
var compStyle = {
    display:'inline-block',
    marginLeft: 'auto',
    marginRight:'auto'
}

var btnStyle = {
    height: '25px',
    width:'70px',
    marginTop: '10px',
    marginLeft: '5px',
    marginRight:'5px'
}
class PetComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          likesCount: 0
        };
        this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
        this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    }
    
     handleLikeBtnClick(){
         this.setState(function(prevState){
             return {
                 likesCount: prevState.likesCount + 1
             };
         });
    }
    
    handleDislikeBtnClick(){
        this.setState(function(prevState){
             return {
                 likesCount: prevState.likesCount - 1
             };
         });
    }
    render(){
                 console.log('Inside render method: ', this.state.likeCount);

        return(
            <div style={compStyle}>
                <h3>{this.props.petName} Likes: {this.state.likesCount}</h3>
            
                <img style={{height:300,width:300}} src={this.props.petImageUrl} alt={this.props.petName} />
            
                <br/>
            
                <button style={btnStyle} onClick={this.handleLikeBtnClick}>Like</button>
                <button style={btnStyle} onClick={this.handleDislikeBtnClick}>Dislike</button>
            </div>
        );
    }
}

module.exports = PetComponent;
