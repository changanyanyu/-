$(document).ready(function(){
	$("#header span").click(function(){
		$(".contentnav").toggle({
			width:'100%'},1000);
	});

});

$(document).ready(function(){
	$(".nav a:nth-child(3)").click(function(){
		$(".person").slideToggle({
			width:'100%'},1000);
	});
});
// $(document).ready(function(){
// 	$(".inputone").click(function(){
// 		if(this.value="-"){
// 			$(".contentnav").show({
// 			width:'100%'},1000);
// 		}else if(this.value="+"){
// 			$(".contentnav").hide({
// 			width:'100%'},1000);
// 		}
// 	});
// });


