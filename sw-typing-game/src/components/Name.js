import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Name(props) {
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
        <div>{name}</div>
    )
}

export default Name;