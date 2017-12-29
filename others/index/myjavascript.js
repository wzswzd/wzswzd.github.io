
// 001
/*
$(function(){
	$(".group a").each(

    	function() {
			$(this).attr("target", "_blank");
    });
});
*/


// 002

$(function() {
    $('.group a').each(

    	function() {
        var href = $(this).attr('href');
        var count = window.localStorage.getItem(href);
        count = count || 0;
        $(this).append('<i>' + count + '</i>');
        $(this).attr('target', '_blank');
        $(this).click(

        	function() {
            var count = parseInt($(this).find('i').html()) + 1;
            $(this).find('i').html(count);
            window.localStorage.setItem(href, count);
            console.log(count);
        });
        $(this).hover(
	
        	function() {
				var attrHref = $(this).attr('href');
				$(this).parents('.group').find('h3 i').html(attrHref);				
				var attrTitle = $(this).attr('title');
				if (attrTitle) {
					$(this).parents('.group').find('h3 span').html("tips: " + attrTitle);
				}
			},
			
			function() {
				$(this).parents('.group').find('h3 i').html('');
				$(this).parents('.group').find('h3 span').html("");				
			}
		);
    });
});

