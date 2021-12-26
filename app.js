//init github
const github = new Github;
//init UI
const ui = new UI;

const searchUser = document.getElementById('search-user');
searchUser.addEventListener('keyup', (e) => {
  //get input text
  const userText = e.target.value; 

  github.getUser(userText)

  if(userText !== ''){
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //show alert  
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //show profile
        ui.showProfile(data.profile);
      }
    })
  } else {
    //clear profile
    ui.clearProfile();
  }
})