var btn = document.querySelector("#add");
var para = document.querySelectorAll("p");

para[0].style.fontSize = "54px";
para[0].style.color = "red";


let arr = [];


  function showArr() {
    var input = document.querySelectorAll("input");
    for(let i = 0; i < input.length; i++) {
      input[i].value = '';
      let value = input[i].value;
        para[1].append(value + " ");


  }
 } 

btn.addEventListener('click', showArr)
