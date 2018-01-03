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

function drawDelete() {
	var draw = false;
	var draw_del = false;
	var bk_color = '';
	// stops the right click from displaying menu 
	document.oncontextmenu = function() {
	return false;
	};
	//colors or delete the color with left/right click
	$('#pixel_canvas').on('mousedown', 'td', function(event) {
		switch (event.which) {
			case 1:
				draw = true; 
				draw_del = false;
				var color = $('#colorPicker').val();
				$(this).css('background-color', color);
				break;
			case 2:
				draw_del = false;
				break;
			case 3:
				draw_del = true; 
				$(this).css('background-color', bk_color);
				break;
		}	
	});
	//prevents actions while the mouse is up
	$('#pixel_canvas').on('mouseup', 'td', function(event) {
		switch (event.which) {
			case 1:
				draw=false;
				draw_del = false;
				break;
			case 2:
				draw_del = false;
				break;
			case 3:
				draw_del = false;
				break;
		}		
	});
	//paints and deletes on mouseenter (left/right click)
	$('#pixel_canvas').on('mouseenter', 'td', function(){
		if(draw_del) {
			$(this).css('background-color', bk_color); 
		} else if(draw) {
			var color = $('#colorPicker').val();
			$(this).css('background-color', color); 
		}
		else {
			return;
		}
	//prevents coloring after reentering the grid 
	$('#pixel_canvas').on('mouseleave', function(){ 
		draw_del = false;
		draw = false;
		return;	
		});
	});
}

//function to fill the grid
function fillGrid() {
	$('#fill_grid').click(function() {
		var bg_color = $('#bg_colorPicker').val();
		$('#pixel_canvas').css('background-color', bg_color);
	});
}

//calling functions on submit
$('form').on('submit', function(e) {	
	e.preventDefault();
	makeGrid();
	drawDelete();
	fillGrid()
});
