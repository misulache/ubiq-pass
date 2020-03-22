//checking if user is initialized and loading data
function InitCheck(){
  isInitialized(function(x){
    if(x){
      initializeUser();
    } else {
      window.location.href = "/dashboard.html";
    }
  })
}
//loading the initialization function on page load
$(document).ready(function() {
initETH().then(InitCheck);
});
