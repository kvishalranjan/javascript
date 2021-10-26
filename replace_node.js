function replace_node()
{
    const h=document.createElement("h1");
    const txt=document.createTextNode('Heading 2 is replaced by heading 1');
    h.appendChild(txt);
    document.getElementById("div1").appendChild(h);

    //replacing h2 by new element
    const rep_h2=document.getElementById("node3");
    document.getElementById("div1").replaceChild(h,rep_h2);

    // to disable a button 
    document.getElementById("btn1").disabled=true;

}