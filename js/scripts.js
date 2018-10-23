$(document).ready(function(){
  $("#fortunetelling").submit(function(event){
    var unluckyboxes = []
     $("input:checkbox[name=unlucky]:checked").each(function(){
      unluckyboxes.push($(this).val());
  });

    var luckyboxes = []
    $("input:checkbox[name=lucky]:checked").each(function(){
      luckyboxes.push($(this).val());
    });
    if (unluckyboxes.length > luckyboxes.length){
        alert ("You have bad luck!")
    } else if (unluckyboxes.length < luckyboxes.length) {
        alert ("You are lucky")
      }  else {
        alert ("You are nuetral")
    }
  event.preventDefault();
  });
});
