// to link with my portfolio 
if(localStorage.getItem('myinput') !== null){
  console.log('linking successful')
    let username=localStorage.getItem('myinput');
    localStorage.clear();

    const gitHub = new GitHub;
    //Init UI
    const ui = new UI;

    //Get input text
    const userText = username;

    if(userText !== ''){
      // Make http call
      gitHub.getUser(userText)
        .then(data => {
          if(data.profile.message === 'Not Found'){
            //Show alert
            ui.showAlert('User not found', 'alert alert-danger');

          }else{
            //Show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
          }
        });
    }else{
      // clear profile
      ui.clearProfile();
    }
}


//Init Github
const gitHub = new GitHub;
//Init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup',(e) => {
  //Get input text
  console.log(e.target);
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    gitHub.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          //Show alert
          ui.showAlert('User not found', 'alert alert-danger');

        }else{
          //Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  }else{
    // clear profile
    ui.clearProfile();
  }

});