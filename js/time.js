$(document).ready(function(){

	//time realated api with momentJS
    var currentTime;
    var month = moment().format('MMMM');
    var day = moment().format('Do');
    var time = moment().format('h:mm a');
	currentTime= moment().format('MMMM Do YYYY, h:mm:ss a');
	 // November 21st 2015, 5:34:23 pm
	$( "#time" ).text( time );
	$( "#date" ).text( day + " of " + month );
	console.log(currentTime, month, day, time);

});