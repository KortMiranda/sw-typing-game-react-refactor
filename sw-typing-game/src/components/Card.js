import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Card() {
    const [name, setName] = useState([])
    const [input, setInput] = useState([])
    
    useEffect(() => {
        async function getName() {
            let randomId = Math.floor(Math.random()* (80 - 0) + 0)
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

    const handleSubmit = e => {
        e.preventDefault()
        if(input === name || input === name.toLowerCase() || input === name.toUpperCase()) {
            console.log(true)
            console.log(input)
        } else {
            console.log(false)
            console.log(input)
            console.log(name)
        }
    }
    
    return (
        <div className='scene scene--card'>
            <div className='card'>
                <h2>{name}</h2>
                
                <div className="card__face card__face--back">
                <h2 className="charBack">{name}</h2>
                <h4 className="prompt">Type this character's name</h4>
                    <form onSubmit={handleSubmit}>
                            <input type="text" name="input" value={input} onChange={e => setInput(e.target.value)} placeholder="Type name here" />
                            <input type="submit" name="submitButton" value="Correct, it is?" id="submitButton"/>
                    </form>
                </div>
            </div>
            
        </div>
       
    )
}

export default Card;