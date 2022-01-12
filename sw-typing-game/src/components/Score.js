import React from 'react';

function Score(props) {
    return (
        <div className="score">
            <p>
        $ : <span class="correct"></span>
       # : <span class="incorrect"></span>
            </p>
        </div>
    );
}

export default Score;