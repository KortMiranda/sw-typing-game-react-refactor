import React from 'react';

function CorrectModal(props) {
    if(!props.show) {
        return null
    }
    return (
        
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>That's correct!</h4>
                    <h4>May the force be with you!</h4>
                </div>
                <div className="modal-body">
                    <img src="resources/grogu.png" alt="grogu" />
                </div>  
            <div className="modal-footer">
                <button onClick={props.onClose} className="next-card">Next Card</button>
            <audio id="correct-audio" style={{display:'none'}}>
                <source src="resources/lightsaber_02.mp3" type="audio/mp3" />
            </audio>
            </div>  
        </div>
    </div>
        
    );
}

export default CorrectModal;