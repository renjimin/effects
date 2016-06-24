//设置cookie
function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	var expires = new Date(d.getTime() + exdays * (24 * 3600 * 1000));
	document.cookie = cname + "=" + cvalue + "; expires=" + expires;
}
//获取cookie
function getCookie(cname) {
	var name = cname + "=";
	var cArr = document.cookie.split("; ");
	for(var i = 0,len = cArr.length; i < len; i++) {
		var c = cArr[i];
		if(c.indexOf(name) == 0) {
			return c.substring(name.length,c.length);
		}
	}
	return "";
}
//清除cookie
function clearCookie(cname) {
	setCookie(cname,"",-1);
}


//登录
var loginBtn = document.getElementById("loginBtn");
var checkBox = document.getElementById("checkBox");
var userName = document.getElementById("userName");
var passWord = document.getElementById("passWord");
loginBtn.onclick = function() {
	//如果复选框选上，就存储cookie,否则清除
	if(checkBox.checked) {
//		alert("yes")
		setCookie("username",userName.value,7);
		setCookie("password",passWord.value,7);
	}else {
		clearCookie("username","",-1);
		clearCookie("password","",-1);
	}
}














