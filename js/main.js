
function submitFunction(){
	var q1 = document.getElementById('q1');
	var q2 = document.getElementById('q2');
	var v1 = document.getElementById('v1');
	var v2 = document.getElementById('v2');
	T1 = v1.value;
	T2 = v2.value;
	setInterval(myFunction, 1000);
}

var trajectory1 = document.getElementsByClassName("trajectory1")[0];
var trajectory2 = document.getElementsByClassName("trajectory2")[0];
var trajectory3 = document.getElementsByClassName("trajectory3")[0];
var trajectory4 = document.getElementsByClassName("trajectory4")[0];
var trajectory5 = document.getElementsByClassName("trajectory5")[0];

var c1 = document.getElementsByClassName("c1")[0];
var c2 = document.getElementsByClassName("c2")[0];
var c3 = document.getElementsByClassName("c3")[0];
var c4 = document.getElementsByClassName("c4")[0];
var c5 = document.getElementsByClassName("c5")[0];

var i = 1;

function myFunction() {
	rotate1 = i * 45;
	rotate2 = i * 45;
	rotate3 = i * 45;
	rotate4 = i * 45;
	rotate5 = i * 45;

	switch (i%8) {
    case 1:
    	s1 = T1;
		s2 = T1;
		s3 = T1;
		s4 = T1;
		s5 = T2;
		c1.style.backgroundColor = "red";
		c2.style.backgroundColor = "red";
		c3.style.backgroundColor = "red";
		c4.style.backgroundColor = "red";
		c5.style.backgroundColor = "blue";
		break;
    case 2:
    	s1 = T1;
		s2 = T1;
		s3 = T1;
		s4 = T2;
		s5 = T2;
		c1.style.backgroundColor = "red";
		c2.style.backgroundColor = "red";
		c3.style.backgroundColor = "red";
		c4.style.backgroundColor = "blue";
		c5.style.backgroundColor = "blue";
        break;
    case 3:
    	s1 = T1;
		s2 = T1;
		s3 = 1;
		s4 = 1;
		s5 = 1;
		c1.style.backgroundColor = "red";
		c2.style.backgroundColor = "red";
		c3.style.backgroundColor = "blue";
		c4.style.backgroundColor = "blue";
		c5.style.backgroundColor = "blue";
    	break;
    case 4:
    	s1 = T1;
		s2 = T2;
		s3 = T2;
		s4 = T2;
		s5 = T2;
		c1.style.backgroundColor = "red";
		c2.style.backgroundColor = "blue";
		c3.style.backgroundColor = "blue";
		c4.style.backgroundColor = "blue";
		c5.style.backgroundColor = "blue";
    	break;
    case 5:
    	s1 = T2;
		s2 = T2;
		s3 = T2;
		s4 = T2;
		s5 = T1;
		c1.style.backgroundColor = "blue";
		c2.style.backgroundColor = "blue";
		c3.style.backgroundColor = "blue";
		c4.style.backgroundColor = "blue";
		c5.style.backgroundColor = "red";
    	break;
    case 6:
    	s1 = T2;
		s2 = T2;
		s3 = T2;
		s4 = T1;
		s5 = T1;
		c1.style.backgroundColor = "blue";
		c2.style.backgroundColor = "blue";
		c3.style.backgroundColor = "blue";
		c4.style.backgroundColor = "red";
		c5.style.backgroundColor = "red";
    	break;
    case 7:
    	s1 = T2;
		s2 = T2;
		s3 = T1;
		s4 = T1;
		s5 = T1;
		c1.style.backgroundColor = "blue";
		c2.style.backgroundColor = "blue";
		c3.style.backgroundColor = "red";
		c4.style.backgroundColor = "red";
		c5.style.backgroundColor = "red";
        break;
    default:
        s1 = T2;
		s2 = T1;
		s3 = T1;
		s4 = T1;
		s5 = T1;
		c1.style.backgroundColor = "blue";
		c2.style.backgroundColor = "red";
		c3.style.backgroundColor = "red";
		c4.style.backgroundColor = "red";
		c5.style.backgroundColor = "red";
	}
	
	console.log("c1="+s1);
	console.log("c2="+s2);
	console.log("c3="+s3);
	console.log("c4="+s4);
	console.log("c5="+s5);
	console.log("----------");

	trajectory1.style.WebkitTransform = 'rotate('+rotate1+'deg)';
	trajectory1.style.transform = 'rotate('+rotate1+'deg)';

	trajectory2.style.WebkitTransform = 'rotate('+rotate2+'deg)';
	trajectory2.style.transform = 'rotate('+rotate2+'deg)';

	trajectory3.style.WebkitTransform = 'rotate('+rotate3+'deg)';
	trajectory3.style.transform = 'rotate('+rotate3+'deg)';

	trajectory4.style.WebkitTransform = 'rotate('+rotate4+'deg)';
	trajectory4.style.transform = 'rotate('+rotate4+'deg)';

	trajectory5.style.WebkitTransform = 'rotate('+rotate5+'deg)';
	trajectory5.style.transform = 'rotate('+rotate5+'deg)';

	trajectory1.style.WebkitTransitionDuration = s1 + 's';
	trajectory1.style.transitionDuration = s1 + 's';

	trajectory2.style.WebkitTransitionDuration = s2 + 's';
	trajectory2.style.transitionDuration = s2 + 's';

	trajectory3.style.WebkitTransitionDuration = s3 + 's';
	trajectory3.style.transitionDuration = s3 + 's';

	trajectory4.style.WebkitTransitionDuration = s4 + 's';
	trajectory4.style.transitionDuration = s4 + 's';

	trajectory5.style.WebkitTransitionDuration = s5 + 's';
	trajectory5.style.transitionDuration = s5 + 's';

	i++;
}
