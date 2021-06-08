// const check = document.getElementById('check');
// console.log(check.checked)
//pushh
var checkBox = document.getElementById("check");
var navigation = document.querySelector(".nav");
var check=document.querySelector('.checker')
console.log(navigation)
console.log(checkBox)
function navshow(){
  if(checkBox.checked === true){
    navigation.classList.add("checked")
    check.innerText= "✖"

  }
  if(checkBox.checked === false){
    navigation.classList.remove("checked")
    check.innerHTML="&#9776;"
  }

}