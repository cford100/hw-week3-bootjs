$(".changeBtn1").click(function(){
    $(".firstDiv").addClass("firstDivNew"); 
})

$(".changeBtn2").click(function(){
    $(".secondDiv").css("background","yellow");
    $(".secondDiv").css("border-color","blue");
})

$(".changeBtn3").click(function(){
    $(".thirdDiv").css("background","blue");
    $(".thirdDiv").css("border-color","orange");
})

$(".changeAllBtn").click(function(){
    $(".firstDiv").css("background","purple");
    $(".firstDiv").css("border-color","yellow");

    $(".secondDiv").css("background","purple");
    $(".secondDiv").css("border-color","yellow");

    $(".thirdDiv").css("background","purple");
    $(".thirdDiv").css("border-color","yellow");
})


$(".hideBtn1").click(function(){
    $(".firstDiv").toggle();
})

$(".hideBtn2").click(function(){
    $(".secondDiv").toggle();
})    

 $(".hideBtn3").click(function(){
    $(".thirdDiv").toggle();
})    

$(".hideAllBtn").click(function(){
    $(".firstDiv").toggle();
    $(".secondDiv").toggle();
    $(".thirdDiv").toggle();
})    


 $(".showAllBoxes").click(function(){
    $(".firstDiv, .secondDiv, .thirdDiv").toggle();
 })

