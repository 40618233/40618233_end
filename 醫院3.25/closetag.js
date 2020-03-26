function closetag(){
    var box=document.getElementById("box");
    var childbox=box.childNodes;
    for(var i=childbox.length-1;i>=0;i--){
      box.removeChild(childbox[i]); 
    }
  }