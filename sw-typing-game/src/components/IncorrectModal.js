import React from 'react';

function IncorrectModal(props) {
    if(!props.show) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>I've got a bad feeling about this...</h4>
                </div>
                <div className="modal-body">
                <img src="resources/han-solo.jpeg" alt="han solo" />
                </div>  
            <div className="modal-footer">
                <button onClick={props.onClose} className="next-card">Try again!</button>
            <audio id="correct-audio" style={{display:'none'}}>
                <source src="resources/lightsaber_02.mp3" type="audio/mp3" />
            </audio>
            </div>
            </div>
        </div>
    );
}

export default IncorrectModal;