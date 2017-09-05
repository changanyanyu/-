	$(document).ready(function(){
		$("#header span").click(function(){
			$(".contentnav").toggle({
				width:'100%'},1000);
		});
	});

	// $(document).ready(function(){
	// 	$("#header span").click(function(){
	// 		$("#header span").css({transform:'rotateZ(90deg)',transition:'all 1s'});
	// 	});
	// 	$("#header span").mouseleave(function(){
	// 		$("span").css({transform:'rotateZ(-90deg)',transition:'all 1s'});
	// 	});
	// });