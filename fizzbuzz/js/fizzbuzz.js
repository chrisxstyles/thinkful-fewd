$(document).ready(function(){

	for (i = 1; i < 101; i++){
		if (i % 3 != 0 && i % 5 != 0){
			$("body").append("<br>" + i);
		}
		else if (i % 3 == 0 && i % 5 == 0){
			$("body").append("<br> fizzbuzz");
		}
		else if (i % 3 == 0){
			$("body").append("<br> fizz");
		}
		else if (i % 5 == 0){
			$("body").append("<br> buzz");
		}
	};

});

