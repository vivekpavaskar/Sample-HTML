function checklogin() {
	var u=document.loginform.uid.value;
	var p=document.loginform.pass.value;
	if (u=="" || u==null) {
		alert('Enter a valid username.');
	}else if (p.length<6) {
		alert('Enter a valid 6 character password.');
	} else {
		alert('You have loged in successfully.');
		var lf=document.getElementById("lf");
		lf.style.display="none";
	}
}

var si=0;
				slideshows();
				function slideshows() {
					var i;
					var s=document.getElementsByClassName("slide");
					for (i = 0; i < s.length; i++) {
						s[i].style.display="none";
					}
					si++;
					if(si>s.length){si=1}
						s[si-1].style.display="block";
					setTimeout(slideshows,2000);
				}