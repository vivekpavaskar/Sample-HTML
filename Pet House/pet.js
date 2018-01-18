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
function checkreg(){
	var n=document.reg.fname.value;
	var e=document.reg.email.value;
	var u=document.reg.uid.value;
	var p=document.reg.pass.value;
	var r=document.reg.repass.value;
	var at=e.indexOf('@');
	var dot=e.lastIndexOf('.');
	if (n==null || n=="") {
		alert('Enter your name.');
	} else if (u==null || u=="") {
		alert('Enter a valid username.');
	} else if (p.length<6) {
		alert('Enter a password with at least 6 characters.');
	} else if (p!=r) {
		alert('password does not match');
	} else if (at<1 ||dot<at+2 || dot+2>e.length) {
		alert('Enter a valid email address');
	} else {
		return true;
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