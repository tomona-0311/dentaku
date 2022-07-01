let element = document.getElementById("result")
function clickbutton(button){
    let target_value = button.innerHTML;
    if(target_value == "AC"){
        result.innerHTML ="0"
        console.log("0")
    }else if (target_value == "="){
        result.innerHTML = eval(result.innerHTML)
        consolw.log("計算")
    }else{
        if(result.innerHTML=="0"){
            result.innerHTML = target_value
            console.log("0の時の対応")
        }else{
            result.innerHTML += target_value
            console.log("計算完了")
    }
}



























let get_calc = function (button){
console.log("button.value");
  
  let target_value =  get_calc.innerHTML
}
// 関数の引数にthisを指定して記述する方法。

//<input type="button" value="ボタン" onclick="push(this)">

//<script>

// let push = function (button) {
 //console.log(button.value); }
//</script>

