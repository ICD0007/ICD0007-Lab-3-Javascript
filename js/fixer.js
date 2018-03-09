$(document).ready(function(){
    //Set textbox type to number, make provision for the base task
    //Tell the user if the input box is empty and also make provision for any error message
    //We might need to get the base and not the latest
    const euroMoney = 100;
    const key = "daf3474557a166dc25cf0ffa61f537d3";
    $.ajax({
        url:'http://data.fixer.io/api/latest?access_key=' + key,
        dataType:'jsonp',
        success: function(json){
          var gbpRate = json.rates.GBP;
          var converted = gbpRate * euroMoney
           console.log('100 euros in GBP is ' + converted);
        },
        fail: function(xhr, statusText, body){
            console.log(body)
        }
    })
})