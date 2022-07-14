let result = document.getElementById("result");

function clickbutton (button){
 let target_value = button.innerHTML;
 if(target_value =="AC"){
        console.log("クリア")
        result.innerHTML ="0"
        console.log("0");
 }else if (target_value == "="){
        result.innerHTML = eval(result.innerHTML)
        console.log("計算");
 }else{
        if(result.innerHTML=="0"){
            console.log("0の時の対応");
            
            result.innerHTML = target_value
            console.log("0の時の対応パート２");
}else{
            result.innerHTML += target_value
            console.log("計算完了");
        }
}}

function edit(button){
    let operate  =　document.getElementsByClassName('operate')
   console.log(button);
  if (result.innerHTML.slice(-1) === "+" ){
      console.log("＋");
   return;
}else if(result.innerHTML.slice(-1) === "-" ){
           console.log("-")
            return;
        }
else if(result.innerHTML.slice(-1) === "*" ){
             console.log("*")
            return;
        }
else if(result.innerHTML.slice(-1) === "/" ){
console.log("/")
        　 return; 
}
else{result.innerHTML += button.innerHTML
            console.log("計算完了");
        } 
}

