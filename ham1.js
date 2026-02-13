function hamburger(){
    const opt = document.querySelector(".rts");
    const ham = document.querySelector(".hmb");
    const ds = document.querySelector(".ds");

    if (window.innerWidth < 800){
        opt.style.display = "none";
        ds.style.display = "none";
        ham.style.display = "flex";
    }
    else{
        opt.style.display = "flex";
        ham.style.display = "none";
        ds.style.display = "flex";
    }
}

function hambclick(){
    const hama = document.querySelector(".hmc");
    const menu = document.querySelector(".menu");

    menu.style.display = "none";

    hama.addEventListener("click", ()=>{
         if (menu.style.display === "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
    });
}

hamburger();
hambclick();

window.addEventListener("resize",hamburger);