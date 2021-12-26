class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }
  showProfile(user){
    this.profile.innerHTML = `
    <div class="card card-body">
    <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url} target="_blank" class="btn btn-block btn-primary">View Profile</a>
        </div>
        <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-primary">Public Gist: ${user.public_gists}</span>
            <span class="badge badge-primary">Followers: ${user.followers}</span>
            <span class="badge badge-primary">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member since: ${user.created_at}</li>
            </ul>
        </div>
    </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>
    `;
  }
  //show alert message
  showAlert(message, className){
    //Create a div 
    this.clearAlertMessage();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.search-container');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    //timeout after 3 seconds
    setTimeout(() => {
      this.clearAlertMessage();
    }, 3000);
  }
  clearAlertMessage(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
  clearProfile(){
    this.profile.innerHTML = '';
  }
}