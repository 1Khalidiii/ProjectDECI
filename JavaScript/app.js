let names = document.getElementById("namestr")
let email = document.getElementById("emailstr")
let comment = document.getElementById("commentstr")
let form = document.getElementById("comments")
let btn = document.getElementById("submitbtn")
alert("Welcome")
btn.addEventListener("click" , function(event){
    event.preventDefault();
    let namestr = names.value;
    let emailstr = email.value;
    let commentstr = comment.value;
    if(namestr.length === 0){
        alert("Please enter a name");
    }
    if(emailstr.length === 0){
        alert("Please enter an email");
    }
    if(commentstr.length === 0){
        alert("Please enter your comment");
    }
    
});