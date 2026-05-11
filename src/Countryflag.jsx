import React from 'react'
import Card from "./Card.jsx";
import {useState, useEffect} from "react";
import "./Countryflag.css";

const API_ENDPOINT="https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

export default function Countryflag(){
    const [countries,setCountries]=useState([]);
    const [search,setSearch]=useState("");
    useEffect(()=>{
        const fetchCountries= async()=>{
            try{
            const response=await fetch(API_ENDPOINT);
            const jsonResponse=await response.json();

            setCountries(jsonResponse);
            }
            catch(error){
                console.error("Error fetching data",error);
            }
        
        };
        fetchCountries();
    },[]);

    const filteredCountries=countries.filter((item)=>
    item.common.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className='contents'>
        <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="SearchBox"/>
    <div className="flag">
     {filteredCountries.map((item,index)=>(
      
        <Card 
        key={index}
        name={item.common}
        flag={item.png}/>
      
))}
    </div>
   
    </div>
    
  );
}