function checklogin() {
	var u=document.login.uid.value;
	var p=document.login.pass.value;
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
	var n=document.reg.name.value;
	var a=document.reg.age.value;
	var e=document.reg.email.value;
	var m=document.reg.contact.value;
	var u=document.reg.uid.value;
	var p=document.reg.pass.value;
	var r=document.reg.repass.value;
	var at=e.indexOf('@');
	var dot=e.lastIndexOf('.');
	if (n==null || n=="") {
		alert('Enter your name.');
	} else if (a=="" || a==null || a==NaN) {
		alert('Enter your age in number.');
	} else if (a<14) {
		alert('Age below 14 are not eligible.');
	} else if (at<1 ||dot<at+2 || dot+2>e.length) {
		alert('Enter a valid email address.');
	} else if (m.length<10 || m.length>10) {
		alert('Enter a 10 digit valid number.');
	} else if (u==null || u=="") {
		alert('Enter a valid username.');
	} else if (p.length<6) {
		alert('Enter a password with at least 6 characters.');
	} else if (p!=r) {
		alert('password does not match');
	} else {
		alert('You are registered successfully.');
	}
}

var si=0;
				slideshows();
				function slideshows() {
					var s=document.getElementsByClassName("slide");
					for (var i = 0; i < s.length; i++) {
						s[i].style.display="none";
					}
					si++;
					if(si>s.length){si=1}
						s[si-1].style.display="block";
					setTimeout(slideshows,2000);
				}