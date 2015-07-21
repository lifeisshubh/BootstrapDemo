window.onload = init;
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

$(document).ready(function(){
    $(".close").click(function(){
        $("#myAlert").alert("close");
    });
});

function init(){
	var login_button = document.getElementById("login_button");
	login_button.onclick = login_checker;
}

function login_checker(){
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	if(username.value == "shubham" && password.value=="lifeisshubh"){
		alert("Login Successful");
		var button = document.getElementById("log-in");
		button.setAttribute("class","hidden");
		var logInfo = document.getElementById("login_info");
		logInfo.setAttribute("class","navbar-text navbar-right");
	}
	else{
		alert("Contact Shubham Patel to take test Username & Password");
	}
}
