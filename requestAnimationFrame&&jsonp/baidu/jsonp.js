var sResult = document.getElementById("sResult");


function abc(data) {
	console.log(data);
	var html = "";
	for(var i = 0; i < data.s.length; i++) {
		html += "<li><a href = https://www.baidu.com/s?ie=UTF-8&wd="+data.s[i]+">"+data.s[i]+"</a></li>";
	}
	
	console.log(html);
	sResult.innerHTML = html;
	sResult.style.display = "block";
	
	if(data.s.length == 0) {
		sResult.style.display = "none";
	}
}
searchInput.oninput = function() {
	//生成script 
	
	var script = document.createElement("script");
	script.src = "https://www.baidu.com/su?wd="+ searchInput.value +"&cb=abc";
	
	document.head.appendChild(script);
}










