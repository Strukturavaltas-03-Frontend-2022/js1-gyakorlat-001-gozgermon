const handleClick= ()=>{
    let buttons=document.querySelectorAll(".button");
    for(i=0;i<3;i=i+1)
    {
        let str_tmp=buttons[i].textContent;
        buttons[i].addEventListener("click", ()=>console.log(str_tmp));
    }
}




