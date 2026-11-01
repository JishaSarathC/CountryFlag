import React from 'react';
import "./Card.css";

const Card = ({flag,name}) => {
  //if(!flag) return null;
  return (
    <div className="countryCard">
        <img src={flag} alt={`Flag of ${name}`} /> 
        <h3>{name}</h3>
        </div>
  );
}

export default Card;