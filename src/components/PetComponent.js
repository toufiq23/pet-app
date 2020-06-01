var React = require('react');

var compStyle = {
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto'
};

var btnStyle = {
    height: '25px',
    width: '70px',
    marginTop: '10px',
    marginLeft: '5px',
    marginRight: '5px'
};

class PetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesCount: 0
        };
        this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
        this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    }
    handleLikeBtnClick() {
        console.log('Before setState: ', this.state.likesCount);
        this.setState({
            likesCount: this.state.likesCount + 1
        });
        console.log('After setState: ', this.state.likesCount);
    }
    handleDislikeBtnClick() {
        console.log(this.props.petName + ' Component dislike button clicked');
        this.setState({
            likesCount: this.state.likesCount - 1
        });
    }
    render() {
        console.log('Inside render method: ', this.state.likesCount);
        return (
            <div style={compStyle}>
                <h3>{this.props.petName} Likes: {this.state.likesCount}</h3>
                <img style={{height: 400, width: 400}} src={this.props.petImageUrl} alt={"Cute "+this.props.petName} />
                <br />
                <button style={btnStyle} onClick={this.handleLikeBtnClick}>Like</button>
                <button style={btnStyle} onClick={this.handleDislikeBtnClick}>Dislike</button>
            </div>
        );
    }
}

module.exports = PetComponent;