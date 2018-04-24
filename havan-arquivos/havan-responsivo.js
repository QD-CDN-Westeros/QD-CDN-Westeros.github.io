$(document).ready(function() 
{
	$(".close").css("display", "none");

	var isMenuOpen = false;

	$('.menu_btn').click(function()
	{
		if (isMenuOpen == false)
		{
		//alert('je suis dans le bon cas')
			$("#menu-responsivo-havan").clearQueue().animate({
				right : '0'
			})
			$("#page").clearQueue().animate({
				"margin-left" : '-290px'
			})
			
			$(this).fadeOut(200);
			$(".close").fadeIn(300);
			
			isMenuOpen = true;
		} 
	});
	
	$('.close').click(function()
	{
		if (isMenuOpen == true)
		{
			$("#menu-responsivo-havan").clearQueue().animate({
				right : '-240px'
			})
			$("#page").clearQueue().animate({
				"margin-left" : '0px'
			})
			
			$(this).fadeOut(200);
			$(".menu_btn").fadeIn(300);
			
			isMenuOpen = false;
		}
	});
});

$(function() {
	// Function to toggle active class on chat container
	$('.footer-qd-v1-chat-header:not(.qd-on)').addClass('qd-on').on('click', function() {
		$('.footer-qd-v1-chat').toggleClass('active');
		return false;
	});

	$('.footer-qd-v1-btn:not(.qd-on)').addClass('qd-on').on('click', function() {
		window.open('https://www12.directtalk.com.br/chat31/?idd=1F520090798CE01741EB', 'Chat Online Havan','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
		return false;
	});
	// End
});
