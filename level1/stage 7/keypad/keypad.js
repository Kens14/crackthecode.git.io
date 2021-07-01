 $(document).ready(function () {

  const input_value = $("#password");

  //disable input from typing
  $("#password").keypress(function () {
    return false;
  });

  //add password
  $(".calc").click(function () {
    let value = $(this).val();
    field(value);
  });

  function field(value) {
    input_value.val(input_value.val() + value);
  }

  $("#clear").click(function () {
    input_value.val("");
     var element = document.querySelector("input");
                  element.style.background = '#fff';
  });

  $("#enter").click(function () {
    var sa = input_value.val();
        var str = 8631;
        if(sa==str)
          {
             $("#codeModal").modal('hide');
           
           toggleDoor();
          }
          else {
                wronginput();
                var element = document.querySelector("input");
                  element.style.background = '#FF5A5A';
          }
  });
  
  



      


  //door opening function
   var element = document.querySelector(".door");

function toggleDoor() {
  element.classList.toggle("dooropen");
}
 

 //wronginput
 var element2 = document.querySelector("input");

 function wronginput(){
  element2.classList.toggle("inputwrong");
 }
  
});



