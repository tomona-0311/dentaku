let result = document.getElementById("result");

function clickbutton (button){
 let target_value = button.innerHTML;
/*問題なくconsole.logは動く
console.log(button) ;
 console.log(result);
 result.innerHTML += result.innerHTML
*/
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




//const operate = 　document.getElementsByClassName('operate')←演算子のクラス名;

function edit (button){
    let operate  =　document.getElementsByClassName('operate')
    //let target_value = operate.innerHTML;
  operate.innerHTML = edit.innerHTML;
   console.log(button);

  if (button.innerHTML.slice(-1) === "+" ){
   result.innerHTML += button.innerHTML;
   return;
      console.log("＋");
        
}else if(button.innerHTML.slice(-1) === "-" ){
           console.log("-")
            return;
        }
else if(button.innerHTML.slice(-1) === "*" ){
             console.log("*")
            return;
        }
else if(button.innerHTML.slice(-1) === "/" ){
console.log("/")
        　 return; 
            
}else{button.innerHTML += result.innerHTML
            console.log("計算完了");
        } 
}

//let operate  = result.innerHTML;
// 末尾から2文字を削除
//var b = str.slice( 0, -2 ) ;

//let get_calc = function (button){
//console.log("button.value");
  
//  let target_value =  get_calc.innerHTML
//}
// 関数の引数にthisを指定して記述する方法。

//<input type="button" value="ボタン" onclick="push(this)">

//<script>

// let push = function (button) {
 //console.log(button.value); }
//</script>

/* 追加 
function edit() {
  console.log('edit')
}*/