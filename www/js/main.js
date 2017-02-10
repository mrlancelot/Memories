function login(){
    document.getElementById("dash").style.display="block";
}
setTimeout(function(){
	document.getElementById('logo').style.top = "34%";
  document.getElementById('cupcake').style.top = "33.5%";
  document.getElementById('mem').style.top = "20%";
	document.getElementById('but1').style.display = "block";
  document.getElementById('but1').className = "button animated fadeIn";
},2000);
function wyf(){
	window.open("https://support.google.com/legal/contact/lr_eudpa?product=websearch");
}
var a=0;
function sideb() {
	if(a==0)
	{
		document.getElementById('lowerBar').style.display = "block";
	  document.getElementById('lowerBar').className = "lowerBar animated slideInUp";
		a++;
	}
	else {
		document.getElementById('lowerBar').className = "lowerBar animated slideOutDown";
		setTimeout(function(){
			document.getElementById('lowerBar').style.display = "none";
		},300);
		a--;
	}
}


var c = window.location.href;
function ser()
{
	var b = document.getElementById('sb').value;
	var a = '<object id="obj" type="text/html" data="search.html?q=';
	var c = '" ></object>';
	var d = "'";
	var e = '<object id="obj" type="text/html" data="';
	if((sessionStorage.yt==1 && sessionStorage.in==0) || (sessionStorage.yt==1 && !sessionStorage.in) )
	{
			var f = "searchl.html?q=";
			document.getElementById("sresult").innerHTML= d + e + f + b + c+ d;
	}
	else if ((sessionStorage.yt==0 && sessionStorage.in==1) || (!sessionStorage.yt && sessionStorage.in==1)) {
			var g = "searchy.html?q=";
			document.getElementById("sresult").innerHTML= d + e + g + b + c+ d;
	}
	else if (sessionStorage.yt==1 && sessionStorage.in==1) {
		var h = "searchft.html?q=";
		document.getElementById("sresult").innerHTML= d + e + h + b + c+ d;
	}
	else {
			document.getElementById("sresult").innerHTML= d + a + b + c+ d;
	}
	document.getElementById('instruc').style.display = "none";
	document.getElementById('check').style.display = "block";
	document.getElementById('check').className = "animated slideInLeft";
	document.getElementById('go').style.display = "block";
	document.getElementById('go').className = "animated bounceInUp";
}
var z =0;
function cus(){
	if(z==0)
	{
		document.getElementById('customSearch').style.display = "block";
	  document.getElementById('customSearch').className = "lowerBar animated slideInUp";
		z++;
	}
	else {
		document.getElementById('customSearch').className = "lowerBar animated slideOutDown";
		setTimeout(function(){
			document.getElementById('customSearch').style.display = "none";
		},300);
		z--;
	}
}






function c1f(){
	if(sessionStorage.c1==1)
	{
		sessionStorage.c1 = 0;
		document.getElementById('c11').style.backgroundColor = "black";
	}
	else {
		sessionStorage.c1 = 1;
		document.getElementById('c11').style.backgroundColor = "#00ff99";
	}
}


function c2f(){
	if(sessionStorage.c2==1)
	{
		sessionStorage.c2 = 0;
		document.getElementById('c22').style.backgroundColor = "black";
	}
	else {
		sessionStorage.c2 = 1;
		document.getElementById('c22').style.backgroundColor = "#00ff99";
	}
}


function c3f(){
	if(sessionStorage.c3==1)
	{
		sessionStorage.c3 = 0;
		document.getElementById('c33').style.backgroundColor = "black";
	}
	else {
		sessionStorage.c3 = 1;
		document.getElementById('c33').style.backgroundColor = "#00ff99";
	}
}


function c4f(){
	if(sessionStorage.c4==1)
	{
		sessionStorage.c4 = 0;
		document.getElementById('c44').style.backgroundColor = "black";
	}
	else {
		sessionStorage.c4 = 1;
		document.getElementById('c44').style.backgroundColor = "#00ff99";
	}
}


function c5f(){
	if(sessionStorage.c5==1)
	{
		sessionStorage.c5 = 0;
		document.getElementById('c55').style.backgroundColor = "black";
	}
	else {
		sessionStorage.c5 = 1;
		document.getElementById('c55').style.backgroundColor = "#00ff99";
	}
}


function ytf(){
	if(sessionStorage.yt==1)
	{
		sessionStorage.yt = 0;
		document.getElementById('yt').style.backgroundColor = "#00ff99";
		document.getElementById('yti').src = "other/ytb.png";
	}
	else {
		sessionStorage.yt = 1;
		document.getElementById('yt').style.backgroundColor = "black";
		document.getElementById('yti').src = "other/ytg.png";
	}
}

function inf(){
	if(sessionStorage.in==1)
	{
		sessionStorage.in = 0;
		document.getElementById('in').style.backgroundColor = "#00ff99";
		document.getElementById('ini').src = "other/inb.png";
	}
	else {
		sessionStorage.in = 1;
		document.getElementById('in').style.backgroundColor = "black";
		document.getElementById('ini').src = "other/ing.png";
	}
}


function sizeR(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById('dash').style.height = h + "px";
    document.getElementById('dash').style.width = w + "px";
		document.getElementById('broload').style.height = h + "px";
		document.getElementById('broload').style.width = w + "px";
}


function gopro(){
	document.getElementById('proceed').style.display = "block";
	document.getElementById('proceed').className = "lowerBar animated slideInLeft"
	document.getElementById('go').style.display = "none";
}

function cloprof() {
	document.getElementById('proceed').className = "lowerBar animated slideOutLeft";
	document.getElementById('go').style.display = "block";
	document.getElementById('go').className = "animated bounceInUp";

	setTimeout(function(){
		document.getElementById('proceed').style.display = "none";
	},300);

}

function clopro2f() {
	document.getElementById('proceed2').className = "lowerBar animated slideOutLeft";
	document.getElementById('go').style.display = "block";
	document.getElementById('go').className = "animated bounceInUp";

	setTimeout(function(){
		document.getElementById('proceed2').style.display = "none";
	},300);

}

function clopro3f() {
	document.getElementById('proceed3').className = "lowerBar animated slideOutLeft";
	document.getElementById('go').style.display = "block";
	document.getElementById('go').className = "animated bounceInUp";

	setTimeout(function(){
		document.getElementById('proceed3').style.display = "none";
	},300);

}


function dnfs(){
	var b = document.getElementById('sb').value;
	var a = sessionStorage.email;
	var c = 1;
	var d = 1;
	var e = 1;
	var f = 1;
	var g = 1;
	var email = a,
			sterm = b,
			one = c,
			two = d,
			three = e,
			four = f,
			five = g,
			status = 1;
	var dataString = 'email=' + email + '&sterm=' + sterm + '&one=' + one + '&two=' + two + '&three=' + three + '&four=' + four + '&five=' + five + '&status=' + status;
	$.ajax({
				type: "POST",
				url: "http://memoriesatos.net23.net/",
				data: dataString,
				cache: false,
				success: function(data) {
						console.log(data);
						noti(1);

				},
				error: function(data)
				{
					alert(data);
				}
		});
}


function dnf(){
	var b = document.getElementById('sb').value;
	var a = sessionStorage.email;
	var c = sessionStorage.c1;
	var d = sessionStorage.c2;
	var e = sessionStorage.c3;
	var f = sessionStorage.c4;
	var g = sessionStorage.c5;

	var lat, lon;
	lat = localStorage.latt;
	lon = localStorage.long;

	var id = document.getElementById('docbar').value;
	var email = a,
			sterm = b,
			one = c,
			two = d,
			three = e,
			four = f,
			five = g,
			status = 1;
	var dataString = 'email=' + email + '&sterm=' + sterm + '&one=' + one + '&two=' + two + '&three=' + three + '&four=' + four + '&five=' + five + '&status=' + status + '&lat=' + lat + '&id=' + id  + '&lon=' + lon;
	$.ajax({
				type: "POST",
				url: "http://memoriesatos.net23.net/",
				data: dataString,
				cache: false,
				success: function(data) {
						console.log(data);
						noti(1);

				},
				error: function(data)
				{
					alert(data);
				}
		});
}

function noti(code){

	if(code==1){
		document.getElementById('notitext').innerHTML = "Submitted Successfully!! Track Your Submittion.";
		document.getElementById('idk').src = "other/suc.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==2) {
		document.getElementById('notitext').innerHTML = "Thanks for trying this app :) Do come back.";
		document.getElementById('idk').src = "other/thanks.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
				window.location.href= window.location.href;
			},400);
		},2500);
	}

	else if (code==3) {
		document.getElementById('notitext').innerHTML = "Made in India with love. Team Brackets. Memories Beta Version";
		document.getElementById('idk').src = "other/india.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
			},400);
		},5000);
	}

	else if (code==4) {
		document.getElementById('notitext').innerHTML = "Deleting all the data this App stores and logging out.";
		document.getElementById('idk').src = "other/rem.png";
		document.getElementById('noti').style.display = "block";
		document.getElementById('noti').className = "noti animated slideInRight";

		setTimeout(function(){
			document.getElementById('noti').className = "noti animated slideOutRight";
			setTimeout(function(){
				document.getElementById('noti').style.display = "none";
					localStorage.clear();
					sessionStorage.clear();

					document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

					window.location.href= window.location.href;

			},400);
		},5000);
	}
	else {
		document.getElementById('notitext').innerHTML = "This Feature is only available with Memories Pro App.";
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

}




function subn(){
	document.getElementById('proceed2').style.display = "block";
	document.getElementById('proceed2').className = "lowerBar animated slideInLeft"
	document.getElementById('proceed').style.display = "none";
}


function conflo(){
	document.getElementById('proceed3').style.display = "block";
	document.getElementById('proceed3').className = "lowerBar animated slideInLeft"
	document.getElementById('proceed2').style.display = "none";

}
