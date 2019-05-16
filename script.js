var wood = 2;

var button = document.getElementById("button");
button.onclick = function(){
  wood = wood +1
  document.getElementById("wood").innerHTML = wood;
}
