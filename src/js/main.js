const isBtActive = (n1, n2, n3) =>{
    if(n1){
        document.querySelector(`#n1`).classList.add("bt-control-activado");
        document.querySelector(`#n2`).classList.remove("bt-control-activado");
        document.querySelector(`#n3`).classList.remove("bt-control-activado");
    }
    if(n2){
        document.querySelector(`#n1`).classList.remove("bt-control-activado");
        document.querySelector(`#n2`).classList.add("bt-control-activado");
        document.querySelector(`#n3`).classList.remove("bt-control-activado");
    }
    if(n3){
        document.querySelector(`#n1`).classList.remove("bt-control-activado");
        document.querySelector(`#n2`).classList.remove("bt-control-activado");
        document.querySelector(`#n3`).classList.add("bt-control-activado");
    }
    if(n1 == false && n2 == false && n3 == false){
        document.querySelector(`#n1`).classList.remove("bt-control-activado");
        document.querySelector(`#n2`).classList.remove("bt-control-activado");
        document.querySelector(`#n3`).classList.remove("bt-control-activado")
    }
};
const velox = (id, livel, start) => {
    const element = document.querySelector(`#${id}`);
    element.animate([
        {transform : "rotate(0deg)"},
        {transform : "rotate(360deg)"}
    ],
    {
        duration : livel,
        iterations : start
    })
};
const controlVelox = (id) =>{
    if(id == "n1"){
       velox("gir", 700, Infinity);
       isBtActive(true, false, false)
    }
    if (id == "n2"){
        velox("gir", 500, Infinity);
        isBtActive(false, true, false)
    }
    if(id == "n3"){
         velox("gir", 300, Infinity);
         isBtActive(false, false, true)
    }
};

const btsControl = document.querySelectorAll(".bt-control");
btsControl.forEach(function(btControl){
    btControl.addEventListener("click", function(){
        controlVelox(this.id);
    });
});

document.querySelector("#off").addEventListener("click", function(){
    isBtActive(false, false, false);
    // desactive a animation
    document.querySelector("#gir").animate([
        {transform : "rotate(0deg)"},
        {transform : "rotate(0deg)"}
    ],
    {
        duration : 100,
        iterations : Infinity
    }
    )
});