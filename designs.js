// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	let rows = $('#input_height').val();
	let cols = $('#input_width').val();

	//remove the previous designs
	$('#pixel_canvas').children().remove();

	//loops to draw the grid
	for (let i = 0 ; i < rows ; i++) {
    	$('#pixel_canvas').append('<tr></tr>');
    	for (let j = 0 ; j< cols; j++) {
        	$('#pixel_canvas').children().last().append('<td></td>');
    	}
    }	
}

//drag and draw
function makeColor() {
	var draw = false;
	$('#pixel_canvas').on('mousedown', 'td', function(){
		draw = true; 
		var color = $('#colorPicker').val();
		$(this).css('background-color', color);
	});
	$('#pixel_canvas').on('mouseup', 'td', function() {
		draw=false;
	});
	$('#pixel_canvas').on('mouseenter', 'td', function(){
		if(draw) {
			var color = $('#colorPicker').val();
			$(this).css('background-color', color); 
		}
		else {
			return;
		}

	//prevents coloring after reentering the grid 
	$('#pixel_canvas').on('mouseleave', function(){ 
		draw = false;
		return;	
	});
	});
}

//calling functions on submit
$('form').on('submit', function(e) {	
	e.preventDefault();
	makeGrid();
	makeColor()
});
