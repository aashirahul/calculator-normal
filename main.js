

var addition = function(){
var value1=Number(document.getElementById("numi").value);
var value2=Number(document.getElementById("numii").value);
 var sum = value1+value2;
  document.getElementById("answer").innerHTML=sum;
}
document.getElementById("button").addEventListener("click",addition);


