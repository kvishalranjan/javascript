function click_div()
{
    document.getElementById("para1").innerHTML="Left button pressed";
    document.getElementById("div1").removeEventListener("mouseup",div1_chng);
    document.getElementById("div1").addEventListener("click",change_division);
    document.getElementById("div1").addEventListener("mouseover",msg);
    
}



function change_division()
{
    document.getElementById("div1").className="change_div1";
    // document.getElementById("div1").className="Div will ot scale";
    // document.getElementById("div1").innerHTML+="<br>Mouse up event removed";
  
}

function div1_chng()
{
    document.getElementById("div1").style.width="300px";
    document.getElementById("div1").style.height="300px";
}

function msg()
{
    document.getElementById("para1").innerHTML="Mouse is over from div";
}