/* FUNCION DE ONLINE LETRAS CAYENDO 
$('.nombre .letters').each(function(){
$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
.add({
targets: '.nombre .letter',
translateY: ["1.1em", 0],
translateZ: 0,
duration: 750,
delay: function(el, i) {
	return 50 * i;
}
});

*/
var orientation = window.orientation;
	
function Temporizador(tiempo){
	$(".comenzar").text(tiempo);
	tempo = setTimeout(function(){4
		tiempo--;
		console.log(tiempo);
		$(".comenzar").text(tiempo);
		if(tiempo<0){
			$(".comenzar").text("Suerte!!!");
			setTimeout(function(){location.href ="game.html";}, 500); // break;
		}
		else{
	Temporizador(tiempo);
		}
},1000);}

if (orientation == 90){
	$(".comenzar").css("visibility", "visible")
    Temporizador(3);
}

window.addEventListener("orientationchange", function() {
    $(".comenzar").css("visibility", "visible")
    Temporizador(3);
}, false);

