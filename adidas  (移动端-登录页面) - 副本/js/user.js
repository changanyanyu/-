$(document).ready(function(){
	$(".inputone").click(function(){
		$(".userbox").slideToggle({display:'block',zIndex:'10000'},"slow");
	});
	$(".inputoneone").click(function(){
		$(".userboxfind").slideToggle({display:'block',zIndex:'10000'},"slow");
	});
	// 
	// 
	// 
	// 
	// 
// 	$(".inputone").click(function(){
// 		if(this.value="-"){
// 			$(".userbox").slideDown({display:'block',zIndex:'10000'},"slow",function(){
// 				$(".userbox").value="+";
// 			});
// 		}else if(this.value="+"){
// 			$(".userbox").slideUp({display:'none',zIndex:'10000'},"slow",function(){
// 				$(".userbox").value="-";
// 			});
// 		}
// 	});


// $(".inputoneone").click(function(){
// 		if(this.value="-"){
// 			$(".userboxfind").slideDown({display:'block',zIndex:'10000'},"slow",function(){
// 				$(".userboxfind").value="+";
// 			});
// 		}else if(this.value="+"){
// 			$(".userboxfind").slideUp({display:'none',zIndex:'10000'},"slow",function(){
// 				$(".userboxfind").value="-";
// 			});
// 		}
// 	});




});