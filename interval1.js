
var colors=new Array("purple","red","blue","coral");

var i=0;
 function changeColor()
 {
    document.getElementById("change_color").style.color=colors[i];
    i=(i+1)% colors.length;
    
    
 }

 function Change()
 {
     setInterval("changeColor()",1000);
 }