$('.order_type').click(function(){
	$('.order_type').removeClass('active_type');
	$(this).addClass('active_type');
})

$('.recent').click(function(){
	$('.order_item').fadeIn();
})

$('.finished').click(function(){
	$('.order_item').fadeOut();
	$('.finished_item').fadeIn();
})

$('.cancelled').click(function(){
	$('.order_item').fadeOut();
	$('.cancelled_item').fadeIn();
})