var carpeta = 0;
const numArchivosTresD = 24;
const numArchivosUnity = 12;

function iniciar(){
    mostrarImagenes(1);
}


function mostrarImagenes(value){
    carpeta = value;
    console.log(carpeta);
    let zonaBase = document.querySelector(".zonaBase");
    let zonaImg = document.querySelector(".zonaImg");
  
    
    while(zonaImg.firstChild){
        zonaImg.removeChild(zonaImg.lastChild);
    }
    if(carpeta == 1){
        for(i = numArchivosTresD; i>=1; i--){
            let img = document.createElement("img");
            img.setAttribute("id", `${i}`);
            img.setAttribute("src", `./ima/minis/1/${i}.png`);
            console.log(img);
            img.addEventListener("click", function(){
                console.log(this);
            document.location.href = `${this.id}.html`;
            });
            zonaImg.appendChild(img);
        }
        for(i = 1; i<=numArchivosUnity; i++){
            let img = document.createElement("img");
            img.setAttribute("id", `${i}`);
            img.setAttribute("src", `./ima/minis/2/${i}.png`);
            img.addEventListener("click", function(){
                document.location.href = `u${this.id}.html`;
                });
            zonaImg.appendChild(img);
        }
        
    }
    if(carpeta == 2){
        for(i = 1; i<=numArchivosTresD; i++){
            let img = document.createElement("img");
            img.setAttribute("id", `${i}`);
            img.setAttribute("src", `./ima/minis/1/${i}.png`);
            img.addEventListener("click", function(){
                document.location.href = `${this.id}.html`;
                });
            zonaImg.appendChild(img);
        }
        
    }
    if(carpeta == 3){
        for(i = 1; i<=numArchivosUnity; i++){
            let img = document.createElement("img");
            img.setAttribute("id", `${i}`);
            img.setAttribute("src", `./ima/minis/2/${i}.png`);
            img.addEventListener("click", function(){
                document.location.href = `u${this.id}.html`;
                });
            zonaImg.appendChild(img);
        }
        
    }


}



window.onload = iniciar();