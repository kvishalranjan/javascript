function create()
{
    const p1=document.createElement("h1");   //to create a new element
    const txt=document.createTextNode("This heading is created dynamically");
    p1.appendChild(txt);
    document.getElementById("div1").appendChild(p1);
    // inserting image as nodebefore h2

    const img1=document.createElement("img");
    img1.src="machu_picchu.jpg"; //to mention source of image
    img1.setAttribute("width","300px"); 
    img1.setAttribute("height","300px");
    img1.setAttribute("title","Image added dynamically");
    const ins_before=document.getElementById("node3");
    document.getElementById("div1").insertBefore(img1,ins_before);
}

window.onload=create;