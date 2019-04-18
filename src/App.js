import React, { Component } from 'react';
import Info from './Info';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      planetas: [],
    }

    this.swPlanetas = this.swPlanetas.bind(this);
  }

  swPlanetas(){

    var randomNumber = Math.floor(1 + Math.random() * (62-1));

    var urlPlanet = 'https://swapi.co/api/planets/' + randomNumber;

    console.log(randomNumber);

    return axios.get(urlPlanet)
      .then((response) => {
        //console.log(response.data);
        this.setState( { planetas: response.data } )
      })
  }

  componentDidMount(){
    this.swPlanetas();
  }

  render() {
    const {planetas} = this.state; 
    return (
      <div className="App text-center ">
        <Info planetas = {planetas} />
        <button onClick={this.swPlanetas} className="btn btn-round btn-success">Next</button>
    </div>
    );
  }
}

export default App;
