import React from 'react';
import "./Card.css";

const Card = ({flag,name}) => {
  //if(!flag) return null;
  return (
    <div className="countryCard">
        <img src={flag} alt={`Flag of ${name}`} /> 
        <h2>{name}</h2>
        </div>
  );
}

export default Card;