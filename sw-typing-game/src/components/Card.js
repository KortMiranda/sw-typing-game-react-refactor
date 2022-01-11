
import React, {useState, useEffect} from 'react';
import CorrectModal from './CorrectModal';
import IncorrectModal from './IncorrectModal';

function Card() {
    const [name, setName] = useState([])
    const [input, setInput] = useState([])
    const [showCorrect, setShowCorrect] = useState(false)
    const [showIncorrect, setShowIncorrect] = useState(false)
    
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
            setShowCorrect(true)
            console.log(true)    
        } else {
            setShowIncorrect(true)
            console.log(false)
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
                    
                    <CorrectModal onClose={() => setShowCorrect(false)} show={showCorrect}/>
                    <IncorrectModal onClose={() => setShowIncorrect(false)} show={showIncorrect} />
                    
                </div>
            </div>
            
        </div>
       
    )
}

export default Card;