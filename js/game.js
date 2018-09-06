
var rachaBot=0,rachaJugador=0;
var vidasBot=3,vidasJugador=3;
var eleccionBot=3,eleccionJugador=3;//3 es indefinido
$("document").ready(function(){
	setTimeout(function(){tempoEleccion(5);}, 2000);
});
$(".gif-personaje").click(function(){
	$(".gif-personaje").removeClass("seleccionado");
	$(this).addClass("seleccionado");
	switch ($(this).attr("id")) {
		case 'piedra':
			eleccionJugador=0;
			break;
		case 'papel':
			eleccionJugador=1;
			break;
		case 'tijera':
			eleccionJugador=2;
			break;
    }
});
$(".reiniciar").click(function(){
	$("#btn-middle").css("display","none");
	$("#papel").css("display","block");
	$("#img-j1").attr("src","css/images/piedra-frente.gif");
	$("#img-j2").attr("src","css/images/tijera-frente.gif");
	$("#img-middle").css("visibility","visible");
	$("#cartelj1").removeAttr("src");
	$("#cartelj2").removeAttr("src");
	rachaBot=0,rachaJugador=0;
	$("#racha-j1").text("0"+rachaJugador);
	$("#racha-j2").text("0"+rachaJugador);
	vidasBot=3,vidasJugador=3;
	actualizarCorazones();
	tempoEleccion(5);
	$(".gif-personaje").removeClass("seleccionado");
});
$(".continuar").click(function(){
	$("#btn-middle").css("display","none");
	$("#papel").css("display","block");
	$("#img-j1").attr("src","css/images/piedra-frente.gif");
	$("#img-j2").attr("src","css/images/tijera-frente.gif");
	$("#img-middle").css("visibility","visible");
	$(".gif-personaje").removeClass("seleccionado");
	$("#cartelj1").removeAttr("src");
	$("#cartelj2").removeAttr("src");
	reset();
	vidasBot=3;
	vidasJugador=3;
	actualizarCorazones();
	tempoEleccion(5);
});
function tempoEleccion(tiempo){
	
	$(".temporizador").text(tiempo);
	var temporizador = setTimeout(function(){
		tiempo--;
		if(tiempo==-1){
			clearTimeout(tempoEleccion);
			jugar();
		}
		else{  
			tempoEleccion(tiempo);
		}
    },1000);
}
function jugar(){
	if(eleccionJugador==3){eleccionJugador=Math.floor(Math.random()*3);}
	eleccionBot= Math.floor(Math.random()*3);//eleccion bot
	$(".gif-personaje").removeClass("seleccionado");
	$(".temporizador").text("");
	compararPPT();
}
function actualizarCorazones(){
	for(i=1;i<3;i++){
		for(j=1;j<4;j++){
			$("#vida"+j+"-j"+i).removeClass("icon-heart");
			$("#vida"+j+"-j"+i).addClass("icon-heart-broken");
		}
	}
	for(i=1;i<=vidasJugador;i++){
		$("#vida"+i+"-j1").removeClass("icon-heart-broken");
		$("#vida"+i+"-j1").addClass("icon-heart");
	}
	for(i=1;i<=vidasBot;i++){
		$("#vida"+i+"-j2").removeClass("icon-heart-broken");
		$("#vida"+i+"-j2").addClass("icon-heart");
	}
	if(vidasJugador==0){
		rachaBot++;
		if(rachaBot<10){$("#racha-j2").text("0"+rachaBot);}
		else{$("#racha-j2").text(rachaBot);}
	}
	else if(vidasBot==0){
		rachaJugador++;
		if(rachaJugador<10){$("#racha-j1").text("0"+rachaJugador);}
		else{$("#racha-j1").text(rachaJugador);}
	}
}
function compararPPT(){
	$("#img-middle").css("visibility","hidden");
	if(eleccionJugador==eleccionBot){
		switch (eleccionJugador){
			case 0:
				/*EmpatePiedra*/
				document.getElementById("img-j1").src ="css/images/piedra-izquierda.png";
				document.getElementById("img-j2").src ="css/images/piedra-derecha.png";
				$("#gif-personaje").removeClass("seleccionado");
				break;
			case 1:
				/*EmpatePapel*/
				document.getElementById("img-j1").src ="css/images/papel-izquierda.png";
				document.getElementById("img-j2").src ="css/images/papel-derecha.png";
				$("#gif-personaje").removeClass("seleccionado");
				break;
			case 2:
				/*EmpateTijera*/
				document.getElementById("img-j1").src ="css/images/tijera-izquierda.png";
				document.getElementById("img-j2").src ="css/images/tijera-derecha.png";	
				$("#gif-personaje").removeClass("seleccionado");
				break;
		}
	}
	else if (eleccionJugador==0){
		switch(eleccionBot){
			case 1:
				/*PiedraVsPapel*/
				document.getElementById("img-j1").src ="css/images/piedra-piso.png";
				document.getElementById("img-j2").src ="css/images/papel-derecha.png";								
				$("#gif-personaje").removeClass("seleccionado");
				$("#cartelj2").attr('src', 'css/images/victoria-papel.jpg');
				vidasJugador--;break;
			case 2:
				/*PiedraVSTijera*/
				document.getElementById("img-j1").src ="css/images/piedra-izquierda.png";
				document.getElementById("img-j2").src ="css/images/tijera-piso.png";								
				$("#gif-personaje").removeClass("seleccionado");
				$("#cartelj1").attr('src', 'css/images/victoria-piedra.jpg');
				vidasBot--;break;
		}
	}
	else if (eleccionJugador==1){
		switch(eleccionBot){
			case 0:
				/*PapelVSPiedra*/
				document.getElementById("img-j1").src ="css/images/papel-izquierda.png";
				document.getElementById("img-j2").src ="css/images/piedra-piso.png";							
				$("#gif-personaje").removeClass("seleccionado");
				$("#cartelj1").attr('src', 'css/images/victoria-papel.jpg');
				vidasBot--;break;
			case 2:
				/*PapelVSTijera*/
				document.getElementById("img-j1").src ="css/images/papel-piso.png";
				document.getElementById("img-j2").src ="css/images/tijera-derecha.png";								
				$("#gif-personaje").removeClass("seleccionado");
				$("#cartelj2").attr('src', 'css/images/victoria-tijera.jpg');
				vidasJugador--;break;
		}
	}
	else if (eleccionJugador==2){
		switch(eleccionBot){
			case 0:
				/*TijeraVsPiedra*/	
				document.getElementById("img-j1").src ="css/images/tijera-piso.png";
				document.getElementById("img-j2").src ="css/images/piedra-derecha.png";								
				$("#gif-personaje").removeClass("seleccionado");
				$("#cartelj2").attr('src', 'css/images/victoria-piedra.jpg');
				vidasJugador--;break;
			case 1:
				/*TijeraVSPapel	*/
				document.getElementById("img-j1").src ="css/images/tijera-izquierda.png";
				document.getElementById("img-j2").src ="css/images/papel-piso.png";								
				$("#gif-personaje").removeClass("seleccionado");
				$("#cartelj1").attr('src', 'css/images/victoria-tijera.jpg');
				vidasBot--;break;
		}
	}
	actualizarCorazones();
	if(vidasJugador==0||vidasBot==0){
		$("#papel").css("display","none");
		$("#btn-middle").css("display","block");
	}
	else{
		setTimeout(function(){
			eleccionJugador=3
			$("#cartelj1").removeAttr("src");
			$("#cartelj2").removeAttr("src");
			$("#img-j1").attr("src","css/images/piedra-frente.gif");
			$("#img-j2").attr("src","css/images/tijera-frente.gif");
			$("#img-middle").css("visibility","visible");
			tempoEleccion(5);
		},3000);	
	}
	
}
//var anim1 = document.getElementById("piedra").style.animation ="aparecer-contenedor 2s ease-out";
function guardarCookie(nombre,valor,fecha) {
          document.cookie=nombre+"="+valor+";expires="+fecha;
}
var caduca = "31 Dec 2020 23:59:59 GMT";
function guardar() {
         var miCookie = "nombreusuario";
         var miValor = document.dato.Cookie.value;
         guardarCookie(miCookie,miValor,caduca);
}
function leerCookie(nombre_cookie) {
    // Obtener un array con el nombre y valor de una cookie guardados como cadena, en cada posición:
    var aCookies = document.cookie.split(";");
    // Variables auxiliares:
    var contador;
    var posicionSignoIgual;
    var nombreCookie;
    var valorCookie;
    for( contador=0; contador < aCookies.length; contador++ ) {
        // Obtenemos la posición en la que está el signo igual
        // No lo ponemos fuera del bucle porque los nombres puede que no tengan la misma longitud
        posicionSignoIgual = aCookies[contador].indexOf("=");
        // Obtenemos el nombre de la Cookie, eliminando espacios
        nombreCookie = aCookies[contador].substring( 0, posicionSignoIgual ).replace(" ", "");
        if( nombreCookie == nombre_cookie ) {
            // Añadimos 1 'posicionSignoIgual' porque con substring() las posiciones de la cadena comienzan desde cero:
            valorCookie = aCookies[contador].substring( posicionSignoIgual + 1 );
        }
    }
    return valorCookie;
}
function mostrarCookie() {
var valor = leerCookie("nombreusuario");
if ( valor != undefined ) {
    document.getElementById("nombre-j1").innerHTML = valor;
    document.getElementById("nombrePJ").innerHTML = valor;
}
}