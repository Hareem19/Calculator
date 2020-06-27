
function getNum(num){
    var result=document.getElementById("result")
console.log(num)
result.value+=num;
}
function getClear(){
    var clear=document.getElementById("result")
clear.value="";

}
function getResult(){
    var result=document.getElementById("result")
result.value=eval(result.value);
}