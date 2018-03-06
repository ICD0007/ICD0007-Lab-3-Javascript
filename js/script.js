
//document.getElementsByTagName(".nav.navbar-nav a");
var listElements = document.querySelectorAll(".nav.navbar-nav a")
for (var i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener("mouseover", function () {
        this.style.color = "black";
        this.style["background-color"] = "white";
    })
    listElements[i].addEventListener("mouseout", function () {
        this.style.color = "#fff";
        this.style["background-color"] = "";
    })
}



//  function mouseEnterTrigger(element){
//   element.style.color = "#000";
//   element.style.backgroundColor="#fff";
//     // for (var i = 0; i < listElements.length; i++) {
//     //     listElements[i].addEventListener("mouseenter", function(evt) {   
//     //         evt.target.parentNode.style.background = "red";
//     //     });
      
//     // }
//  }
//  function mouseOutTrigger(element){
//     element.style.color = "#fff";
//     element.style.backgroundColor="#383E4C";
//     //var listElements = document.getElementById('navList').getElementsByTagName("li");

//     // for (var i = 0; i < listElements.length; i++) {
//     //     listElements[i].addEventListener("mouseleave", function(evt) {   
//     //         evt.target.parentNode.style.background = "red";
//     //     });
      
//     // }
//   }

var form = document.querySelector('form.contact-form')
var formSubmit =  function() {
    var nameValue = document.getElementById("name").value;
    var mailValue = document.getElementById("mail").value;
    var subjectValue = document.getElementById("subject").value;
    var commentValue = document.getElementById("comment").value;
    var alertMessage = "";
    if(nameValue != ""  && mailValue != ""  && subjectValue != ""  & commentValue != "" ){
        window.alert( nameValue + "\n\n" + mailValue + "\n\n" + subjectValue + "\n\n" + commentValue);
    }
    else if(nameValue == "" || mailValue =="" || subjectValue =="" || commentValue=="" ){
        if(nameValue==""){
            alertMessage +="The name field can't be empty \n";
        }
        if(mailValue==""){
            alertMessage +="The mail field can't be empty \n";
        }
        if(subjectValue==""){
            alertMessage +="The subject field can't be empty \n";
        }
        if(commentValue==""){
            alertMessage +="The comment field can't be empty \n";
        }
    } 
   window.alert(alertMessage);
}
form.addEventListener("submit", function(event){
 
    formSubmit();
})

var greenBtn = document.querySelector(".feature-content-link.green-btn");
//("feature-content-link green-btn");
var greenBtnClick = function(){
    greenBtn.classList.add("feature-content-link","red-btn");
    window.location.href = "http://www.github.com/kenny007";
    //greenBtn.classList.remohrefve("feature-content-link","green-btn");
    
    greenBtn.innerText="ICD007 Button";
}

greenBtn.addEventListener("click", function(event){
    greenBtnClick();
})