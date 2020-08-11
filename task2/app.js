
document.getElementById('search').addEventListener('click',(e) => {
  let username = document.getElementById('myinput').value
  if(username === ''){
    showMessage('Please enter a username');
    console.log('here');
  }else{
    window.open('github.html','_blank');
    localStorage.setItem('myinput',username);
    document.getElementById('myinput').value = '';
  }
  
});

// when username is not entered ans search has been clicked
function showMessage(message){
  document.getElementById('message').textContent = message;
  document.getElementById('message').style ="padding:2px;"
  setTimeout(() => {
    document.getElementById('message').textContent = '';
    document.getElementById('message').style ="padding:0px;"
  },2000)
}

document.getElementById('joke').addEventListener('click',(e) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET',`http://api.icndb.com/jokes/random/1`,true);

  xhr.onload = function(){
    if(xhr.status === 200){
      const jokes = JSON.parse(this.responseText);
      
      console.log(jokes.value)
      console.log(jokes.value.joke)
      let output='';
      jokes.value.forEach(function(joke){
        output += `<h5 style="font-weight:650;">JOKE</h5>${joke.joke}
        <footer class="rounded mt-3 p-2" style="background: rgba(0, 0, 0, .7);color:white;font-weight:200;">DISCLAIMER : These jokes in no way represent my sense of humour</footer>`;
      });
      console.log(output)

      document.querySelector('.jokes').innerHTML = output;
      document.querySelector('.jokes').className += ' p-3';
      console.log(document.querySelector('.jokes').className)

    }
  }

  xhr.send();

  e.preventDefault()  

});
