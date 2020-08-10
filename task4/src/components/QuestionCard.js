import React from 'react';

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {

  return(
    <div>
      <p className="number h6">
        Question: {questionNr}/{totalQuestions}
      </p>
      <p style={{fontWeight:'bolder'}} dangerouslySetInnerHTML={{__html: question}} />
      <div>
        {answers.map(answer => {
          return(
            <div key={answer}>
              <button className="btn btn-info my-2" disabled={userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{__html: answer}}/>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

}

export default QuestionCard;