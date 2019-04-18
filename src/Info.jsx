import React, { Component } from 'react';
import PlanetInfo from './PlanetInfo';

class Info extends Component {
    render(){
        const planetas = this.props.planetas;

        return(

            <div className="card-sw"> 
            <div className="card-sw__thumb">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" alt="Strawberry Waffle"/>
            </div>
            <div className="card-sw__content">
                <header className="content__header">
                <div className="row-wrapper">
                    <h2 className="planet-sw-title">{planetas.name}</h2>
                    <div className="user-rating"></div>
                </div>
                <p className="description text-left">
                Population: {planetas.population} <br/>
                Climate: {planetas.climate} <br/>
                Terrain: {planetas.terrain}
                </p>

                <ul className="planet-sw-details">
                    <li className="planet-sw-details-item"><i className="ion ion-ios-book-outline"></i><span className="value">{React.Children.count(planetas.films)}</span><span className="title">Features in films</span></li>
                </ul>
                </header>
                
                
            </div>
            </div>

            
            
            
        );


    }
}

export default Info; 