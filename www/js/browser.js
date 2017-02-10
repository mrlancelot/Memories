function sizeB(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById('browserintro').style.height = h + "px";
    document.getElementById('browserintro').style.width = w + "px";
		document.getElementById('browser').style.height = h + "px";
    document.getElementById('browser').style.width = w + "px";
		document.getElementById('email').innerHTML = sessionStorage.email;
		if(sessionStorage.browser)
		{
			skip();
		}
		else {
			sessionStorage.browser= 1;
		}
}
var a=1;
function nximg(){
	if(a==1)
	{
		document.getElementById('disp').src = "other/browimg2.gif"
		document.getElementById('detail').innerHTML = "Don't worry this browser protects your data from such websites.";
		a++;
	}
	else if (a==2) {
		document.getElementById('disp').src = "other/browimg3.gif"
		document.getElementById('detail').innerHTML = "So that you can browse without having the fear of privacy.";
		a++;
	}
	else {
		skip();
	}
}


function skip(){
	document.getElementById('browserintro').className = "animated slideOutLeft";
	setTimeout(function(){
		document.getElementById('browserintro').style.display = "none";
		document.getElementById('browser').style.display = "block";
		document.getElementById('browser').className = "animated slideInRight";
	},400);
}


function noti(z){
	if(z==1){
		document.getElementById('notitext').innerHTML = "Feature available only in Pro Version of this app.";
		document.getElementById('idk').src = "other/card.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}
    else if(z==2){
        document.getElementById('notitext').innerHTML = "Browser clears every data. You have to login again.";
		document.getElementById('idk').src = "other/up1.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
                window.history.back();
			},400);
		},2000);
    }
	else {
		document.getElementById('notitext').innerHTML = "Cleared Cookies, Local Storage and Session Storage.";
		document.getElementById('idk').src = "other/d1.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";
    var em = sessionStorage.email;

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
      localStorage.clear();
      sessionStorage.clear();

      document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });


			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
        sessionStorage.email=em;
			},400);
		},5000);
	}
}


function goBack() {
    noti(2);
}

function go(){
  var a = "http://" + document.getElementById('sb').value;
	window.open(a);
}
