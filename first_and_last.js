function create()
{
   
    // inserting image as nodebefore h2

    const img1=document.createElement("img");
    img1.src="machu_picchu.jpg"; //to mention source of image
    img1.setAttribute("width","300px");  //to set attribute using js
    img1.setAttribute("height","300px");  //to set attribute using js
    img1.setAttribute("title","Image added dynamically");
    document.body.insertBefore(img1,document.body.firstChild);

    //inserting a div after p(last-child of body)

    const div1=document.createElement("div");

    div1.style.backgroundColor="blue";
    div1.style.width="300px";
    div1.style.height="300px";
    document.body.appendChild(div1);
}

window.onload=create;