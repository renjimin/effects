var wrap = document.getElementById("wrap");
var inner = document.getElementById("inner");
var imglist = wrap.getElementsByTagName("img");
var leftbut = wrap.getElementsByTagName("a")[0];
var rightbut = wrap.getElementsByTagName("a")[1];
var spanlist = wrap.getElementsByTagName("span");
var perWidth = imglist[0].offsetWidth;
var timer = null;
var autotimer = null;
var index = 0;
//小圆点事件
for (var i = 0; i < spanlist.length; i++) {
	spanlist[i].index = i;
	spanlist[i].onclick = function() {
		for (var j = 0; j < spanlist.length; j++) {
			spanlist[j].className = "";
		}
		this.className = "active";

		//过渡效果代码
		var start = inner.offsetLeft;
		var end = -this.index * perWidth;
		var change = end - start;
		var t = 0;
		var maxT = 30;
		clearInterval(timer);
		timer = setInterval(function() {
			t++;
			if (t >= maxT) {
				clearInterval(timer);
			}
			inner.style.left = change * t / maxT + start + "px"; //当t=maxT的时候，公式变成change+start=end
		}, 50);
		//过渡效果代码end

		//		inner.style.left = -this.index * perWidth + "px"; //亲，记得加px    这就是没过渡的效果
	}
}

//下一张事件
rightbut.onclick = function() {
	index++;
	if (index > spanlist.length - 1) {
		index = 0;
	}

	//过渡效果代码	
	var start = inner.offsetLeft;
	var end = -index * perWidth; //这里就是小原点的动画效果将this.index改为index
	var change = end - start;
	var t = 0;
	var maxT = 30;
	clearInterval(timer);
	timer = setInterval(function() {
		t++;
		if (t >= maxT) {
			clearInterval(timer);
		}
		inner.style.left = change * t / maxT + start + "px";
	}, 50);

	for (var j = 0; j < spanlist.length; j++) {
		spanlist[j].className = "";
	}
	spanlist[index].className = "active"; //这段代码为了让小圆点跟着变色
	//过渡效果代码end

	//	inner.style.left = -index * perWidth + "px";
}

//上一张事件
leftbut.onclick = function() {
	index--;
	if (index <= 0) {
		index = spanlist.length - 1
	}

	//过渡效果代码		
	var start = inner.offsetLeft;
	var end = -index * perWidth; //这里就是小原点的动画效果将this.index改为index
	var change = end - start;
	var t = 0;
	var maxT = 30;
	clearInterval(timer);
	timer = setInterval(function() {
		t++;
		if (t >= maxT) {
			clearInterval(timer);
		}
		inner.style.left = change * t / maxT + start + "px";
	}, 50);

	for (var j = 0; j < spanlist.length; j++) {
		spanlist[j].className = "";
	}
	spanlist[index].className = "active";
	//过渡效果代码end


	//	inner.style.left = -index * perWidth + "px";
}

//自动播放事件
autotimer = setInterval(function() {

	//其实自动走事件就自动执行下一张
	index++;
	if (index > spanlist.length - 1) {
		index = 0;
	}

	//过渡效果代码	
	var start = inner.offsetLeft;
	var end = -index * perWidth; //这里就是小原点的动画效果将this.index改为index
	var change = end - start;
	var t = 0;
	var maxT = 30;
	clearInterval(timer);
	timer = setInterval(function() {
		t++;
		if (t >= maxT) {
			clearInterval(timer);
		}
		inner.style.left = change * t / maxT + start + "px";
	}, 50);

	for (var j = 0; j < spanlist.length; j++) {
		spanlist[j].className = "";
	}
	spanlist[index].className = "active"; //这段代码为了让小圆点跟着变色
	//过渡效果代码end

	//	inner.style.left = -index * perWidth + "px";

}, 5000)

wrap.onmouseover = function() {
	clearInterval(autotimer);
}

wrap.onmouseout = function() {
	
	//重新执行autotimer
	autotimer = setInterval(function() {

		//其实自动走事件就自动执行下一张
		index++;
		if (index > spanlist.length - 1) {
			index = 0;
		}

		//过渡效果代码	
		var start = inner.offsetLeft;
		var end = -index * perWidth; //这里就是小原点的动画效果将this.index改为index
		var change = end - start;
		var t = 0;
		var maxT = 30;
		clearInterval(timer);
		timer = setInterval(function() {
			t++;
			if (t >= maxT) {
				clearInterval(timer);
			}
			inner.style.left = change * t / maxT + start + "px";
		}, 50);

		for (var j = 0; j < spanlist.length; j++) {
			spanlist[j].className = "";
		}
		spanlist[index].className = "active"; //这段代码为了让小圆点跟着变色
		//过渡效果代码end

		//	inner.style.left = -index * perWidth + "px";

	}, 5000)

}