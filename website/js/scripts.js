$(function () {
	var link = $("a[data-toggle='modal']");
	var modal = $(".modal");

	link.on("click", function (e) {
		var work = $(this).attr("data-work");
		e.preventDefault();
		modal.find(".modal-body").load(work+".html"); 
	})

	$(".down_arrow-link").on("click", function(e) {
		e.preventDefault();
		var id = $(this).attr("href"),
		top = $(id).offset().top;

		$("body, html").animate({scrollTop: top+"px"}, 800);

	})
})