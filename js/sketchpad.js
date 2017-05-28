$(document).ready(function() {
	
	generateGrid(16);
	
	run();
});

// color when hover over and listen for button
function run(){
	
	var tile = $('.tile');
	
	tile.on('mouseenter', function () {
			$(this).addClass('color');
	});
	
	$('button').on('click', reset);
	
}

// creates the individual element in grid
function createDiv() {
	
	return $('<div class="tile"></div>');
	
}

// when called, prompts user, removes previous grid and creates new one
function reset() {
	
	var length = +prompt("Please enter the number of boxes per side.");
	
	$('.tile').remove();
	
	if (length != null) {

		generateGrid(length);
	
	} else {
		
		generateGrid(16);	

	}
	
	run();

}

// creates the square grid using the number input.
function generateGrid(number){

	for (var i = 0; i < (number * number); i++) {
		
		$('#wrapper').append(createDiv());
	}
	
	$('.tile').css({'width': 'calc(100% / ' + number + ')', 'padding-top': 'calc(100% / ' + number + ')'});	
	
}

