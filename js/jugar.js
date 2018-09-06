$(".jugabilidad").click(function(){
	$(".comenzar").removeAttr("disabled");
	$(".jugabilidad").removeClass("seleccionado");
	$(this).addClass("seleccionado");
	/*Cambio de color segun el seleccionado*/
	/*Habilita el boton "Comenzar"*/
});
$(".comenzar").click(function(){
	$(".jugabilidad").attr('disabled','disabled');
	Temporizador(3);});
	/*Muestra en boton comenzar una secuencia de 3s y redirecciona segun lo ordenado*/
function Temporizador(tiempo){
	$(".comenzar").text(tiempo);
	tempo = setTimeout(function(){4
		tiempo--;
		console.log(tiempo);
		$(".comenzar").text(tiempo);
		if(tiempo<0){
			$(".comenzar").text("GO!");
		//	switch($(".jugabilidad").val()){
		//		case "1":setTimeout(function(){location.href ="jugarVsPC.html";}, 500);break;
				//case "2":
				setTimeout(function(){location.href ="jugar2PJ.html";}, 500); // break;
		//	}
		}
		else{
			Temporizador(tiempo);
		}
	},1000);}
//location.href ="jugarVsPC.html";
//
