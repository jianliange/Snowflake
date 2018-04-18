//制造雪花
var flake = $("<div></div").css({"position":"absolute","top":"-50px"}).html("❉");
//雪花的大小随机
var minSize = 15;
var maxSize = 30;
//雪花为白色
var flakeColor = "#fff";
//轮播图
var i=0;
$(function(){
	//获取屏幕宽高度
	var documentWidth = $(document).width();
	var documentHeight = $(document).height();
	//制造雪花
	setInterval(function(){
		//雪花大小
		var flakeSize = minSize + Math.random()*maxSize;
		//雪花初始位置
		var startLeft = documentWidth*Math.random();
		//雪花最后位置
		var endLeft = documentWidth*Math.random();
		var endTop = documentHeight;
		//雪花透明度
		var flakeopacity = 0.5 + Math.random()*0.5;
		//下落时间
		var fallTime = 3000 + Math.random()*3000;
		flake.clone().appendTo("body").css({
			"left":startLeft,
			"color":flakeColor,
			"font-size":flakeSize,
			"opacity":flakeopacity
		}).animate({"left":endLeft,"top":endTop,"opacity":"0.4"},fallTime,function(){$(this).remove();});		
	},300);
	//图片转化
	picShow();
});
//轮播图
function picShow(){
	setInterval(function(){
		$("ul li").eq(i).fadeIn().siblings().fadeOut();
		i++;
		if(i==3){
			i=0;
		}
	},3000);
}
