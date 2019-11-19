var imagenes=[     'imagenes/AF2.jpg',
'imagenes/coombinacion.jpg',
'imagenes/logoES.jpg',
'imagenes/Sibri.jpg',
'imagenes/Sibri1.jpg',
'imagenes/logoestrella.jpg',
'imagenes/logoES1.jpg',
'imagenes/logoES2.jpg',
'imagenes/pasta.jpg',
'imagenes/logoES3.jpg'
];

function reinicio(){
    var imagenes=[     'imagenes/AF2.jpg',
    'imagenes/coombinacion.jpg',
    'imagenes/logoES.jpg',
    'imagenes/Sibri.jpg',
    'imagenes/Sibri1.jpg',
    'imagenes/logoestrella.jpg',
    'imagenes/logoES1.jpg',
    'imagenes/logoES2.jpg',
    'imagenes/pasta.jpg',
    'imagenes/logoES3.jpg'];
}

function deshabilitar(){
    var boton1=document.getElementById("boton1");
    var boton3=document.getElementById("boton3");
    boton1.disabled=true;
    boton3.disabled=false;
}
boton1.disabled=true;
boton3.disabled=true;

var num=0;

    function aleatorio(){
        num=0;
        reinicio();
        for(i=0;i<5;i++){
            var aleimagen=  Math.floor((Math.random()*9)+1);  
            aux=imagenes[i];
            imagenes[i]=imagenes[aleimagen];
            imagenes[aleimagen]=aux;

        }
        deshabilitar();

    }
              


function habilitar(){

}

function adelante(){
    boton1.disabled=false
    num++;
    if(num==5){
    boton3.disabled=true
    }

    foto.src=imagenes[num];
}

function atras(){
    boton3.disabled=false

    num--;
    if(num==1)
    boton1.disabled=true  

    foto.src=imagenes[num];   
    
}