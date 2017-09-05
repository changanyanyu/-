$(document).ready(function(){
	$("#header span").click(function(){
		$(".contentnav").toggle({
			width:'100%'},1000);
		$(".contentnav").css({zIndex:"999"})
	});



	/*$(".nav a:nth-child(3)").Toggle(function(){
		$(".person").slideToggle({
			width:'100%'},100000);
	});*/
	$(".nav a:nth-child(3)").toggle(
  function () {
    $(".person").stop(true,false).animate({"height":"41px"},500)
  },
  function () {
    $(".person").stop(true,false).animate({"height":"0px"},500)
  }
);

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


