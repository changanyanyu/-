//导航栏下拉菜单
	//section-man
	$(function(){
		$(".headertwo li:first-child").mouseenter(function(){
			$("#box").slideDown(800);
		});
		$("#box").mouseleave(function(event){
			var evt=event || window.event;
			evt.stopPropagation();
			$("#box").slideUp(800);
		});
	});
	//section-woman
	$(function(){
		$(".headertwo li:nth-child(2)").mouseenter(function(){
			$("#boxtwo").slideDown(800);
		});
		$("#boxtwo").mouseleave(function(event){
			var evt=event || window.event;
			evt.stopPropagation();
			$("#boxtwo").slideUp(800);
		});
	});

	//section-childdren
	$(function(){
		$(".headertwo li:nth-child(3)").mouseenter(function(){
			$("#boxthree").slideDown(800);
		});
		$("#boxthree").mouseleave(function(event){
			var evt=event || window.event;
			evt.stopPropagation();
			$("#boxthree").slideUp(800);
		});
	});

	//play
	$(function(){
		$(".headertwo li:nth-child(4)").mouseenter(function(){
			$("#boxfour").slideDown(800);
		});
		$("#boxfour").mouseleave(function(event){
			var evt=event || window.event;
			evt.stopPropagation();
			$("#boxfour").slideUp(800);
		});
	});
	//pinpai
	$(function(){
		$(".headertwo li:nth-child(5)").mouseenter(function(){
			$("#boxfive").slideDown(800);
		});
		$("#boxfive").mouseleave(function(event){
			var evt=event || window.event;
			evt.stopPropagation();
			$("#boxfive").slideUp(800);
		});
	});
	//madidas
	$(function(){
		$(".headertwo li:nth-child(6)").mouseenter(function(){
			$("#boxsix").slideDown(800);
		});
		$("#boxsix").mouseleave(function(event){
			var evt=event || window.event;
			evt.stopPropagation();
			$("#boxsix").slideUp(800);
		});
	});


	// 触发隐藏的二维码
	$(document).ready(function(){
		$(".erwei i:last-child").mouseenter(function(){
			$(".erweimabox").css({display:'block',boxShadow:'0 3px 3px gray',transition:'all 1s'});
		});
		$(".erwei i:last-child").mouseleave(function(){
			$(".erweimabox").css({display:'none'});
		});
	});
