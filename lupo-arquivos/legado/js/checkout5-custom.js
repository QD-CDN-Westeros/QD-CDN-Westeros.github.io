stepCheckout = function(){
    $('.mx-timeline ul li').removeClass("active");
    switch (document.location.hash) {
        case "#/payment":
            $('.mx-timeline ul li.body-order-form').addClass("active");
            break;
        case "#/email":
        case "#/profile":
        case "#/shipping":
            $('.mx-timeline ul li.cadastro').addClass("active");
            break;
        case "#/cart":
            $('.mx-timeline ul li.body-cart').addClass("active");
            break;
        default:
            "/checkout/orderPlaced/" == document.location.pathname && $('.mx-timeline ul li.confirmacao').addClass("active");
    }
};


window.addEventListener("hashchange", stepCheckout);
$(document).ready(function(){
	stepCheckout();
  	
 


  $(document).ajaxStop(function() {
      
  });

  
}, true);

setTimeout(function(){
  var inputCupom = document.getElementById ("cart-coupon");
	  inputCupom.placeholder = "Cupom de desconto";
  
   $( ".coupon-fields" ).append( "<p class='text-cupon'>Se você possui um Vale-troca ou Cartão Presente eles devem ser informados na etapa de pagamento do seu pedido.</p>" );
}, 1500);



/* MT SOLUÇÕES */

let updateFields = () => {
  	
  	setTimeout(function(){
		let $city = document.querySelector('#ship-city');
  		let $state = document.querySelector('#ship-state');
  		let $input = document.querySelector('#ship-more-info');
  		let $inputNumber = document.querySelector('#ship-number');
  		let $inputNeighborhood = document.querySelector('#ship-neighborhood');
  		let $inputStreet = document.querySelector('#ship-street');
  		let $inputReceiver = document.querySelector('#ship-name');
  		
  
  		  
		if ($input != null && $inputNumber != null){
				$input.setAttribute('maxlength', '30');
  				$inputNumber.setAttribute('maxlength', '5');
  				$inputNeighborhood.setAttribute('maxlength', '30');
  				$inputStreet.setAttribute('maxlength', '50');
  				$inputReceiver.setAttribute('maxlength', '30');	
 				
		}
  	
  		if ($city != null && $state != null){
            if ($city.value == '' && $state.value == ''){
                $city.style.pointerEvents = 'auto';
                $state.style.pointerEvents = 'auto';
			}
		}
	
	}, 1000);
	
};

let target = document.body;
let observer = new MutationObserver(updateFields);
let config = { childList: true, attributes: false, subtree: true };
  
observer.observe(target, config);