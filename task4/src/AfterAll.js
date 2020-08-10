import React from 'react';

const AfterAll = ({userAnswers}) => {
  console.log(userAnswers);
  return(
    <div>
      {userAnswers.map( userAnswer => {
        return(
          <div>
            <p className="mt-5 mb-1" style={{fontWeight:'bolder'}} dangerouslySetInnerHTML={{__html: userAnswer.question}} />
            <div>
              {userAnswer.answers.map(answer => {
                if(userAnswer.correctAnswer === answer){
                  return(
                    <div key={answer}>
                      <button style={{backgroundColor: '#28a745', color: 'white'}} className="btn my-2" disabled={true} value={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                      </button>
                    </div>
                  ) 
                }else if(userAnswer.answer === answer){
                  return(
                    <div key={answer}>
                      <button style={{backgroundColor: 'red', color: 'white'}} className="btn my-2" disabled={true} value={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                      </button>
                    </div>
                  )

                }else{
                  return(
                    <div key={answer}>
                      <button style={{backgroundColor: '#17a2b8', color: 'white'}} className="btn my-2" disabled={true} value={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                      </button>
                    </div>
                  )
                }
                
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AfterAll;