
const arrayShuffle = (arr) => {
  let newPos,
      temp;
    
  for(let i =arr.length -1; i>0; i--){
    newPos = Math.floor(Math.random()*(i+1));
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;

  }
  return arr;
}

export const fetchQuizQuestions = async () => {
  const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;

  const data = await (await fetch(endpoint)).json();

  

    return data.results.map((question) => {
      return (
        {
          ...question,
          answers: arrayShuffle([...question.incorrect_answers, question.correct_answer]),
        }
      )
    })

}