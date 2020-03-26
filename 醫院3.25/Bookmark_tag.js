//紀錄頁籤ID 作為預設
var currentLayer2="tagname1"
//紀錄頁面ID 作為預設
var currentDiv2="tag1"
//判斷要換頁
function a(obj,div) {
  //頁籤ID!=當前ID
  if(currentLayer2!=obj.id){

    b(currentLayer2,currentDiv2,false);
    //重製頁籤 頁面ID
    currentLayer2=obj.id;
    currentDiv2=div;
    b(currentLayer2,currentDiv2,true);
  }
}

//是否要顯示
function b(o,d,mode) {
  //取得ID
  var obj=document.getElementById(o);
  var div=document.getElementById(d);
  //改變display
  div.style.display=mode?"block":"none";
}