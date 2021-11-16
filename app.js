let how_many_wrongs = 0;
let items_in_cart = 0;
const console_div = document.getElementById("console");
const button2_div = document.getElementById("button2");
const punish_console_div = document.getElementById("punish-console");
const items_p = document.querySelector(".cart_start > p");

const mybr = document.createElement('br');

function redirect_user(){
  window.location.href = "page3.html";
}

function password_check(){
  var str = document.getElementById("password").value;
  if(str == "geanina123"){
    window.location.href = "page2.html";
  }else{
    console_div.innerHTML = "Wrong password...Think of the heroes of the great war..."
    how_many_wrongs++;
    if(how_many_wrongs > 3){
      button2_div.style.visibility = "visible";
    }
  }
}

function wait(i){
  setTimeout(function(){
    punish_console_div.innerHTML += "YOU WILL BE PUNISHED FOR FORGETTING!!!";
    punish_console_div.appendChild(mybr);
    if(i < 1000000){
      wait(i + 1);
    }
  }, 100)
}

function  handle_punish(){
  let i = 0;
  wait(i);
}

function reset_cart(){
  items_in_cart = 0;
  items_p.innerHTML = "Items in cart: " + items_in_cart;
}

function update_cart(key){
  if(key == 0){
    var ammount0 = document.getElementById("q1").value;
    items_in_cart += Number(ammount0);
  }else if(key == 1){
    var ammount1 = document.getElementById("q2").value;
    items_in_cart += Number(ammount1);
  }else if(key == 2){
    var ammount2 = document.getElementById("q3").value;
    items_in_cart += Number(ammount2);
  }
  items_p.innerHTML = "Items in cart: " + items_in_cart;
}
