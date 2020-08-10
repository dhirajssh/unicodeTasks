import React,{ useState } from 'react';
import { fetchQuizQuestions } from './API';
import AfterAll from './AfterAll';
import './App.css';
//Components
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

let clicks=0;
const App = ()=>{
  

  //gameover is used as an indication to show the start button and score

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(false);
  const [gameOver, setGameover] = useState(true);


  // once start is clicked this function is called 
  const startTrivia = async () => {
    setLoading(true);
    setGameover(false);

    const newQuestions = await fetchQuizQuestions();

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  }

  const checkAnswer = (e) => {
    clicks++;
    if(!gameOver){
      const answer = e.currentTarget.value;
      //Cheack answer against vorresct answer
      const correct = questions[number].correct_answer === answer;
      ////add score if answer is correct
      if(correct){
        setScore(prev => prev + 1);
        // save answer in the array before user answers
        const answerObject = {
          question: questions[number].question,
          answers:questions[number].answers,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer,
        }
        setUserAnswers(prev => [...prev, answerObject]);
      }else{
        setScore(prev => prev + 0);
        // save answer in the array before user answers
        const answerObject = {
          question: questions[number].question,
          answers:questions[number].answers,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer,
        }
        setUserAnswers(prev => [...prev, answerObject]);
      }
    }
  }

  const nextQuestion = () => {
    // move on to the next question 
    const nextQuestion = number + 1;

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameover(true);
    }else{
      setNumber(nextQuestion);
    }

  }
  
  return (
    <div className="App">
      <h1 className="mb-3">React Quiz</h1>
      {gameOver || clicks !==TOTAL_QUESTIONS ? (
        <button className="start btn btn-dark my-3" onClick={startTrivia}>
          Start
        </button>

      ) : null}
      
      {!gameOver ? <p className="score h5">Score:{score}</p> : null}
      {loading ? <p className="h6">Loading Questions ...</p> : null}
      {!loading && !gameOver && clicks !==TOTAL_QUESTIONS? (
      <QuestionCard 
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />) : null}
      {!gameOver && !loading && userAnswers.length === (number + 1) && (number+1) !==TOTAL_QUESTIONS ? (
      <button className="next btn btn-dark my-4" onClick={nextQuestion}>
        Next Question
      </button>
      ) : null}

        {clicks === 10 ? (
          <AfterAll userAnswers={userAnswers}/>
        ) : null}

    </div>
  );
}

export default App;
