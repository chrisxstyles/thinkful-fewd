$(document).ready(function(){
	// Input item and add when Enter is pressed
	$(document).keyup(function(e) {
  		if(e.keyCode==13) {
  			enteredItem = $('#add-items').val();
  			$("#list").append('<li class="active-item">' + '<i class="fa fa-square-o"></i>\n' + enteredItem + "</li>");
	  	}

	});

    $("#list").on("click", "i", function(){
		//alert("clicked");
		if($(this).hasClass("fa-square-o")) {
			$(this).parent().removeClass("active-item").addClass("completed-item");
			$(this).removeClass("fa-square-o").addClass("fa-check-square-o");
		} 
		else {
			$(this).parent().removeClass("completed-item").addClass("active-item");
			$(this).removeClass("fa-check-square-o").addClass("fa-square-o");
		}
	});

    $("#delete-items").on("click", function(){
    	//alert("clicked");
  		$('.completed-item').remove();
    });

});