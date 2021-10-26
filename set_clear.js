var t=window.setTimeout("showtime()",5000);

function showtime()
{
    var time=new Date();
    time=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    document.getElementById("result").innerHTML=time;
    document.getElementById("stop_btn").disabled="true";
}

function stoptime()
{
    window.clearTimeout(t);
    document.getElementById("result").innerHTML="you have clicked stop button.";
    document.getElementById("result").innerHTML+="No time will be displayed";
}