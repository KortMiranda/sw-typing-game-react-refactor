import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Card() {
    const [name, setName] = useState([])
    
    useEffect(() => {
        async function getName() {
            let randomId = Math.floor(Math.random()* 80)
            const url = `https://swapi.dev/api/people/${randomId}`
            fetch(url)
            .then(response => {
                return response.json()
            })
    
            .then(data => {
                setName(data.name)
            })
        }
        getName()
    },[])
    
    return (
        <div>
            <h2>{name}</h2>
            <h2>{name}</h2>
            
        </div>
       
    )
}

export default Card;