var React = require('react');
var PetComponent = require('./PetComponent');

var style = {
    textAlign: 'center',
    fontSize: '2em',
    color: 'rebeccapurple'
};

var HomePage = function() {
    return (
        <div>
            <h1 style={style}>
                Welcome to Cat and Dog Cuteness Fight Game!!!
            </h1>
            <div style={{marginTop: 60, textAlign: 'center'}}>
                <PetComponent 
                petName="Cat"
                petImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcpfUttjDooH4LN2x5Kqg972M4xWgrc11ZlRbxhSvBHTzWGx-T&usqp=CAU"
                />
                <PetComponent 
                petName="Dog"
                petImageUrl="https://www.dogsname.best/wp-content/uploads/2019/12/cute-dog-names.jpg"
                />
            </div>
        </div>
    );
};

module.exports = HomePage;