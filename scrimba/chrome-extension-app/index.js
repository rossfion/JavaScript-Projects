//alert("working!")
let errorMessage = document.getElementById("error");
//console.log(errorMessage);

function getMessage(){
    console.log("button clicked");
    let error = "Something went wrong, please try again";
    errorMessage.textContent = error;
    //console.log(error);
}
//getMessage();