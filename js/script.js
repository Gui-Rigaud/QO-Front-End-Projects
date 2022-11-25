$('#resp').click(function(){
    var num1 = document.getElementById("n1");
    var num2 = document.getElementById("n2");
    
    var res = parseInt(num1.value) + parseInt(num2.value);

    alert(res/2);
  });