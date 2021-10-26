var t=setInterval(name_set,4000);

function name_set()
{
    var a="Welcome ABC";
    alert(a);
}

function stop_name_set()
{
    clearInterval(t);
    document.getElementById("msg").innerHTML="you have sopped your name displaying";
}

// changing colors
var colors=["purple","red","blue","coral"];
var p=document.getElementById("change_color");

 function color_set()
 {
    setInterval(txtchange,2000);
   
 }

 function txtchange()
 {
    
        for(var i=0;i<colors.length;i++)
        {
            p1.style.color=colors[(colors.length+i)%colors.length];
        }
    
 }