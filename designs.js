// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	const rows = $("#input_height").val();
	const cols = $("#input_width").val();
	for (let i = 0 ; i < cols ; i++) {
    	$('#pixel_canvas').append('<tr></tr>');
    	for (let j = 0 ; j< rows; j++) {
        	$('#pixel_canvas').children().last().append('<td></td>');
    	}
    }	
}

$('form').on('submit', function(e) {	
	e.preventDefault();
	makeGrid();
});
