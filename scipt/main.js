var t;
var currentIndex=1;
		
function next(){
			clearInterval(t);
			if(currentIndex < 7){
				currentIndex++;
				document.getElementById("hinhslide").src="image/" + currentIndex + ".jpg";
			}
			else{
				currentIndex=1;
				document.getElementById("hinhslide").src="image/" + currentIndex + ".jpg";
			}
			t = setInterval("next()", 3000);
		}
		function back(){
			clearInterval(t);
			if(currentIndex > 1){
				currentIndex--;
				document.getElementById("hinhslide").src="image/" + currentIndex + ".jpg";
			}
			else{
				currentIndex=7;
				document.getElementById("hinhslide").src="image/" + currentIndex + ".jpg";	
			}
			t = setInterval("next()", 3000);
		}
		t = setInterval("next()", 3000);

		
