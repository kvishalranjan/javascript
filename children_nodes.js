function get_childnode()
{
   var d=document.getElementById("div1").childNodes;
   var l=document.getElementById("div1").childNodes.length;
//    alert(l);
for(var i=0;i<l;i++)
{
    document.getElementById("show").innerHTML+="<br>"+d[i].nodeName;
}

var ch=document.getElementById("div1").children;
var len=document.getElementById("div1").children.length;
for(var i=0;i<len;i++)
{
    document.getElementById("show_child").innerHTML+="<br>"+ch[i].tagName;
}   
}
window.onload=get_childnode;