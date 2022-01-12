
import React, {useState, useEffect} from 'react';
import CorrectModal from './CorrectModal';
import IncorrectModal from './IncorrectModal';
import ReactCardFlip from 'react-card-flip';

function Card() {
    const [name, setName] = useState([])
    const [input, setInput] = useState([])
    const [isFlipped, setIsFlipped] = useState(false)
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

    const CardStyle = {
        border: "1px solid #FFd60a",
        padding: "20px",
        margin: "0 auto",
        width: "600px",
        height: "350px",
      };
    
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div onMouseEnter={() => setIsFlipped((prev) => !prev)} 
                 className="CardFront"
                 style={CardStyle}>
                <div className="card-content">
                <h2>{name}</h2>
                </div>   
            </div>
                
                <div onMouseLeave={() => setIsFlipped((prev) => !prev)} 
                className="CardBack"
                style={CardStyle}>
                    <div className="card-content">
                        <h2>{name}</h2>
                        <p>Type this character's name</p>
                            <form onSubmit={handleSubmit}>
                                    <input type="text" name="input" value={input} onChange={e => setInput(e.target.value)} placeholder="Type name here" />
                                    <input type="submit" name="submitButton" value="Correct, it is?" id="submitButton"/>
                            </form>
                    </div>
                            
                    
                    
                    <CorrectModal onClose={() => setShowCorrect(false)} show={showCorrect}/>
                    <IncorrectModal onClose={() => setShowIncorrect(false)} show={showIncorrect} />
                    
                </div>
          
        </ReactCardFlip>
 
    )
}

export default Card;