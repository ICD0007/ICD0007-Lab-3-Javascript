$(document).ready(function(){
    //var elmt = [];
    $('.nav.navbar-nav a').each(function(){ 
        $(this).mouseover(function(){  
            $(this).css({"backgroundColor":"white","color":"black"});
        });

        $(this).mouseout(function(){  
            $(this).css({"backgroundColor":"","color":""});
        });
    
    });

    $('.contact-form').submit(function(event){
        var name = $("form :input[name='name']").val();
        var email = $("form :input[name='email']").val();
        var subject = $("form :input[name='subject']").val();
        var message = $("form :input[name='message']").val();
        var emptyFields = [];
        if(!name) emptyFields.push("Name")
        if(!email) emptyFields.push("Email")
        if(!subject) emptyFields.push("Subject")
        if(!message) emptyFields.push("Message")
        if(emptyFields.length){
            var message = "Please fill these fields: \n" + emptyFields.join(',');
            alert(message);
        } 
        else{
            alert (name + "\n" + email + "\n"+ subject + "\n" + message);
        }     
        event.preventDefault();
    })

    $('.feature-content-link.green-btn').click(function(){
        $(this).removeClass("feature-content-link green-btn").addClass("feature-content-link red-btn");
        location.href ="http://www.github.com/kenny007";
    })

});
