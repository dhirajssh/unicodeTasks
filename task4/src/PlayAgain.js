import React from 'react';

const PlayAgain = ({clicks, gameOver, userAnswers, startTrivia})=>{
  if(clicks === 10){
    return(
      <>
        {gameOver || userAnswers.length === 10 ? (
          <button className="start btn btn-dark my-3" onClick={startTrivia}>
            Play Again
          </button>

      ) : null}
      </>
    )
  }else{
    return(
      <>
        {gameOver || userAnswers.length === 10? (
          <button className="start btn btn-dark my-3" onClick={startTrivia}>
            Start
          </button>

      ) : null}
      </>
    )
  }
}

export default PlayAgain;