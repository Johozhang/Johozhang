var pos = [];
	$(".part").each(function() {
		pos.push($(this).position().top);//获取到每个楼层的文档坐标top值
	})
	pos.push(0);//将天台的scrollTop值也保存，就是document.body.scrollTop = 0;

	$("#rightBar li").on("click",function() {
		var index = $(this).index();
		// $("html,body").scrollTop(pos[index]);
		$("html,body").animate({
			scrollTop:pos[index]
		})
	})

	$(window).on("scroll",function() {
		if($(document).scrollTop() > 0) {
			// $("#rightBar").show();
			$("#rightBar").slideDown();
		}else {
			// $("#rightBar").hide();
			$("#rightBar").slideUp();
		}
	})