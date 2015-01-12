var url = "http://"+window.location.hostname+"/en/";
var video;
var openCart = 0;
window.onload = function(){
		setTimeout(function(){
			$('#loader').fadeOut('slow');
			//clearInterval(loader);
		},1500);
		resizeTop();
	};
	window.onresize = function(){
	resizeTop();
	};
jQuery(document).ready(function() { 
	resizeTop();
		
	//funzioni carrello
	//####
	$('#cart').click(function(){
		openCart = 1;
		$('#cartOpen').animate({
			left: '63px'
		},'slow');
	});
	$('html,#closeCart').click(function() {
	//Hide the menus if visible
		if(openCart == 1){
			$('#cartOpen').animate({
				left: '-368px'
			},'slow');
			openCart = 0;
		}
	});
	
	$('#logout').click(function(){			
			$.ajax({
				type: "POST",
				url: url+"login/out.php",
				success: function(response){
				if(response == "ACK"){
					location.reload(true);
				}
			}
			});
		
	    return false;
	});
	$('#cartOpen,#cart').click(function(event){
	    event.stopPropagation();
	});
	$('.deleteCart').click(function(){
		var delProd = parseInt($(this).data('iddel'));			
		$.ajax({
			type: "POST",
			url: url+"ajax/delProdCart.php",
			data: "id="+delProd,
			success: function(response){
				var r = response.replace(/\s+$|^\s+/g, "");
				var c = r.split("#", c);
				$('#idProd'+delProd).fadeOut('slow');
					$('#cart b i').animate({
						width:'20px',
						height:'20px',
						'margin':'-10px'
					},200,function(){
						$('#cart b').html(c[1]+'<i></i>');
						$('#cart b i').animate({
							width:'0',
							height:'0',
							'margin':'0'
						},200);
					});
				if(c[1]==0){
					$('#cart b').removeClass('full');
					$('#cartOpen ul,#bottomCart').remove();
					$('#cartOpen').append("<h3 style='display:none;'>Cart is empty!</h3><a style='display:none;' href='"+url+"shop_online_eliquid' class='button' title='Got to the shop online'>Shop online<span></span></a>");
					$('#cartOpen h3,#cartOpen a').fadeIn('slow');
				}
				$('#bottomCart span b').fadeOut('slow',function(){
					$(this).html(c[2]+" &euro;");
					$(this).fadeIn('slow');
				});
			}
		});
	});
	$("#cartOpen ul").mCustomScrollbar({
					axis:"y",
					theme:"minimal-dark",
					scrollInertia:550,
					scrollbarPosition:"inside",
					advanced:{ updateOnContentResize: true }
				});
	//###
	
	
});
function resizeTop(){ 
	var x,w;
	x = $(window).height();
	w = $(window).width() - 63;
	$("#nav,#submenu,#cartOpen").css('height',x);
	$('#cartOpen ul').css('max-height',x-400);
	$("#cartOpen ul").mCustomScrollbar("update");
	$("#submenu,footer").css('width',w);
	
	return false;
}