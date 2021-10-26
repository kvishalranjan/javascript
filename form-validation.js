function validate()
{
    if (document.getElementById("fname").value == "")
    {
        alert("First name cannot be blank");
        return false;
    }
    if (document.getElementById("lname").value == "")
    {
        alert("last name cannot be  blank");
        return false;
    }
    check_radio();
    check_dropdown();
    check_hobbies();
    // return false;
    //check dropdown();
    if (document.getElementById("class10").value == "")
    {
    alert("X percentage cannot be  blank");
    return false;
    }
    if (document.getElementById("year10").value == "")
    {
    alert("X passing year cannot be  blank");
    return false;
    }
}

function  check_radio()
{
    var gen = document.getElementsByName("gender");
    var gen_checked= false;
    var i=0;
    while (!gen_checked && i<gen.length)
    {
        if(gen[i].checked)
        gen_checked = true;
        i++;
    }
    if (!gen_checked)
    {
        alert("Select Gender");
    }
}

function check_hobbies()
{
    var h = document.getElementsByName("hobbies");
    var h_checked= false;
    var i=0;
    while (!h_checked && i<h.length)
    {
        if(h[i].checked)
        h_checked = true;
        i++;
    }
    if (!h_checked)
    {
        alert("Select a hobby");
    }
    return false;
}

function check_dropdown()
{
    var d = document.getElementById("ddl_date");
    var m=document.getElementById("ddl_month");
    var y=document.getElementById("ddl_year");
    var d_value = d.options[d.selectedIndex].text;
    var m_value = m.options[m.selectedIndex].text;
    var y_value = y.options[y.selectedIndex].text;
    if (d_value == "Date")
    {
        alert("Select a date");
    }

    if (m_value == "Month")
    {
        alert("Select a month");
    }

    if (y_value == "Year")
    {
        alert("Select a year");
    }

}
document.getElementById("addr").removeEventListener("keypress",validate_10per);
window.addEventListener("keypress",validate_10per);
window.addEventListener("keypress",validate_10year);
function validate_10per(e)
{
    // var x=document.getElementById("class10").value;
    var ch=e.keyCode;
    if(ch>=65 && ch<=90 || ch>=97 && ch<=122)
    {
        alert("Enter only numbers in class X percentage");
        window.removeEventListener("keypress,validate_10year");
    }
}
 function validate_10year(e)
 {
    //  var x=document.getElementById("year10").value;
     var ch=e.keyCode;
     if(ch>=65 &&  ch<=90 || ch>=97 && ch<=122)
     {
         alert("Enter only numbers in class X passing year")
     }
 }
 function onlyletter(e,t)
 {
     if (window.event)
     {
         
     }
 }