import React from 'react';

interface inputUnattemptedGuess {
    guessNum: number;
}

export const UnattemptedGuess = ({ guessNum }: inputUnattemptedGuess) => {
    return (
        <div className='Unattempted-guess'>
            <p>Guess {guessNum}</p>
        </div>
    );
}

