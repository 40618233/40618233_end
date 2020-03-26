//傳輸值為顯示文字
function AddDiv(AddName){
    //獲取目標位址
    var box=document.getElementById("box");
    //新增DIV
    var div1=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var div4=document.createElement("div");
    //新增span
    var span1=document.createElement("span");
    var span2=document.createElement("span");
    var span3=document.createElement("span");
    //設定DIV.class
    div1.className="div1";
    div2.className="div2";
    div3.className="div3";
    div4.className="div4";
    //設定span.class
    span1.className="span1";
    span2.className="span2";
    span3.className="span2";
    //加入
    box.appendChild(div1);
    div1.appendChild(span1);
    div1.appendChild(div2);
    div2.appendChild(span2);
    div1.appendChild(div3);
    div3.appendChild(span3);
    div1.appendChild(div4);
    //span顯示文字
    span1.innerHTML=AddName;
    span2.innerHTML="Unremarkable";
    span3.innerHTML="Remarkable";
    }