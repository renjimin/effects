//将相同的部分，比如 过渡效果代码等封装为一个函数 ;这里需注意的是小圆点的过渡代码里控制end的是this.index 而其他的是index 所以函数里就要加多一句index=this.index  全部改成 用index去控制end;而且其实在bigpic1那里也应该加上，因为不加会出现，先点7号小圆点，然后再点下一张，就会变成出现的图片2，因为index是从0开始，没有这句index=this.index ，下一张和小圆点事件就不同步；
//还有小圆点变色的代码也有所不同，这是小圆点时间里面的:this.className = "active" 这是其他事件的:spanlist[index].className = "active"; 由于上面已经将index=this.index，所以一致用spanlist[index].className = "active"代替
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
inner.innerHTML += inner.innerHTML;
alert("hello");

var flag = true; ////////////////////////////////////////////

function tab() {


	//过渡效果代码
	var start = inner.offsetLeft;
	var end = -index * perWidth;
	var change = end - start;
	var t = 0;
	var maxT = 30;
	clearInterval(timer);
	timer = setInterval(function() {
		t++;
		if (t >= maxT) {
			clearInterval(timer);
			flag = true; /////////////////////////////////////////////
		}
		inner.style.left = change * t / maxT + start + "px"; //当t=maxT的时候，公式变成change+start=end
		/////////////////////////////////////
		if (index >= spanlist.length && t >= maxT) {
			index = 0;
			inner.style.left = 0 + "px";
		}

	}, 50);
	//过渡效果代码end

	for (var j = 0; j < spanlist.length; j++) {
		spanlist[j].className = "";
	}
	if (index >= spanlist.length) {
		spanlist[0].className = "active";
	} else {
		spanlist[index].className = "active"; //改变部分
	}

}

//小圆点事件
for (var i = 0; i < spanlist.length; i++) {
	spanlist[i].index = i;
	spanlist[i].onclick = function() {
		index = this.index; //添加部分		
		tab();
	}
}

//下一张事件////////////////////////////////////////////////
function nextPic() {
	if (flag) {
		index++;
		tab();
	}
	flag = false;
}
rightbut.onclick = nextPic; //由于下面的自动播放事件会用到下一张事件

//上一张事件
function prevPic() {
	if (flag) {
		index--;
		if (index < 0) {
			inner.style.left = -4080 + "px"; /////////////////////////
			index = spanlist.length - 1
		}
		tab();
	}
	flag = false;
}
leftbut.onclick = prevPic;

//自动播放事件
function autoGo() {
		nextPic();
	} //由于下面的onmouseout会再次用到这个自动播放时间，所也将自动播放事件封装成函数；
autotimer = setInterval(autoGo, 5000);

wrap.onmouseover = function() {
	clearInterval(autotimer);
}

wrap.onmouseout = function() {
	autotimer = setInterval(autoGo, 5000);
}