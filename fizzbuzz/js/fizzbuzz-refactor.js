

//var t = document.createTextNode("test");
//document.body.appendChild(t); 


function getText(){
	n = Number(document.getElementById("number").value);
	fizzbuzz(n);
	return false;
};

function makeBr(){
	var br = document.createElement("br");
	document.body.appendChild(br);
};

function display(i){
	var t = document.createTextNode(i);
	document.body.appendChild(t);
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