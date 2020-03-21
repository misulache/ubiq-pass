
ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">Welcome to WirVsVirus</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class ="navbar-nav">
<li class="nav-item"> <a class="nav-link" href="#" onclick="loadCreateUserAccount()" >Create User Account</a></li>
<li class="nav-item"> <a class="nav-link" href="#" onclick="loadCreateDoctorAccount()" >Create Doctor Account</a></li>
<li class="nav-item"> <a class="nav-link" href="#" onclick="loadLogin()" >Login</a></li>
</ul>
</div>
</nav> 
`;

ui.createUserAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Create Account</div>
<div class="card-body">
  Name<br>
  <input type="input" class="form-control" id="name" placeholder="Enter name"><br>
  Email adress<br>
  <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
  Password<br>
  <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
  <button type="submit" class="btn" onclick="create()">Create Account</button>
  <div id='createStatus'></div>
</div>
</div>
`;

ui.createDoctorAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Create Account</div>
<div class="card-body">
  Name<br>
  <input type="input" class="form-control" id="name" placeholder="Enter name"><br>
  Email adress<br>var ui = {};

  <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
  Password<br>
  <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
  <button type="submit" class="btn" onclick="create()">Create Account</button>
  <div id='createStatus'></div>
</div>
</div>
`;

ui.login = `
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
<div class="card-header">Login</div>
<div class="card-body">
Email<br>
<input type="input" class="form-control" id="loginEmail" placeholder="Enter email"><br>
Password<br>
<input type="password" class="form-control" id="loginPassword" placeholder="Enter password"><br>
<button type="submit" class="btn" onclick="login()">Login</button>
<div id='loginStatus'></div>
</div>
</div>
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;
content.innerHTML += ui.content;


var loadCreateUserAccount = function(){
    target.innerHTML = ui.createAccount;
    document.getElementById('output').value= '';
};

var loadCreateDoctorAccount = function(){
    target.innerHTML = ui.createAccount;
    document.getElementById('output').value= '';
};

var loadLogin = function(){
    target.innerHTML = ui.login;
    document.getElementById('output').value= '';
};

var defaultModule = function(){
    target.innerHTML = ui.default;
    document.getElementById('output').value= '';
};

defaultModule();
