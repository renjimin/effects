//索引数组
/*var searchStr="";
$("article").each(function(index,ele){
    var $bookmark=$(ele).find("[rel='bookmark']");
    var title=$bookmark.text().replace('"','\"');
    var url=$bookmark.attr("href");
    var desc=$(ele).find(".entry-summary p").text().replace('"','\"');;
    var slug='';
    if(title.charAt(0)==="."){
        slug=title.substring(1)
    }else{
        slug=title;
    }
    if(title.indexOf("()")!=-1){
        slug=slug.replace("()","")
    }
    slug.replace('"','\"');
    searchStr+='{"title":"'+title+'","url":"'+url+'","desc":"'+desc+'","slug":"'+slug+'"},' ;
});
console.log(searchStr);*/
var searchArr = [{
    "title": ".add()",
    "url": "../add/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/add/*/,
    "desc": "添加元素到匹配的元素集合。",
    "slug": "add"
},
{
    "title": ".addBack()",
    "url": "../addBack/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/addBack/*/,
    "desc": "上一组元素在堆栈中添加 到当前设定， 任选由一个选择器过滤。",
    "slug": "addBack"
},
{
    "title": ".addClass()",
    "url": "../addClass/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/addClass/*/,
    "desc": "为每个匹配的元素添加指定的样式类名",
    "slug": "addClass"
},
{
    "title": ".after()",
    "url": "../after/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/after/*/,
    "desc": "在元素集合中匹配的每个元素后面插入参数所指定的内容。",
    "slug": "after"
},
{
    "title": ".ajaxComplete()",
    "url": "../ajaxComplete/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/ajaxComplete/*/,
    "desc": "当Ajax请求完成后注册一个回调函数。这是一个 AjaxEvent。",
    "slug": "ajaxComplete"
},
{
    "title": ".ajaxError()",
    "url": "../ajaxError/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/ajaxError/*/,
    "desc": "Ajax请求出错时注册一个回调处理函数，这是一个 Ajax Event。",
    "slug": "ajaxError"
},
{
    "title": ".ajaxSend()",
    "url": "../ajaxSend/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/ajaxSend/*/,
    "desc": "在Ajax请求发送之前绑定一个要执行的函数，这是一个 Ajax Event.",
    "slug": "ajaxSend"
},
{
    "title": ".ajaxStart()",
    "url": "../ajaxStart/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/ajaxStart/*/,
    "desc": "在AJAX 请求刚开始时执行一个处理函数。 这是一个 Ajax Event.",
    "slug": "ajaxStart"
},
{
    "title": ".ajaxStop()",
    "url": "../ajaxStop/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/ajaxStop/*/,
    "desc": "在AJAX 请求完成时执行一个处理函数。 这是一个 Ajax Event。",
    "slug": "ajaxStop"
},
{
    "title": ".ajaxSuccess()",
    "url": "../ajaxSuccess/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/ajaxSuccess/*/,
    "desc": "绑定一个函数当 Ajax 请求成功完成时执行。 这是一个Ajax Event.",
    "slug": "ajaxSuccess"
},
{
    "title": "All Selector (“*”)",
    "url": "../all-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/all-selector/*/,
    "desc": "选择所有元素.",
    "slug": "All Selector (“*”)"
},
{
    "title": ".andSelf()",
    "url": "../andSelf/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/andSelf/*/,
    "desc": "添加先前的堆栈元素集合到当前组合。",
    "slug": "andSelf"
},
{
    "title": ".animate()",
    "url": "../animate/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/animate/*/,
    "desc": "执行一个CSS属性设置的自定义动画。",
    "slug": "animate"
},
{
    "title": ":animated Selector",
    "url": "../animated-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/animated-selector/*/,
    "desc": "选择所有正在执行动画效果的元素。",
    "slug": ":animated Selector"
},
{
    "title": ".append()",
    "url": "../append/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/append/*/,
    "desc": "根据参数设定在每个匹配元素里面的末尾处插入内容。",
    "slug": "append"
},
{
    "title": ".appendTo()",
    "url": "../appendTo/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/appendTo/*/,
    "desc": "将匹配的元素插入到目标元素的最后面（译者注：内部插入）。",
    "slug": "appendTo"
},
{
    "title": ".attr()",
    "url": "../attr/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/attr/*/,
    "desc": "获取匹配的元素集合中的第一个元素的属性的值  或 设置每一个匹配元素的一个或多个属性。",
    "slug": "attr"
},
{
    "title": "Attribute Contains Prefix Selector [name|=\"value\"]",
    "url": "../attribute-contains-prefix-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/attribute-contains-prefix-selector/*/,
    "desc": "选择指定属性值等于给定字符串或以该字符串为前缀（该字符串后跟一个连字符“-” ）的元素。",
    "slug": "Attribute Contains Prefix Selector [name|=\"value\"]"
},
{
    "title": "Attribute Contains Selector [name*=\"value\"]",
    "url": "../attribute-contains-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/attribute-contains-selector/*/,
    "desc": "选择指定属性具有包含一个给定的子字符串的元素。（选择给定的属性是以包含某些值的元素）",
    "slug": "Attribute Contains Selector [name*=\"value\"]"
},
{
    "title": "Attribute Contains Word Selector [name~=\"value\"]",
    "url": "../attribute-contains-word-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/attribute-contains-word-selector/*/,
    "desc": "选择指定属性用空格分隔的值中包含一个给定值的元素。",
    "slug": "Attribute Contains Word Selector [name~=\"value\"]"
},
{
    "title": "Attribute Ends With Selector [name$=\"value\"]",
    "url": "../attribute-ends-with-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/attribute-ends-with-selector/*/,
    "desc": " 选择指定属性是以给定值结尾的元素。这个比较是区分大小写的。",
    "slug": "Attribute Ends With Selector [name$=\"value\"]"
},
{
    "title": "Attribute Equals Selector [name=\"value\"]",
    "url": "../attribute-equals-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/attribute-equals-selector/*/,
    "desc": "选择指定属性是给定值的元素。",
    "slug": "Attribute Equals Selector [name=\"value\"]"
},
{
    "title": "Attribute Not Equal Selector [name!=\"value\"]",
    "url": "../attribute-not-equal-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/attribute-not-equal-selector/*/,
    "desc": "选择不存在指定属性，或者指定的属性值不等于给定值的元素。",
    "slug": "Attribute Not Equal Selector [name!=\"value\"]"
},
{
    "title": "Attribute Starts With Selector [name^=\"value\"]",
    "url": "../attribute-starts-with-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/attribute-starts-with-selector/*/,
    "desc": "选择指定属性是以给定字符串开始的元素",
    "slug": "Attribute Starts With Selector [name^=\"value\"]"
},
{
    "title": ".before()",
    "url": "../before/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/before/*/,
    "desc": "根据参数设定在匹配元素的前面插入内容（译者注：外部插入）",
    "slug": "before"
},
{
    "title": ".bind()",
    "url": "../bind/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/bind/*/,
    "desc": "为一个元素绑定一个事件处理程序。",
    "slug": "bind"
},
{
    "title": ".blur()",
    "url": "../blur/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/blur/*/,
    "desc": "为“blur”事件绑定一个处理器，或者触发元素上的 “blur” 事件。",
    "slug": "blur"
},
{
    "title": ":button Selector",
    "url": "../button-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/button-selector/*/,
    "desc": "选择所有按钮元素和类型为按钮的元素。",
    "slug": ":button Selector"
},
{
    "title": "callbacks.add()",
    "url": "../callbacks.add/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/callbacks.add/*/,
    "desc": "回调列表中添加一个回调或回调的集合。",
    "slug": "http://www.css88.com/jqapi-1.9/js/callbacks.add"
},
{
    "title": "callbacks.disable()",
    "url": "../callbacks.disable/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/callbacks.disable/*/,
    "desc": "禁用回调列表中的回调",
    "slug": "callbacks.disable"
},
{
    "title": "callbacks.disabled()",
    "url": "../callbacks.disabled/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/callbacks.disabled/*/,
    "desc": "确定回调列表是否已被禁用",
    "slug": "callbacks.disabled"
},
{
    "title": "callbacks.empty()",
    "url": "../callbacks.empty/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/callbacks.empty/*/,
    "desc": "从列表中删除所有的回调.",
    "slug": "callbacks.empty"
},
{
    "title": "callbacks.fire()",
    "url": "../callbacks.fire/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/callbacks.fire/*/,
    "desc": "",
    "slug": "http://www.css88.com/jqapi-1.9/js/callbacks.fire"
},
{
    "title": "callbacks.fired()",
    "url": "../callbacks.fired/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/callbacks.fired/*/,
    "desc": "确定回调是否至少已经调用一次。",
    "slug": "callbacks.fired"
},
{
    "title": "callbacks.fireWith()",
    "url": "../callbacks.fireWith/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/callbacks.fireWith/*/,
    "desc": "访问给定的上下文和参数列表中的所有回调。",
    "slug": "callbacks.fireWith"
},
{
    "title": "callbacks.has()",
    "url": "../callbacks.has/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/callbacks.has/*/,
    "desc": "确定列表中是否提供一个回调",
    "slug": "http://www.css88.com/jqapi-1.9/js/callbacks.has"
},
{
    "title": "callbacks.lock()",
    "url": "../callbacks.lock/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/callbacks.lock/*/,
    "desc": "确定回调列表是否已被锁定。",
    "slug": "http://www.css88.com/jqapi-1.9/js/callbacks.lock"
},
{
    "title": "callbacks.locked()",
    "url": "../callbacks.locked/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/callbacks.locked/*/,
    "desc": "从回调列表中的删除一个回调或回调集合。",
    "slug": "callbacks.locked"
},
{
    "title": "callbacks.remove()",
    "url": "../callbacks.remove/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/callbacks.remove/*/,
    "desc": "从回调列表中的删除一个回调或回调集合。",
    "slug": "callbacks.remove"
},
{
    "title": ".change()",
    "url": "../change/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/change/*/,
    "desc": "为“change” 事件绑定一个处理函数，或者触发元素上的“change” 事件。",
    "slug": "change"
},
{
    "title": ":checkbox Selector",
    "url": "../checkbox-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/checkbox-selector/*/,
    "desc": "选择所有类型为复选框的元素。",
    "slug": ":checkbox Selector"
},
{
    "title": ":checked Selector",
    "url": "../checked-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/checked-selector/*/,
    "desc": "匹配所有勾选的元素。",
    "slug": ":checked Selector"
},
{
    "title": "Child Selector (“parent > child”)",
    "url": "../child-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/child-selector/*/,
    "desc": "选择所有指定“parent”元素中指定的“child”的直接子元素。",
    "slug": "Child Selector (“parent > child”)"
},
{
    "title": ".children()",
    "url": "../children/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/children/*/,
    "desc": "获得元素集合中每个匹配元素的子元素，选择器选择性筛选。",
    "slug": "children"
},
{
    "title": "Class Selector (“.class”)",
    "url": "../class-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/class-selector/*/,
    "desc": "选择给定样式类名的所有元素。",
    "slug": "Class Selector (“.class”)"
},
{
    "title": ".clearQueue()",
    "url": "../clearQueue/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/clearQueue/*/,
    "desc": "从列队中移除所有未执行的项。",
    "slug": "clearQueue"
},
{
    "title": ".click()",
    "url": "../click/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/click/*/,
    "desc": " 为 “click”事件绑定一个处理器，或者触发元素上的 “click” 事件。",
    "slug": "click"
},
{
    "title": ".clone()",
    "url": "../clone/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/clone/*/,
    "desc": "创建一个匹配的元素集合的深度拷贝副本。",
    "slug": "clone"
},
{
    "title": ".closest()",
    "url": "../closest/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/closest/*/,
    "desc": "从元素本身开始，在DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素。",
    "slug": "closest"
},
{
    "title": ":contains() Selector",
    "url": "../contains-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/contains-selector/*/,
    "desc": "选择所有包含指定文本的元素。.",
    "slug": ":contains Selector"
},
{
    "title": ".contents()",
    "url": "../contents/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/contents/*/,
    "desc": "获得每个匹配元素集合元素的子元素，包括文字和注释节点。",
    "slug": "contents"
},
{
    "title": ".context",
    "url": "../context/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/context/*/,
    "desc": "原始的DOM节点的内容传给jQuery()；如果没有东西被传递，那么上下文将可能是该文档（document）。",
    "slug": "context"
},
{
    "title": ".css()",
    "url": "../css/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/css/*/,
    "desc": "获取匹配元素集合中的第一个元素的样式属性的值  或  设置每个匹配元素的一个或多个CSS属性。",
    "slug": "css"
},
{
    "title": ".data()",
    "url": "../data/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/data/*/,
    "desc": "在匹配元素上存储任意相关数据 或 返回匹配的元素集合中的第一个元素的给定名称的数据存储的值。",
    "slug": "data"
},
{
    "title": ".dblclick()",
    "url": "../dblclick/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/dblclick/*/,
    "desc": "为“dblclick” 事件绑定一个处理函数，或者触发元素上的 “dblclick” 事件。",
    "slug": "dblclick"
},
{
    "title": "deferred.always()",
    "url": "../deferred.always/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.always/*/,
    "desc": "当Deferred（延迟）对象解决或拒绝时，调用添加处理程序。",
    "slug": "deferred.always"
},
{
    "title": "deferred.done()",
    "url": "../deferred.done/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.done/*/,
    "desc": "当Deferred（延迟）对象解决时，调用添加处理程序。",
    "slug": "http://www.css88.com/jqapi-1.9/js/deferred.done"
},
{
    "title": "deferred.fail()",
    "url": "../deferred.fail/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.fail/*/,
    "desc": "当Deferred（延迟）对象拒绝时，调用添加处理程序。",
    "slug": "http://www.css88.com/jqapi-1.9/js/deferred.fail"
},
{
    "title": "deferred.isRejected()",
    "url": "../deferred.isRejected/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.isRejected/*/,
    "desc": "确定一个Deferred（延迟）对象是否已被拒绝。",
    "slug": "deferred.isRejected"
},
{
    "title": "deferred.isResolved()",
    "url": "../deferred.isResolved/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.isResolved/*/,
    "desc": "确定一个Deferred（延迟）对象是否已被解决。",
    "slug": "deferred.isResolved"
},
{
    "title": "deferred.notify()",
    "url": "../deferred.notify/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.notify/*/,
    "desc": "根据给定的 args参数 调用Deferred（延迟）对象上进行中的回调 （progressCallbacks）。",
    "slug": "deferred.notify"
},
{
    "title": "deferred.notifyWith()",
    "url": "../deferred.notifyWith/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.notifyWith/*/,
    "desc": "根据给定的上下文（context）和args递延调用Deferred（延迟）对象上进行中的回调（progressCallbacks ）。",
    "slug": "deferred.notifyWith"
},
{
    "title": "deferred.pipe()",
    "url": "../deferred.pipe/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.pipe/*/,
    "desc": "用的方法来过滤 and/or 链Deferreds。",
    "slug": "http://www.css88.com/jqapi-1.9/js/deferred.pipe"
},
{
    "title": "deferred.progress()",
    "url": "../deferred.progress/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.progress/*/,
    "desc": " 当Deferred（延迟）对象生成进度通知时，调用添加处理程序。",
    "slug": "deferred.progress"
},
{
    "title": "deferred.promise()",
    "url": "../deferred.promise/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.promise/*/,
    "desc": "返回Deferred(延迟)的Promise（承诺）对象。",
    "slug": "deferred.promise"
},
{
    "title": "deferred.reject()",
    "url": "../deferred.reject/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.reject/*/,
    "desc": "拒绝Deferred（延迟）对象，并根据给定的args参数调用任何失败回调函数（failCallbacks）。",
    "slug": "deferred.reject"
},
{
    "title": "deferred.rejectWith()",
    "url": "../deferred.rejectWith/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.rejectWith/*/,
    "desc": "拒绝Deferred（延迟）对象，并根据给定的 context和args参数调用任何失败回调函数（failCallbacks）。",
    "slug": "deferred.rejectWith"
},
{
    "title": "deferred.resolve()",
    "url": "../deferred.resolve/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.resolve/*/,
    "desc": "解决Deferred（延迟）对象，并根据给定的args参数调用任何完成回调函数（doneCallbacks）。",
    "slug": "deferred.resolve"
},
{
    "title": "deferred.resolveWith()",
    "url": "../deferred.resolveWith/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.resolveWith/*/,
    "desc": "解决Deferred（延迟）对象，并根据给定的 context和args参数调用任何完成回调函数（doneCallbacks）。",
    "slug": "deferred.resolveWith"
},
{
    "title": "deferred.state()",
    "url": "../deferred.state/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.state/*/,
    "desc": "确定一个Deferred（延迟）对象的当前状态。",
    "slug": "deferred.state"
},
{
    "title": "deferred.then()",
    "url": "../deferred.then/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/deferred.then/*/,
    "desc": "当Deferred（延迟）对象解决，拒绝或仍在进行中时，调用添加处理程序。",
    "slug": "http://www.css88.com/jqapi-1.9/js/deferred.then"
},
{
    "title": ".delay()",
    "url": "../delay/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/delay/*/,
    "desc": "设置一个延时来推迟执行队列中后续的项的执行。",
    "slug": "delay"
},
{
    "title": ".delegate()",
    "url": "../delegate/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/delegate/*/,
    "desc": "为所有匹配选择器（selector参数）的元素绑定一个处理器到一个或多个事件，现在或将来， 基于根元素的一个特定的组",
    "slug": "delegate"
},
{
    "title": ".dequeue()",
    "url": "../dequeue/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/dequeue/*/,
    "desc": "执行匹配元素队列的下一个函数。",
    "slug": "dequeue"
},
{
    "title": "Descendant Selector (“ancestor descendant”)",
    "url": "../descendant-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/descendant-selector/*/,
    "desc": "选择给定的祖先元素的所有后代元素。",
    "slug": "Descendant Selector (“ancestor descendant”)"
},
{
    "title": ".detach()",
    "url": "../detach/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/detach/*/,
    "desc": "从DOM中去掉所有匹配的元素。",
    "slug": "detach"
},
{
    "title": ".die()",
    "url": "../die/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/die/*/,
    "desc": "从元素中删除先前用.live()绑定的所有事件。",
    "slug": "die"
},
{
    "title": ":disabled Selector",
    "url": "../disabled-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/disabled-selector/*/,
    "desc": "选择所有被禁用的元素。",
    "slug": ":disabled Selector"
},
{
    "title": ".each()",
    "url": "../each/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/each/*/,
    "desc": "遍历一个jQuery对象，为每个匹配元素执行一个函数。",
    "slug": "each"
},
{
    "title": "Element Selector (“element”)",
    "url": "../element-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/element-selector/*/,
    "desc": "根据给定（html）标记名称选择所有的元素",
    "slug": "Element Selector (“element”)"
},
{
    "title": ".empty()",
    "url": "../empty/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/empty/*/,
    "desc": "从DOM中移除集合中匹配元素的所有子节点。",
    "slug": "empty"
},
{
    "title": ":empty Selector",
    "url": "../empty-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/empty-selector/*/,
    "desc": "选择所有没有子元素的元素（包括文本节点）。",
    "slug": ":empty Selector"
},
{
    "title": ":enabled Selector",
    "url": "../enabled-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/enabled-selector/*/,
    "desc": "选择所有可用的元素。",
    "slug": ":enabled Selector"
},
{
    "title": ".end()",
    "url": "../end/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/end/*/,
    "desc": "终止在当前链的最新过滤操作，并返回匹配的元素集合为它以前的状态。",
    "slug": "end"
},
{
    "title": ".eq()",
    "url": "../eq/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/eq/*/,
    "desc": "减少匹配元素的集合为指定的索引的哪一个元素。",
    "slug": "eq"
},
{
    "title": ":eq() Selector",
    "url": "../eq-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/eq-selector/*/,
    "desc": "在匹配的集合选择索引值为n的元素。",
    "slug": ":eq Selector"
},
{
    "title": ".error()",
    "url": "../error/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/error/*/,
    "desc": "绑定一个事件处理器到“error” JavaScript事件上。",
    "slug": "error"
},
{
    "title": ":even Selector",
    "url": "../even-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/even-selector/*/,
    "desc": "选择偶数元素，从 0 开始计数。 也可以查看 odd.",
    "slug": ":even Selector"
},
{
    "title": "event.currentTarget",
    "url": "../event.currentTarget/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.currentTarget/*/,
    "desc": "在事件冒泡过程中的当前DOM元素。",
    "slug": "event.currentTarget"
},
{
    "title": "http://www.css88.com/jqapi-1.9/js/event.data",
    "url": "../event.data/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.data/*/,
    "desc": "一个可选的数据对象传递给一个事件方法，当当前正在执行的处理程序被绑定。",
    "slug": "http://www.css88.com/jqapi-1.9/js/event.data"
},
{
    "title": "event.delegateTarget",
    "url": "../event.delegateTarget/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.delegateTarget/*/,
    "desc": "绑定了当前正在调用jQuery 事件处理器的元素。",
    "slug": "event.delegateTarget"
},
{
    "title": "event.isDefaultPrevented()",
    "url": "../event.isDefaultPrevented/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.isDefaultPrevented/*/,
    "desc": "根据事件对象中是否调用过 event.preventDefault() 方法,来返回一个布尔值。",
    "slug": "event.isDefaultPrevented"
},
{
    "title": "event.isImmediatePropagationStopped()",
    "url": "../event.isImmediatePropagationStopped/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.isImmediatePropagationStopped/*/,
    "desc": "根据事件对象中是否调用过 event.stopImmediatePropagation() 方法,来返回一个布尔值。",
    "slug": "event.isImmediatePropagationStopped"
},
{
    "title": "event.isPropagationStopped()",
    "url": "../event.isPropagationStopped/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.isPropagationStopped/*/,
    "desc": "根据事件对象中是否调用过 event.stopPropagation() 方法,来返回一个布尔值。",
    "slug": "event.isPropagationStopped"
},
{
    "title": "event.metaKey",
    "url": "../event.metaKey/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.metaKey/*/,
    "desc": "表示事件触发时哪个Meta键被按下。",
    "slug": "event.metaKey"
},
{
    "title": "event.namespace",
    "url": "../event.namespace/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.namespace/*/,
    "desc": "当事件被触发时此属性包含指定的命名空间。",
    "slug": "event.namespace"
},
{
    "title": "event.pageX",
    "url": "../event.pageX/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.pageX/*/,
    "desc": "鼠标相对于文档的左边缘的位置。",
    "slug": "event.pageX"
},
{
    "title": "event.pageY",
    "url": "../event.pageY/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.pageY/*/,
    "desc": "鼠标相对于文档的顶部边缘的位置。",
    "slug": "event.pageY"
},
{
    "title": "event.preventDefault()",
    "url": "../event.preventDefault/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.preventDefault/*/,
    "desc": "如果调用这个方法，默认事件行为将不再触发。",
    "slug": "event.preventDefault"
},
{
    "title": "event.relatedTarget",
    "url": "../event.relatedTarget/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.relatedTarget/*/,
    "desc": "在事件中涉及的其它任何DOM元素。",
    "slug": "event.relatedTarget"
},
{
    "title": "event.result",
    "url": "../event.result/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.result/*/,
    "desc": "事件被触发的一个事件处理程序的最后返回值，除非值是 undefined。",
    "slug": "event.result"
},
{
    "title": "event.stopImmediatePropagation()",
    "url": "../event.stopImmediatePropagation/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.stopImmediatePropagation/*/,
    "desc": "阻止剩余的事件处理函数执行并且防止事件冒泡到DOM树上。",
    "slug": "event.stopImmediatePropagation"
},
{
    "title": "event.stopPropagation()",
    "url": "../event.stopPropagation/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.stopPropagation/*/,
    "desc": "防止事件冒泡到DOM树上，也就是不触发的任何前辈元素上的事件处理函数。",
    "slug": "event.stopPropagation"
},
{
    "title": "event.target",
    "url": "../event.target/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.target/*/,
    "desc": "触发事件的DOM元素。",
    "slug": "event.target"
},
{
    "title": "event.timeStamp",
    "url": "../event.timeStamp/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.timeStamp/*/,
    "desc": "这个属性返回事件触发时距离1970年1月1日的毫秒数。",
    "slug": "event.timeStamp"
},
{
    "title": "http://www.css88.com/jqapi-1.9/js/event.type",
    "url": "../event.type/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.type/*/,
    "desc": "描述事件的性质。",
    "slug": "http://www.css88.com/jqapi-1.9/js/event.type"
},
{
    "title": "event.which",
    "url": "../event.which/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/event.which/*/,
    "desc": "针对键盘和鼠标事件，这个属性能确定你到底按的是哪个键。",
    "slug": "event.which"
},
{
    "title": ".fadeIn()",
    "url": "../fadeIn/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/fadeIn/*/,
    "desc": "通过淡入的方式显示匹配元素。",
    "slug": "fadeIn"
},
{
    "title": ".fadeOut()",
    "url": "../fadeOut/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/fadeOut/*/,
    "desc": "通过淡出的方式隐藏匹配元素。",
    "slug": "fadeOut"
},
{
    "title": ".fadeTo()",
    "url": "../fadeTo/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/fadeTo/*/,
    "desc": "调整匹配元素的透明度。",
    "slug": "fadeTo"
},
{
    "title": ".fadeToggle()",
    "url": "../fadeToggle/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/fadeToggle/*/,
    "desc": "通过它们的不透明度动画，显示或隐藏匹配的元素。",
    "slug": "fadeToggle"
},
{
    "title": ":file Selector",
    "url": "../file-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/file-selector/*/,
    "desc": "选择所有类型为文件（file）的元素。",
    "slug": ":file Selector"
},
{
    "title": ".filter()",
    "url": "../filter/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/filter/*/,
    "desc": "筛选元素集合中匹配表达式或传递函数的测试的那些元素集合。",
    "slug": "filter"
},
{
    "title": ".find()",
    "url": "../find/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/find/*/,
    "desc": "得到当前匹配的元素集合中每个元素的后代， 由一个选择器，jQuery对象，或元素过滤。",
    "slug": "find"
},
{
    "title": ".finish()",
    "url": "../finish/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/finish/*/,
    "desc": "停止当前正在运行的动画，删除所有排队的动画，并匹配元素完成所有的动画。",
    "slug": "finish"
},
{
    "title": ".first()",
    "url": "../first/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/first/*/,
    "desc": "获取匹配元素集合中第一个元素。",
    "slug": "first"
},
{
    "title": ":first-child Selector",
    "url": "../first-child-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/first-child-selector/*/,
    "desc": "选择所有父级元素下的第一个子元素。",
    "slug": ":first-child Selector"
},
{
    "title": ":first-of-type Selector",
    "url": "../first-of-type-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/first-of-type-selector/*/,
    "desc": "选择所有相同的元素名称的第一个兄弟元素。",
    "slug": ":first-of-type Selector"
},
{
    "title": ":first Selector",
    "url": "../first-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/first-selector/*/,
    "desc": "选择第一个匹配的元素。",
    "slug": ":first Selector"
},
{
    "title": ".focus()",
    "url": "../focus/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/focus/*/,
    "desc": "为“focus” 事件绑定一个处理函数，或者触发元素上的 “focus” 事件。",
    "slug": "focus"
},
{
    "title": ":focus Selector",
    "url": "../focus-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/focus-selector/*/,
    "desc": "选择当前获取焦点的元素。",
    "slug": ":focus Selector"
},
{
    "title": ".focusin()",
    "url": "../focusin/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/focusin/*/,
    "desc": "将一个事件函数绑定到“focusin” 事件。",
    "slug": "focusin"
},
{
    "title": ".focusout()",
    "url": "../focusout/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/focusout/*/,
    "desc": "将一个事件函数绑定到“focusout”事件。",
    "slug": "focusout"
},
{
    "title": ".get()",
    "url": "../get/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/get/*/,
    "desc": "通过jQuery对象获取对应的DOM元素。",
    "slug": "get"
},
{
    "title": ":gt() Selector",
    "url": "../gt-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/gt-selector/*/,
    "desc": "选择匹配集合中所有大于给定index（索引值）的元素。",
    "slug": ":gt Selector"
},
{
    "title": ".has()",
    "url": "../has/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/has/*/,
    "desc": "筛选匹配元素集合中的那些有相匹配的选择器或DOM元素的后代元素。",
    "slug": "has"
},
{
    "title": "Has Attribute Selector [name]",
    "url": "../has-attribute-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/has-attribute-selector/*/,
    "desc": "选择所有具有指定属性的元素，该属性可以是任何值。",
    "slug": "Has Attribute Selector [name]"
},
{
    "title": ":has() Selector",
    "url": "../has-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/has-selector/*/,
    "desc": "选择元素其中至少包含指定选择器匹配的一个种元素。",
    "slug": ":has Selector"
},
{
    "title": ".hasClass()",
    "url": "../hasClass/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/hasClass/*/,
    "desc": "确定任何一个匹配元素是否有被分配给定的（样式）类。",
    "slug": "hasClass"
},
{
    "title": ":header Selector",
    "url": "../header-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/header-selector/*/,
    "desc": "选择所有标题元素，像h1, h2, h3 等.",
    "slug": ":header Selector"
},
{
    "title": ".height()",
    "url": "../height/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/height/*/,
    "desc": "获取匹配元素集合中的第一个元素的当前计算高度值 或 设置每一个匹配元素的高度值。",
    "slug": "height"
},
{
    "title": ":hidden Selector",
    "url": "../hidden-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/hidden-selector/*/,
    "desc": "选择所有隐藏的元素。",
    "slug": ":hidden Selector"
},
{
    "title": ".hide()",
    "url": "../hide/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/hide/*/,
    "desc": "隐藏匹配的元素。",
    "slug": "hide"
},
{
    "title": ".hover()",
    "url": "../hover/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/hover/*/,
    "desc": "将二个事件函数绑定到匹配元素上，分别当鼠标指针进入和离开元素时被执行。",
    "slug": "hover"
},
{
    "title": ".html()",
    "url": "../html/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/html/*/,
    "desc": "从集合的第一个匹配元素中获取HTML内容 或 设置每一个匹配元素的html内容。",
    "slug": "html"
},
{
    "title": "ID Selector (“#id”)",
    "url": "../id-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/id-selector/*/,
    "desc": "选择一个具有给定id属性的单个元素。",
    "slug": "ID Selector (“#id”)"
},
{
    "title": ":image Selector",
    "url": "../image-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/image-selector/*/,
    "desc": "选择所有图像类型的元素。",
    "slug": ":image Selector"
},
{
    "title": ".index()",
    "url": "../index/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/index/*/,
    "desc": "从匹配的元素中搜索给定元素的索引值，从0开始计数。",
    "slug": "index"
},
{
    "title": ".innerHeight()",
    "url": "../innerHeight/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/innerHeight/*/,
    "desc": "为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，但是不包括border。",
    "slug": "innerHeight"
},
{
    "title": ".innerWidth()",
    "url": "../innerWidth/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/innerWidth/*/,
    "desc": "为匹配的元素集合中获取第一个元素的当前计算宽度值,包括padding，但是不包括border。",
    "slug": "innerWidth"
},
{
    "title": ":input Selector",
    "url": "../input-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/input-selector/*/,
    "desc": "选择所有 input, textarea, select 和 button 元素.",
    "slug": ":input Selector"
},
{
    "title": ".insertAfter()",
    "url": "../insertAfter/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/insertAfter/*/,
    "desc": "在目标元素后面插入集合中每个匹配的元素。",
    "slug": "insertAfter"
},
{
    "title": ".insertBefore()",
    "url": "../insertBefore/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/insertBefore/*/,
    "desc": "在目标元素前面插入集合中每个匹配的元素。",
    "slug": "insertBefore"
},
{
    "title": ".is()",
    "url": "../is/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/is/*/,
    "desc": "针对一个选择器，DOM元素，或者jQuery对象检查当前匹配的元素集合，如果这些元素至少一个匹配给定的参数，那么返回true。",
    "slug": "is"
},
{
    "title": "jQuery()",
    "url": "../jQuery/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery/*/,
    "desc": "返回匹配的元素集合 无论是通过 在DOM的基础上传递的参数还是创建一个HTML字符串。",
    "slug": "jQuery"
},
{
    "title": ".jquery",
    "url": "../jquery-2/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jquery-2/*/,
    "desc": "一个包含了jQuery版本号的字符串",
    "slug": "jquery"
},
{
    "title": "jQuery.ajax()",
    "url": "../jQuery.ajax/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.ajax/*/,
    "desc": "执行一个异步的HTTP（Ajax）的请求。",
    "slug": "http://www.css88.com/archives/343"
},
{
    "title": "jQuery.ajaxPrefilter()",
    "url": "../jQuery.ajaxPrefilter/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.ajaxPrefilter/*/,
    "desc": "在每个请求之前被发送和$.ajax()处理它们前处理自定义Ajax选项或修改现有选项。",
    "slug": "jQuery.ajaxPrefilter"
},
{
    "title": "jQuery.ajaxSetup()",
    "url": "../jQuery.ajaxSetup/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.ajaxSetup/*/,
    "desc": "为以后要用到的Ajax请求设置默认的值",
    "slug": "jQuery.ajaxSetup"
},
{
    "title": "jQuery.ajaxTransport()",
    "url": "../jQuery.ajaxTransport/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.ajaxTransport/*/,
    "desc": "创建一个对象用于处理Ajax数据的实际传输。",
    "slug": "jQuery.ajaxTransport"
},
{
    "title": "jQuery.boxModel",
    "url": "../jQuery.boxModel/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.boxModel/*/,
    "desc": " 在jQuery 1.3中不建议使用（查看jQuery.support)）。当前页面中浏览器是否使用标准盒模型渲染页面。 建议使用 jQuery.support.boxModel 代替。W3C CSS Box Model。",
    "slug": "jQuery.boxModel"
},
{
    "title": "jQuery.browser",
    "url": "../jQuery.browser/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.browser/*/,
    "desc": "用来获取useragent的包含标志，读取自 navigator.userAgent。 我们不推荐使用这个属性，请尝试使用功能检测来代替（见jQuery.support）。 jQuery.browser在未来的版本中可能会转移到一个jQuery插件。",
    "slug": "jQuery.browser"
},
{
    "title": "jQuery.Callbacks()",
    "url": "../jQuery.Callbacks/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.Callbacks/*/,
    "desc": "一个多用途的回调列表对象，提供了强大的的方式来管理回调函数列表。",
    "slug": "jQuery.Callbacks"
},
{
    "title": "jQuery.contains()",
    "url": "../jQuery.contains/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.contains/*/,
    "desc": "检查一个DOM元素是另一个DOM元素的后代。",
    "slug": "jQuery.contains"
},
{
    "title": "jQuery.cssHooks",
    "url": "../jQuery.cssHooks/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.cssHooks/*/,
    "desc": "Hook一进入jQuery就覆盖特定的CSS属性获取或设置，正常化CSS属性命名，或创建自定义属性。",
    "slug": "jQuery.cssHooks"
},
{
    "title": "jQuery.cssNumber",
    "url": "../jQuery.cssNumber/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.cssNumber/*/,
    "desc": "一个对象，这个包含所有可以不使用单位的CSS属性。.css() 方法使用这个对象来确定是否可能附加px到无单位的值。",
    "slug": "jQuery.cssNumber"
},
{
    "title": "jQuery.data()",
    "url": "../jQuery.data/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.data/*/,
    "desc": "存储任意数据到指定的元素 并且/或者 返回设置的值。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.data"
},
{
    "title": "jQuery.Deferred()",
    "url": "../jQuery.Deferred/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.Deferred/*/,
    "desc": "一个构造函数，返回一个链式实用对象方法来注册多个回调，回调队列，  调用回调队列，并转达任何同步或异步函数的成功或失败状态。",
    "slug": "jQuery.Deferred"
},
{
    "title": "jQuery.dequeue()",
    "url": "../jQuery.dequeue/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.dequeue/*/,
    "desc": "在匹配的元素上执行队列中的下一个函数。",
    "slug": "jQuery.dequeue"
},
{
    "title": "jQuery.each()",
    "url": "../jQuery.each/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.each/*/,
    "desc": "一个通用的迭代函数，它可以用来无缝迭代对象和数组。数组和类似数组的对象通过一个长度属性（如一个函数的参数对象）来迭代数字索引，从0到length - 1。其他对象迭代通过其命名属性。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.each"
},
{
    "title": "jQuery.error()",
    "url": "../jQuery.error/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.error/*/,
    "desc": "接受一个字符串，并抛出包含这个字符串的异常。",
    "slug": "jQuery.error"
},
{
    "title": "jQuery.escapeSelector()",
    "url": "../jQuery.escapeSelector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.escapeSelector/*/,
    "desc": "转义CSS选择器中任何具有特殊的含义字符。",
    "slug": "jQuery.escapeSelector"
},
{
    "title": "jQuery.extend()",
    "url": "../jQuery.extend/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.extend/*/,
    "desc": "合并两个或更多对象的内容集成到第一个对象。",
    "slug": "jQuery.extend"
},
{
    "title": "jQuery.fx.interval",
    "url": "../jQuery.fx.interval/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.fx.interval/*/,
    "desc": "该动画的频率（以毫秒为单位）。",
    "slug": "jQuery.fx.interval"
},
{
    "title": "http://www.css88.com/jqapi-1.9/js/jQuery.fx.off",
    "url": "../jQuery.fx.off/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.fx.off/*/,
    "desc": "全局的禁用所有动画。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.fx.off"
},
{
    "title": "jQuery.get()",
    "url": "../jQuery.get/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.get/*/,
    "desc": "使用一个HTTP GET请求从服务器加载数据。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.get"
},
{
    "title": "jQuery.getJSON()",
    "url": "../jQuery.getJSON/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.getJSON/*/,
    "desc": "使用一个HTTP GET请求从服务器加载JSON编码数据。",
    "slug": "jQuery.getJSON"
},
{
    "title": "jQuery.getScript()",
    "url": "../jQuery.getScript/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.getScript/*/,
    "desc": "使用一个HTTP GET请求从服务器加载并执行一个 JavaScript 文件",
    "slug": "jQuery.getScript"
},
{
    "title": "jQuery.globalEval()",
    "url": "../jQuery.globalEval/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.globalEval/*/,
    "desc": " 在全局范围下执行一些JavaScript代码。",
    "slug": "jQuery.globalEval"
},
{
    "title": "jQuery.grep()",
    "url": "../jQuery.grep/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.grep/*/,
    "desc": "查找满足过滤功能数组元素。原始数组不受影响。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.grep"
},
{
    "title": "jQuery.hasData()",
    "url": "../jQuery.hasData/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.hasData/*/,
    "desc": " 确定任何一个元素是否有与之相关的jQuery数据。",
    "slug": "jQuery.hasData"
},
{
    "title": "jQuery.holdReady()",
    "url": "../jQuery.holdReady/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.holdReady/*/,
    "desc": "暂停或恢复.ready() 事件的执行。",
    "slug": "jQuery.holdReady"
},
{
    "title": "jQuery.inArray()",
    "url": "../jQuery.inArray/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.inArray/*/,
    "desc": "搜索数组中指定值并返回它的索引（如果没有找到则返回-1）。",
    "slug": "jQuery.inArray"
},
{
    "title": "jQuery.isArray()",
    "url": "../jQuery.isArray/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.isArray/*/,
    "desc": "确定的参数是一个数组。",
    "slug": "jQuery.isArray"
},
{
    "title": "jQuery.isEmptyObject()",
    "url": "../jQuery.isEmptyObject/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.isEmptyObject/*/,
    "desc": "检查对象是否为空（不包含任何属性）。",
    "slug": "jQuery.isEmptyObject"
},
{
    "title": "jQuery.isFunction()",
    "url": "../jQuery.isFunction/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.isFunction/*/,
    "desc": "确定的参数是一个Javascript 函数。",
    "slug": "jQuery.isFunction"
},
{
    "title": "jQuery.isNumeric()",
    "url": "../jQuery.isNumeric/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.isNumeric/*/,
    "desc": "确定它的参数是否是一个数字。",
    "slug": "jQuery.isNumeric"
},
{
    "title": "jQuery.isPlainObject()",
    "url": "../jQuery.isPlainObject/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.isPlainObject/*/,
    "desc": "测试对象是否是纯粹的对象（通过 \"{}\" 或者 \"new Object\" 创建的）",
    "slug": "jQuery.isPlainObject"
},
{
    "title": "jQuery.isWindow()",
    "url": "../jQuery.isWindow/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.isWindow/*/,
    "desc": " 确定参数是否为一个window对象。",
    "slug": "jQuery.isWindow"
},
{
    "title": "jQuery.isXMLDoc()",
    "url": "../jQuery.isXMLDoc/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.isXMLDoc/*/,
    "desc": "检查一个DOM节点是否在XML文档中（或者是一个XML文档）。",
    "slug": "jQuery.isXMLDoc"
},
{
    "title": "jQuery.makeArray()",
    "url": "../jQuery.makeArray/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.makeArray/*/,
    "desc": "转换一个类似数组的对象成为真正的JavaScript数组。",
    "slug": "jQuery.makeArray"
},
{
    "title": "jQuery.map()",
    "url": "../jQuery.map/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.map/*/,
    "desc": "将一个数组中的所有元素转换到另一个数组中。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.map"
},
{
    "title": "jQuery.merge()",
    "url": "../jQuery.merge/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.merge/*/,
    "desc": "合并两个数组内容到第一个数组。",
    "slug": "jQuery.merge"
},
{
    "title": "jQuery.noConflict()",
    "url": "../jQuery.noConflict/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.noConflict/*/,
    "desc": "放弃jQuery控制的$ 变量。",
    "slug": "jQuery.noConflict"
},
{
    "title": "jQuery.noop()",
    "url": "../jQuery.noop/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.noop/*/,
    "desc": "一个空函数",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.noop"
},
{
    "title": "jQuery.now()",
    "url": "../jQuery.now/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.now/*/,
    "desc": "返回一个数字，表示当前时间。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.now"
},
{
    "title": "jQuery.param()",
    "url": "../jQuery.param/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.param/*/,
    "desc": "创建一个序列化的数组或对象，适用于一个URL 地址查询字符串或Ajax请求。",
    "slug": "jQuery.param"
},
{
    "title": "jQuery.parseHTML()",
    "url": "../jQuery.parseHTML/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.parseHTML/*/,
    "desc": "将字符串解析到一个DOM节点的数组中。",
    "slug": "jQuery.parseHTML"
},
{
    "title": "jQuery.parseJSON()",
    "url": "../jQuery.parseJSON/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.parseJSON/*/,
    "desc": "接受一个标准格式的 JSON 字符串，并返回解析后的 JavaScript 对象。",
    "slug": "jQuery.parseJSON"
},
{
    "title": "jQuery.parseXML()",
    "url": "../jQuery.parseXML/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.parseXML/*/,
    "desc": "解析一个字符串到一个XML文件。",
    "slug": "jQuery.parseXML"
},
{
    "title": "jQuery.post()",
    "url": "../jQuery.post/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.post/*/,
    "desc": "通过服务器HTTP POST请求加载数据。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.post"
},
{
    "title": "jQuery.proxy()",
    "url": "../jQuery.proxy/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.proxy/*/,
    "desc": "接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文语境。",
    "slug": "jQuery.proxy"
},
{
    "title": "jQuery.queue()",
    "url": "../jQuery.queue/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.queue/*/,
    "desc": "显示或操作匹配的元素上已经执行的函数列队。",
    "slug": "jQuery.queue"
},
{
    "title": "jQuery.removeData()",
    "url": "../jQuery.removeData/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.removeData/*/,
    "desc": "删除一个先前存储的数据块。",
    "slug": "jQuery.removeData"
},
{
    "title": "jQuery.sub()",
    "url": "../jQuery.sub/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.sub/*/,
    "desc": "可创建一个新的jQuery副本，其属性和方法可以修改，而不会影响原来的jQuery对象。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.sub"
},
{
    "title": "jQuery.support",
    "url": "../jQuery.support/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.support/*/,
    "desc": "存在不同的浏览器功能或错误的属性的集合。 主要用于jQuery的内部使用;当他们不再需要在内部以提高页面的启动性能  可能会被删除的特定属性 。（译者注：一组属性，它们代表了不同的浏览器功能或缺陷的存在的集合。)",
    "slug": "jQuery.support"
},
{
    "title": "jQuery.trim()",
    "url": "../jQuery.trim/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.trim/*/,
    "desc": "去掉字符串起始和结尾的空格。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.trim"
},
{
    "title": "jQuery.type()",
    "url": "../jQuery.type/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.type/*/,
    "desc": "确定JavaScript 对象的类型[[Class]] 。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.type"
},
{
    "title": "jQuery.unique()",
    "url": "../jQuery.unique/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.unique/*/,
    "desc": "删除数组中重复元素。只处理删除DOM元素数组，而不能处理字符串或者数字数组。",
    "slug": "jQuery.unique"
},
{
    "title": "jQuery.when()",
    "url": "../jQuery.when/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/jQuery.when/*/,
    "desc": "提供一种方法来执行一个或多个对象的回调函数， Deferred(延迟)对象通常表示异步事件。",
    "slug": "http://www.css88.com/jqapi-1.9/js/jQuery.when"
},
{
    "title": ".keydown()",
    "url": "../keydown/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/keydown/*/,
    "desc": "为 “keydown” 事件绑定一个处理函数，或者触发元素上的“keydown” 事件。",
    "slug": "keydown"
},
{
    "title": ".keypress()",
    "url": "../keypress/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/keypress/*/,
    "desc": "为 “keypress” 事件绑定一个处理函数，或者触发元素上的 “keypress” 事件。",
    "slug": "keypress"
},
{
    "title": ".keyup()",
    "url": "../keyup/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/keyup/*/,
    "desc": "为 \"keyup\" 事件绑定一个处理函数，或者触发元素上的 \"keyup\" 事件。",
    "slug": "keyup"
},
{
    "title": ":lang Selector",
    "url": "../lang-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/lang-selector/*/,
    "desc": "选择指定语言的所有元素。",
    "slug": ":lang Selector"
},
{
    "title": ".last()",
    "url": "../last/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/last/*/,
    "desc": "获取匹配元素集合中最后一个元素。",
    "slug": "last"
},
{
    "title": ":last-child Selector",
    "url": "../last-child-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/last-child-selector/*/,
    "desc": "选择所有父级元素下的最后一个子元素。",
    "slug": ":last-child Selector"
},
{
    "title": ":last-of-type Selector",
    "url": "../last-of-type-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/last-of-type-selector/*/,
    "desc": "选择所有相同的元素名称的最后一个兄弟元素。",
    "slug": ":last-of-type Selector"
},
{
    "title": ":last Selector",
    "url": "../last-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/last-selector/*/,
    "desc": "选择最后一个匹配的元素。",
    "slug": ":last Selector"
},
{
    "title": ".length",
    "url": "../length/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/length/*/,
    "desc": "在jQuery对象中元素的数量。",
    "slug": "length"
},
{
    "title": ".live()",
    "url": "../live/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/live/*/,
    "desc": "附加一个事件处理器到符合目前选择器的所有元素匹配，现在和未来。",
    "slug": "live"
},
{
    "title": ".load()",
    "url": "../load/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/load/*/,
    "desc": "从服务器载入数据并且将返回的 HTML 代码并插入至 匹配的元素 中。",
    "slug": "load"
},
{
    "title": ".load()",
    "url": "../load-event/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/load-event/*/,
    "desc": "为“load” 事件绑定一个处理函数。",
    "slug": "load"
},
{
    "title": ":lt() Selector",
    "url": "../lt-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/lt-selector/*/,
    "desc": "选择匹配集合中所有小于给定index索引值）的元素。",
    "slug": ":lt Selector"
},
{
    "title": ".map()",
    "url": "../map/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/map/*/,
    "desc": "通过一个函数匹配当前集合中的每个元素,产生一个包含的返回值的jQuery新对象。",
    "slug": "map"
},
{
    "title": ".mousedown()",
    "url": "../mousedown/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/mousedown/*/,
    "desc": "为“mousedown”事件绑定一个处理函数，或者触发元素上的“mousedown” 事件。",
    "slug": "mousedown"
},
{
    "title": ".mouseenter()",
    "url": "../mouseenter/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/mouseenter/*/,
    "desc": "为 mouse enters（鼠标进入） 事件绑定一个处理函数，或者触发元素上的 mouse enters（鼠标进入） 事件。",
    "slug": "mouseenter"
},
{
    "title": ".mouseleave()",
    "url": "../mouseleave/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/mouseleave/*/,
    "desc": "为 mouse leaves（鼠标离开） 事件绑定一个处理函数，或者触发元素上的 mouse leaves（鼠标离开） 事件。",
    "slug": "mouseleave"
},
{
    "title": ".mousemove()",
    "url": "../mousemove/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/mousemove/*/,
    "desc": "为 \"mousemove\" 事件绑定一个处理函数，或者触发元素上的 \"mousemove\" 事件。",
    "slug": "mousemove"
},
{
    "title": ".mouseout()",
    "url": "../mouseout/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/mouseout/*/,
    "desc": " 为 \"mouseout\" 事件绑定一个处理函数，或者触发元素上的 \"mouseout\" 事件。",
    "slug": "mouseout"
},
{
    "title": ".mouseover()",
    "url": "../mouseover/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/mouseover/*/,
    "desc": "为 \"mouseover\" 事件绑定一个处理函数，或者触发元素上的\"mouseover\" 事件。",
    "slug": "mouseover"
},
{
    "title": ".mouseup()",
    "url": "../mouseup/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/mouseup/*/,
    "desc": "为\"mouseup\" 事件绑定一个处理函数，或者触发元素上的 \"mouseup\" 事件。",
    "slug": "mouseup"
},
{
    "title": "Multiple Attribute Selector [name=\"value\"][name2=\"value2\"]",
    "url": "../multiple-attribute-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/multiple-attribute-selector/*/,
    "desc": "选择匹配所有指定的属性筛选器的元素",
    "slug": "Multiple Attribute Selector [name=\"value\"][name2=\"value2\"]"
},
{
    "title": "Multiple Selector (“selector1, selector2, selectorN”)",
    "url": "../multiple-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/multiple-selector/*/,
    "desc": "将每一个选择器匹配到的元素合并后一起返回。",
    "slug": "Multiple Selector (“selector1, selector2, selectorN”)"
},
{
    "title": ".next()",
    "url": "../next/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/next/*/,
    "desc": "取得一个包含匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合。如果提供一个选择器，它检索下一个匹配选择器的兄弟元素。",
    "slug": "next"
},
{
    "title": "Next Adjacent Selector (“prev + next”)",
    "url": "../next-adjacent-Selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/next-adjacent-Selector/*/,
    "desc": "选择所有紧接在 “prev” 元素后的 “next” 元素",
    "slug": "Next Adjacent Selector (“prev + next”)"
},
{
    "title": "Next Siblings Selector (“prev ~ siblings”)",
    "url": "../next-siblings-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/next-siblings-selector/*/,
    "desc": "匹配 “prev” 元素之后的所有 兄弟元素。具有相同的父元素，并匹配过滤“兄弟姐妹”选择器。",
    "slug": "Next Siblings Selector (“prev ~ siblings”)"
},
{
    "title": ".nextAll()",
    "url": "../nextAll/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/nextAll/*/,
    "desc": "获得每个匹配元素集合中所有下面的同辈元素，选择性筛选的选择器。",
    "slug": "nextAll"
},
{
    "title": ".nextUntil()",
    "url": "../nextUntil/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/nextUntil/*/,
    "desc": "通过选择器，DOM节点，或jQuery对象得到每个元素接下来的所有的兄弟元素，但不包括匹配的元素。",
    "slug": "nextUntil"
},
{
    "title": ".not()",
    "url": "../not/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/not/*/,
    "desc": "删除匹配的元素集合中元素。",
    "slug": "not"
},
{
    "title": ":not() Selector",
    "url": "../not-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/not-selector/*/,
    "desc": "选择所有元素去除不匹配给定的选择器的元素。",
    "slug": ":not Selector"
},
{
    "title": ":nth-child() Selector",
    "url": "../nth-child-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/nth-child-selector/*/,
    "desc": "选择的他们所有父元素的第n个子元素。",
    "slug": ":nth-child Selector"
},
{
    "title": ":nth-last-child() Selector",
    "url": "../nth-last-child-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/nth-last-child-selector/*/,
    "desc": "选择的他们所有父元素的第n个子元素。计数从最后一个元素到第一个。",
    "slug": ":nth-last-child Selector"
},
{
    "title": ":nth-last-of-type() Selector",
    "url": "../nth-last-of-type-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/nth-last-of-type-selector/*/,
    "desc": "选择的所有他们的父级元素的第n个子元素，计数从最后一个元素到第一个。",
    "slug": ":nth-last-of-type Selector"
},
{
    "title": ":nth-of-type() Selector",
    "url": "../nth-of-type-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/nth-of-type-selector/*/,
    "desc": "选择他们父元素的兄弟元素中所有第n个子元素，且相同的元素名称。",
    "slug": ":nth-of-type Selector"
},
{
    "title": ":odd Selector",
    "url": "../odd-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/odd-selector/*/,
    "desc": "选择奇数元素，从 0 开始计数。同样查看偶数 even.",
    "slug": ":odd Selector"
},
{
    "title": ".off()",
    "url": "../off/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/off/*/,
    "desc": "移除一个事件处理函数。",
    "slug": "off"
},
{
    "title": ".offset()",
    "url": "../offset/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/offset/*/,
    "desc": "在匹配的元素集合中，获取的第一个元素的当前坐标， 或设置每一个元素的坐标， 坐标相对于文档。",
    "slug": "offset"
},
{
    "title": ".offsetParent()",
    "url": "../offsetParent/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/offsetParent/*/,
    "desc": "返回最近的被定过位的祖先元素。（译者注：祖先元素指该元素的上级元素，即包着它的外层元素）",
    "slug": "offsetParent"
},
{
    "title": ".on()",
    "url": "../on/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/on/*/,
    "desc": "在选定的元素上绑定一个或多个事件处理函数。",
    "slug": "on"
},
{
    "title": ".one()",
    "url": "../one/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/one/*/,
    "desc": "附加一个处理事件到元素。处理函数在每个元素上最多执行一次。",
    "slug": "one"
},
{
    "title": ":only-child Selector",
    "url": "../only-child-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/only-child-selector/*/,
    "desc": "选择所有其父元素下只有一个子元素的元素。",
    "slug": ":only-child Selector"
},
{
    "title": ":only-of-type Selector",
    "url": "../only-of-type-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/only-of-type-selector/*/,
    "desc": "选择所有元素没有兄弟元素具有相同的元素名称的所有元素。",
    "slug": ":only-of-type Selector"
},
{
    "title": ".outerHeight()",
    "url": "../outerHeight/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/outerHeight/*/,
    "desc": "为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，border和选择性的margin。返回一个整数（不包含“px”）表示的值  或 null如果空集合的元素调用。",
    "slug": "outerHeight"
},
{
    "title": ".outerWidth()",
    "url": "../outerWidth/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/outerWidth/*/,
    "desc": "为匹配的元素集合中获取第一个元素的当前计算宽度值,包括padding，border。",
    "slug": "outerWidth"
},
{
    "title": ".parent()",
    "url": "../parent/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/parent/*/,
    "desc": "获得集合中每个匹配元素的父级元素，选择性筛选的选择器。",
    "slug": "parent"
},
{
    "title": ":parent Selector",
    "url": "../parent-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/parent-selector/*/,
    "desc": "选择所有含有子元素或者文本的父级元素。",
    "slug": ":parent Selector"
},
{
    "title": ".parents()",
    "url": "../parents/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/parents/*/,
    "desc": "获得集合中每个匹配元素的祖先元素，选择性筛选的选择器",
    "slug": "parents"
},
{
    "title": ".parentsUntil()",
    "url": "../parentsUntil/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/parentsUntil/*/,
    "desc": "查找当前元素的所有的前辈元素，直到遇到选择器匹配的元素为止，不包括那个匹配到的元素。",
    "slug": "parentsUntil"
},
{
    "title": ":password Selector",
    "url": "../password-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/password-selector/*/,
    "desc": "选择所有类型为密码的元素。",
    "slug": ":password Selector"
},
{
    "title": ".position()",
    "url": "../position/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/position/*/,
    "desc": "获取匹配元素中第一个元素的当前坐标，相对于offset parent的坐标。( 译者注：offset parent指离该元素最近的而且被定位过的祖先元素 )",
    "slug": "position"
},
{
    "title": ".prepend()",
    "url": "../prepend/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/prepend/*/,
    "desc": "将参数内容插入到每个匹配元素的前面（元素内部）。",
    "slug": "prepend"
},
{
    "title": ".prependTo()",
    "url": "../prependTo/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/prependTo/*/,
    "desc": "将所有元素插入到目标前面（元素内）。",
    "slug": "prependTo"
},
{
    "title": ".prev()",
    "url": "../prev/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/prev/*/,
    "desc": "取得一个包含匹配的元素集合中每一个元素紧邻的前一个同辈元素的元素集合。选择性筛选的选择器。",
    "slug": "prev"
},
{
    "title": ".prevAll()",
    "url": "../prevAll/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/prevAll/*/,
    "desc": "获得集合中每个匹配元素的所有前面的兄弟元素，选择性筛选的选择器。",
    "slug": "prevAll"
},
{
    "title": ".prevUntil()",
    "url": "../prevUntil/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/prevUntil/*/,
    "desc": "获取每个元素但不包括选择器，DOM节点，或者jQuery对象匹配的元素的所有前面的兄弟元素。",
    "slug": "prevUntil"
},
{
    "title": ".promise()",
    "url": "../promise/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/promise/*/,
    "desc": "返回一个 Promise 对象用来观察当某种类型的所有行动绑定到集合，排队与否还是已经完成。",
    "slug": "promise"
},
{
    "title": ".prop()",
    "url": "../prop/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/prop/*/,
    "desc": "获取匹配的元素集中的第一个元素的属性（property）值或设置每一个匹配元素的一个或多个属性。",
    "slug": "prop"
},
{
    "title": ".pushStack()",
    "url": "../pushStack/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/pushStack/*/,
    "desc": "将一个DOM元素集合加入到jQuery栈。",
    "slug": "pushStack"
},
{
    "title": ".queue()",
    "url": "../queue/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/queue/*/,
    "desc": "显示或操作匹配的元素上已经执行的函数列队。",
    "slug": "queue"
},
{
    "title": ":radio Selector",
    "url": "../radio-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/radio-selector/*/,
    "desc": "选择所有类型为单选框的元素。",
    "slug": ":radio Selector"
},
{
    "title": ".ready()",
    "url": "../ready/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/ready/*/,
    "desc": "当DOM准备就绪时，指定一个函数来执行。",
    "slug": "ready"
},
{
    "title": ".remove()",
    "url": "../remove/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/remove/*/,
    "desc": "将匹配元素集合从DOM中删除。",
    "slug": "remove"
},
{
    "title": ".removeAttr()",
    "url": "../removeAttr/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/removeAttr/*/,
    "desc": "为匹配的元素集合中的每个元素中移除一个属性。",
    "slug": "removeAttr"
},
{
    "title": ".removeClass()",
    "url": "../removeClass/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/removeClass/*/,
    "desc": "移除集合中每个匹配元素上一个，多个或全部样式。",
    "slug": "removeClass"
},
{
    "title": ".removeData()",
    "url": "../removeData/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/removeData/*/,
    "desc": "在元素上移除绑定的数据",
    "slug": "removeData"
},
{
    "title": ".removeProp()",
    "url": "../removeProp/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/removeProp/*/,
    "desc": "为集合中匹配的元素删除一个属性（property）。",
    "slug": "removeProp"
},
{
    "title": ".replaceAll()",
    "url": "../replaceAll/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/replaceAll/*/,
    "desc": "用集合的匹配元素替换每个目标元素。",
    "slug": "replaceAll"
},
{
    "title": ".replaceWith()",
    "url": "../replaceWith/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/replaceWith/*/,
    "desc": "用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合。",
    "slug": "replaceWith"
},
{
    "title": ":reset Selector",
    "url": "../reset-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/reset-selector/*/,
    "desc": "选择所有类型为重置的元素。",
    "slug": ":reset Selector"
},
{
    "title": ".resize()",
    "url": "../resize/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/resize/*/,
    "desc": "为“resize”事件绑定一个处理函数，或者触发元素上的“resize” 事件。",
    "slug": "resize"
},
{
    "title": ":root Selector",
    "url": "../root-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/root-selector/*/,
    "desc": "选择该文档的根元素。",
    "slug": ":root Selector"
},
{
    "title": ".scroll()",
    "url": "../scroll/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/scroll/*/,
    "desc": "为 \"scroll\" 事件绑定一个处理函数，或者触发元素上的 \"scroll\" 事件。",
    "slug": "scroll"
},
{
    "title": ".scrollLeft()",
    "url": "../scrollLeft/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/scrollLeft/*/,
    "desc": "获取匹配的元素集合中第一个元素的当前水平滚动条的位置或设置每个匹配元素的水平滚动条位置。",
    "slug": "scrollLeft"
},
{
    "title": ".scrollTop()",
    "url": "../scrollTop/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/scrollTop/*/,
    "desc": "获取匹配的元素集合中第一个元素的当前垂直滚动条的位置或设置每个匹配元素的垂直滚动条位置。",
    "slug": "scrollTop"
},
{
    "title": ".select()",
    "url": "../select/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/select/*/,
    "desc": "为“select” 事件绑定一个处理函数，或者触发元素上的 “select” 事件。",
    "slug": "select"
},
{
    "title": ":selected Selector",
    "url": "../selected-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/selected-selector/*/,
    "desc": "",
    "slug": ":selected Selector"
},
{
    "title": ".selector",
    "url": "../selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/selector/*/,
    "desc": "为“select” 事件绑定一个处理函数，或者触发元素上的“select” 事件。",
    "slug": "selector"
},
{
    "title": ".serialize()",
    "url": "../serialize/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/serialize/*/,
    "desc": " 将用作提交的表单元素的值编译成字符串。",
    "slug": "serialize"
},
{
    "title": ".serializeArray()",
    "url": "../serializeArray/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/serializeArray/*/,
    "desc": "将用作提交的表单元素的值编译成拥有name和value对象组成的数组。例如[ { name: a value: 1 }, { name: b value: 2 },...]",
    "slug": "serializeArray"
},
{
    "title": ".show()",
    "url": "../show/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/show/*/,
    "desc": "显示匹配元素",
    "slug": "show"
},
{
    "title": ".siblings()",
    "url": "../siblings/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/siblings/*/,
    "desc": "获得匹配元素集合中每个元素的兄弟元素，选择性筛选的选择器。",
    "slug": "siblings"
},
{
    "title": ".size()",
    "url": "../size/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/size/*/,
    "desc": "返回的jQuery对象匹配的DOM元素的数量。",
    "slug": "size"
},
{
    "title": ".slice()",
    "url": "../slice/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/slice/*/,
    "desc": "减少匹配元素集合由索引范围指定的一个子集。",
    "slug": "slice"
},
{
    "title": ".slideDown()",
    "url": "../slideDown/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/slideDown/*/,
    "desc": "用滑动动画显示一个匹配元素。",
    "slug": "slideDown"
},
{
    "title": ".slideToggle()",
    "url": "../slideToggle/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/slideToggle/*/,
    "desc": "用滑动动画显示或隐藏一个匹配元素。",
    "slug": "slideToggle"
},
{
    "title": ".slideUp()",
    "url": "../slideUp/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/slideUp/*/,
    "desc": "用滑动动画隐藏一个匹配元素。",
    "slug": "slideUp"
},
{
    "title": ".stop()",
    "url": "../stop/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/stop/*/,
    "desc": "停止匹配元素当前正在运行的动画。",
    "slug": "stop"
},
{
    "title": ".submit()",
    "url": "../submit/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/submit/*/,
    "desc": "为“submit”事件绑定一个处理函数，或者触发元素上的“submit”事件。",
    "slug": "submit"
},
{
    "title": ":submit Selector",
    "url": "../submit-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/submit-selector/*/,
    "desc": "选择所有类型为提交的元素。",
    "slug": ":submit Selector"
},
{
    "title": ":target Selector",
    "url": "../target-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/target-selector/*/,
    "desc": "选择 由文档URI的格式化识别码表示的目标元素。",
    "slug": ":target Selector"
},
{
    "title": ".text()",
    "url": "../text/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/text/*/,
    "desc": "得到匹配元素集合中每个元素的文本内容结合，包括他们的后代，或设置匹配元素集合中每个元素的文本内容为指定的文本内容。",
    "slug": "text"
},
{
    "title": ":text Selector",
    "url": "../text-selector/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/text-selector/*/,
    "desc": "选择所有类型为文本的元素。",
    "slug": ":text Selector"
},
{
    "title": ".toArray()",
    "url": "../toArray/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/toArray/*/,
    "desc": "返回一个包含jQuery对象集合中的所有DOM元素的数组。",
    "slug": "toArray"
},
{
    "title": ".toggle()",
    "url": "../toggle/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/toggle/*/,
    "desc": "显示或隐藏匹配元素。",
    "slug": "toggle"
},
{
    "title": ".toggle()",
    "url": "../toggle-event/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/toggle-event/*/,
    "desc": "绑定两个或多个处理程序绑定到匹配的元素，用来执行在交替的点击。",
    "slug": "toggle"
},
{
    "title": ".toggleClass()",
    "url": "../toggleClass/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/toggleClass/*/,
    "desc": "在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或价值切换属性。即：如果存在（不存在）就删除（添加）一个类。",
    "slug": "toggleClass"
},
{
    "title": ".trigger()",
    "url": "http://www.css88.com/jqapi-1.9/trigger/",
    "desc": "根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为。",
    "slug": "trigger"
},
{
    "title": ".triggerHandler()",
    "url": "http://www.css88.com/jqapi-1.9/triggerHandler/",
    "desc": "为一个事件执行附加到元素的所有处理程序。",
    "slug": "triggerHandler"
},
{
    "title": ".unbind()",
    "url": "http://www.css88.com/jqapi-1.9/unbind/",
    "desc": "从元素上删除一个以前附加事件处理程序。",
    "slug": "unbind"
},
{
    "title": ".undelegate()",
    "url": "http://www.css88.com/jqapi-1.9/undelegate/",
    "desc": "删除当前选择器匹配的所有元素的事件处理程序，根据一组特定根元素的集合。",
    "slug": "undelegate"
},
{
    "title": ".unload()",
    "url": "http://www.css88.com/jqapi-1.9/unload/",
    "desc": "为“unload”JavaScript事件绑定一个事件处理程序。",
    "slug": "unload"
},
{
    "title": ".unwrap()",
    "url": "http://www.css88.com/jqapi-1.9/unwrap/",
    "desc": "将匹配元素集合的父级元素删除，保留自身（和兄弟元素，如果存在）在原来的位置。",
    "slug": "unwrap"
},
{
    "title": ".val()",
    "url": "http://www.css88.com/jqapi-1.9/val/",
    "desc": "获取匹配的元素集合中第一个元素的当前值或设置匹配的元素集合中每个元素的值。",
    "slug": "val"
},
{
    "title": ":visible Selector",
    "url": "http://www.css88.com/jqapi-1.9/visible-selector/",
    "desc": "选择所有可见的元素。",
    "slug": ":visible Selector"
},
{
    "title": ".width()",
    "url": "http://www.css88.com/jqapi-1.9/width/",
    "desc": "为匹配的元素集合中获取第一个元素的当前计算宽度值或给每个匹配的元素设置宽度。",
    "slug": "width"
},
{
    "title": ".wrap()",
    "url": "http://www.css88.com/jqapi-1.9/wrap/",
    "desc": " 在每个匹配的元素外层包上一个html元素。",
    "slug": "wrap"
},
{
    "title": ".wrapAll()",
    "url": "http://www.css88.com/jqapi-1.9/wrapAll/",
    "desc": "在所有匹配元素外面包一层HTML结构。",
    "slug": "wrapAll"
},
{
    "title": ".wrapInner()",
    "url": "http://www.css88.com/jqapi-1.9/wrapInner/",
    "desc": "在匹配元素里的内容外包一层结构。",
    "slug": "wrapInner"
}];
//$("body").append('<ul id="searchList" style="display:none"></ul>');
var $searchList=$("<div></div>",{
    "id":"searchList",
    "style":"display:none"
}).appendTo("#header_warp");
var listLen,ind;
function showList(that){
    var $that=$(that);
    var schKey = $that.val().toLowerCase();
    /*
    "title": ".add()",
    "url": "../add/index.htm"/*tpa=http://www.css88.com/jqapi-1.9/add/*/,
    "desc": "添加元素到匹配的元素集合。",
    "slug": "add"
    */
    var $search=$("#search-field");
    var posL=$search.offset().left;
    var posT=$search.height()+4;
    var searchItem="<ul>";
    if ($.trim(schKey) == "") {
        $searchList.find("li").hide();
        $searchList.hide().empty();
    } else {
        $.each(searchArr,function(index,value){
            var key = this.slug.toLowerCase();
            if(key.indexOf(schKey) >= 0){
                searchItem+='<li><a href="' + this.url + '"><span class="item_title">' + this.title + '</span><span class="desctext">' + this.desc + '</span></a></li>';
            }
        });
        searchItem+="</ul>";
        $searchList.empty().append(searchItem).css({top:posT,left:posL}).show();
        $displaySearchList=$searchList.find("li");
        $displaySearchList.eq(0).addClass("cur");
        listLen=$displaySearchList.length;
        ind = $searchList.find(".cur").index();
        $searchList.on("mouseenter","li",function(){
            $displaySearchList.removeClass("cur");
            $(this).addClass("cur");
        });
        if($.trim(searchItem)=="<ul></ul>"){
            searchItem+="<li class='nosearch'><p>悲剧啊！没有找到相关的API 或者 愚人码头的程序出bug了！</p></li>";
            $searchList.empty().append(searchItem);
            $searchList.off("mouseenter","li");
        }
    }

}
function moveSelectedItem(index) {
    if(listLen){
        ind += index;
        if (ind >= listLen) {
            ind -= listLen
        }
        if(ind < 0){
            if(ind === -2){
                ind = -1;
            }
            ind += listLen;
        }
        var max=8;
        if(listLen > max && ind >= parseInt(max/2) ){
            //var nowScrollTop=24* (ind-5);
            $searchList.scrollTop(45* (ind-parseInt(max/2)))
        }

        if(ind==0){
            $searchList.scrollTop(0)
        }
        $displaySearchList.removeClass("cur");
        $($displaySearchList[ind]).addClass("cur");
    }
}
function gotoDoc(){
    var $item= $searchList.find(".cur").find("a");
    if($item.length) {
        window.location= $item.attr("href");
    }else{
        showList(document.getElementById("search-field"));
    }
}
$("#search-field").keyup(function (event) {
    var keycode = event.which;
    event.preventDefault();
    switch (keycode) {
        case 38:
            moveSelectedItem(- 1);
            break;
        case 40:
            moveSelectedItem(1);
            break;
        case 9:
        case 13:
            gotoDoc();
            break;

        default:
            showList(this);
    }
});
$("#search-field").click(function(){
    if($(this).val()=="" ){
        $searchList.hide().empty();
    }
});
