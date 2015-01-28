

//var t = document.createTextNode("test");
//document.body.appendChild(t); 


function launchFizzBuzz(){
	n = Number(document.getElementById("number").value);
	clearFizzBuzzContainer();
	fizzbuzz(n);	
};

function clearFizzBuzzContainer() {
	document.getElementById("fizzBuzzContainer").innerHTML = "";
};

function makeBr(){
	var br = document.createElement("br");
	document.getElementById("fizzBuzzContainer").appendChild(br);
};

function display(i){
	var t = document.createTextNode(i);
	document.getElementById("fizzBuzzContainer").appendChild(t);
};

function fizzbuzz(n){
	for (i = 1; i <= n; i++){
		if (i % 3 != 0 && i % 5 != 0){
			display(i);
			makeBr();
		}
		else if (i % 3 == 0 && i % 5 == 0){
			display("fizzbuzz");
			makeBr();
		}
		else if (i % 3 == 0){
			display("fizz");
			makeBr();
		}
		else if (i % 5 == 0){
			display("buzz");
			makeBr(i);
		}
	}
};