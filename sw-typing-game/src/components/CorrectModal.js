import React from 'react';

function CorrectModal(props) {
    return (
        
        <div className="modal-correct">
            <div id="modal-textbox-correct">
                <h4>That's correct!</h4>
                <h4>May the force be with you!</h4>
                <img src="resources/grogu.png" alt="grogu" />
            <div id="correct-footer">
                <button onclick="document.getElementById('inputBar').value = ''" class="modal-button" id="next-card">Next Card</button>
            <audio id="correct-audio" style={{display:'none'}}>
                <source src="resources/lightsaber_02.mp3" type="audio/mp3" />
            </audio>
            </div>  
        </div>
    </div>
        
    );
}

export default CorrectModal;