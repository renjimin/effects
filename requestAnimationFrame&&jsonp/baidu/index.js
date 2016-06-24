//登录按钮弹窗
var loginPop = document.getElementById("loginPop");

//弹窗内容
var loginBox = document.getElementById("loginBox");

//关闭弹窗button 
var closePop = document.getElementById("closePop");

//tab切换按钮
var tabBtn = document.getElementById("tabBtn");

//tab切换中的pc端部分 pcPart以及移动端部分mobilePart
var pcPart = document.getElementById("pcPart");
var mobilePart = document.getElementById("mobilePart");

//拖拽的头部 moveTitle
var moveTitle = document.getElementById("moveTitle");

//生成蒙层的方法
function showMask() {
	var mask = document.getElementById("mask");
	if(!mask) {
		mask = document.createElement("div");
		mask.setAttribute("id","mask");
		document.body.appendChild(mask);	
	}
	mask.style.display = "block";
}
//蒙层消失的方法
function hideMask() {
	var mask = document.getElementById("mask");
	mask.style.display = "none";
}

//点击，弹窗以及蒙层出现
loginPop.onclick = function() {
	showMask();//显示蒙层
	loginBox.style.display = "block"; //显示弹窗
	setCenter();//弹窗居中
}

//弹窗居中的方法
function setCenter() {
	var bLeft = (document.documentElement.clientWidth - loginBox.offsetWidth)/2;
	var bTop = (document.documentElement.clientHeight - loginBox.offsetHeight)/2;
	loginBox.style.left = bLeft + "px";
	loginBox.style.top = bTop + "px";
}

//关闭弹窗
closePop.onclick = function() {
	hideMask(); //蒙层消失
	loginBox.style.display = "none"; //弹窗消失
}

//弹窗的tab切换
tabBtn.onclick = function() {
	if(!this.className) {
		tabBtn.className = "moblie-btn";
		pcPart.style.display = "none";
		mobilePart.style.display = "block";
	}else {
		tabBtn.className = "";
		pcPart.style.display = "block";
		mobilePart.style.display = "none";
	}
}

//窗口缩放  让弹窗居中
window.onresize = function() {
	setCenter();
}

//弹窗拖拽
moveTitle.onmousedown = function(e) {
	var evt = e || window.event;
	var origionalW = evt.clientX - loginBox.offsetLeft;
	var origionalH = evt.clientY - loginBox.offsetTop;
	document.onmousemove = function(e) {
		var evt = e || window.event;
		var bLeft = evt.clientX - origionalW;
		var bTop = evt.clientY - origionalH;
		var maxLeft = document.documentElement.clientWidth - loginBox.offsetWidth;
		var maxTop = document.documentElement.clientHeight - loginBox.offsetHeight;
		if(bLeft < 0) {
			bLeft = 0;
		}else if (bLeft > maxLeft) {
			bLeft = maxLeft;
		}
		if(bTop < 0) {
			bTop = 0;
		}else if(bTop > maxTop) {
			bTop = maxTop;
		}
		loginBox.style.left = bLeft + "px";
		loginBox.style.top = bTop + "px";
	}
}
document.onmouseup = function() {
	document.onmousemove = null;
}










