function validarCamposObligatorios() {
  var bandera = true

  for (var i = 0; i < document.forms[0].elements.length; i++) {
    var elemento = document.forms[0].elements[i]
    if (elemento.value == '' && elemento.type == 'text') {
      if (elemento.id == 'cedula') {
        document.getElementById('mensajeCedula').innerHTML = '<br>La cedula esta vacia'
      }

      elemento.style.border = '1px red solid'
      elemento.className = 'error'
      bandera = false
    }
  }
  var cad = document.getElementById("cedula").value.trim();
  var total = 0;
  var longitud = cad.length;
  var longcheck = longitud - 1;

  if (cad !== "" && longitud === 10) {
    for (i = 0; i < longcheck; i++) {
      if (i % 2 === 0) {
        var aux = cad.charAt(i) * 2;
        if (aux > 9) aux -= 9;
        total += aux;
      } else {
        total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
      }
    }

    total = total % 10 ? 10 - total % 10 : 0;

    if (cad.charAt(longitud - 1) != total) {
      alert('Error: cedula invalida');
    }
  }
  if (!bandera) {
    alert('Error: revisar los comentarios')
  }


  return bandera

}

function validarLetras(elemento) {
  if (elemento.value.length > 0) {
    var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
    console.log(miAscii)

    if (miAscii >= 97 && miAscii <= 122) {
      return true
    } else {
      elemento.value = elemento.value.substring(0, elemento.value.length - 1)
      return false
    }
  } else {
    return true
  }

}

function validarNumero(elemento) {
  if (elemento.value.length > 0) {
    var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
    console.log(miAscii)

    if (miAscii >= 48 && miAscii <= 57) {
      return true
    } else {
      elemento.value = elemento.value.substring(0, elemento.value.length - 1)
      return false
    }
  } else {
    return true
  }


}

function validarCorreo(elemento) {
  var contenido = document.getElementById('correo').value;
  var conte = contenido.split("@");
  var v1 = conte[1];
  var est = 'est.ups.edu.ec';
  var est1 = 'ups.edu.ec';

  //alert(' VAL '+conte[1]+" variable "+est+" "+est1);
  if (contenido == "") {
    alert('el campo correo esta vacio');
  } else {
    if (contenido.length < 4) {
      alert('no es correo valido(1)');
    } else {
      if (v1 == est || v1 == est1) {
        alert(' correo valido');
      } else {
        alert("correo invalido");
      }
    }
  }
}



function esMayuscula(letra) {
  return letra === letra.toUpperCase();
}

function esMinuscula(letra) {
  return letra === letra.toLowerCase();
}
function esEspecial(letra) {
  if (miAscii >= 32 && miAscii <= 47) {
    return letra
  }
}

var lmayus = 0;
var lminus = 0;
var lesp = 0;
function validarContrasenia(elemento) {

  cadena = document.getElementById('contrasena').value;
  if (cadena.length < 8) {
    alert("la contrasenia debe tener un minimo de 8 caracteres");

  } else
    var miPalabra = cadena;
  for (var index = 0; index < miPalabra.length; index++) {
    var letraActual = miPalabra.charAt(index);
    // alert("letra " + letraActual);
    if (letraActual == "!" || letraActual == "#" || letraActual == "@" ||
      letraActual == "^" || letraActual == "%" || letraActual == "$" ||
      letraActual == "&" || letraActual == "*" || letraActual == "(" ||
      letraActual == "_" || letraActual == "-" || letraActual == ")" ||
      letraActual == "=" || letraActual == "+") {
      //alert("La letra " + letraActual + " es caracter especial");
      lesp = lesp + 1;

    }
    if (esMayuscula(letraActual)) {
      lmayus = lmayus + 1;
      //   alert("La letra " + letraActual + " es mayúscula");
    }

    if (esMinuscula(letraActual)) {
      lminus = lminus + 1;
      //  alert("La letra " + letraActual + " es minúscula");
    }

  }
  if (lmayus > 1 && lminus > 1 && lesp > 1) {
    alert('la contrasenia cumple con los requisitos');

  }else {
    alert('la contrasenia no cumple con los requisitos minimos');
  }
}


function validarFecha(elemento) {
  var contenido = document.getElementById('fechaNacimiento').value;
  var conte = contenido.split("/");
  

   if(conte[0]<=31 && conte[1]<=12 && (conte[2]>1800 && conte[2]<=2019) ){
alert('fecha ingresada correctamente');
}else{
  alert('la fecha ingresada debe tener el formato dd/mm/aaaa');
}
}

