$(document).ready(function(){
	// on enter key, print value
	$(document).keyup(function(e) {
  		if(e.keyCode==13) {
  			enteredItem = $('#add-items').val();
  			$("#list").append("<li>" + enteredItem + "</li>");
	  	}
	});

});