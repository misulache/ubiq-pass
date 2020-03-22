//loading the initialization function on page load
function activateClick(){
  $("#registration").submit(function(x){
    trustedDoctor = $("#preferredDoctor").val() == "" ? "0x0000000000000000000000000000000000000000" : $("#preferredDoctor").val();
    registerUser($("#name").val(), ($("#category").val() == 1), trustedDoctor);
    $("#registration").text("Waiting for Initialization.");
    x.preventDefault()
  });
}

$(document).ready(function() {
initETH().then(activateClick);
});
