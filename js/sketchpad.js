$(document).ready(function() {
	
	generateGrid(16);
	
	$('button').on('click', reset);
	
});

// when called, prompts user, removes previous grid and creates new one
function reset() {
	
	$('.tile').removeClass('colored');	
	
	var length = prompt("Please enter the number of boxes per side.", "16");	
	
	if (length > 0 && length < 100) {

		generateGrid(length);
	
	} else {
		
		generateGrid(16);	

	}
}

// creates the square grid using the number input.
function generateGrid(number){
	
	$('#wrapper').empty();

	for (var i = 0; i < (number * number); i++) {
		
		$('#wrapper').append('<div class="tile"></div>');
	}
	
	$('.tile').css({'width': 'calc(100% / ' + number + ')', 'padding-top': 'calc(100% / ' + number + ')'});	
	
	
	var tile = $('.tile');
	
	tile.on('mouseenter', function () {
		
		if (!$(this).hasClass('colored')) {
			$(this).addClass('colored');
			
			// random hex color
			var colorR = Math.floor((Math.random() * 256));
			var colorG = Math.floor((Math.random() * 256));
			var colorB = Math.floor((Math.random() * 256));
			$(this).css({'backgroundColor': 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')'});
			
		} else {		// if square already colored, darken shade by 10%
			
			var oldColor = $(this).css('background-color');
			
			var newColor = shadeBlend(-0.3, oldColor);
			
			$(this).css({'background-color': newColor});
			
		}
	});
}

// darken or lighten an element's color
// credit to Pimp Trizkit at https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeBlend(p,c0,c1) {
    var n=p<0?p*-1:p,u=Math.round,w=parseInt;
    if(c0.length>7){
        var f=c0.split(","),t=(c1?c1:p<0?"rgb(0,0,0)":"rgb(255,255,255)").split(","),R=w(f[0].slice(4)),G=w(f[1]),B=w(f[2]);
        return "rgb("+(u((w(t[0].slice(4))-R)*n)+R)+","+(u((w(t[1])-G)*n)+G)+","+(u((w(t[2])-B)*n)+B)+")"
    }else{
        var f=w(c0.slice(1),16),t=w((c1?c1:p<0?"#000000":"#FFFFFF").slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF;
        return "#"+(0x1000000+(u(((t>>16)-R1)*n)+R1)*0x10000+(u(((t>>8&0x00FF)-G1)*n)+G1)*0x100+(u(((t&0x0000FF)-B1)*n)+B1)).toString(16).slice(1)
    }
}