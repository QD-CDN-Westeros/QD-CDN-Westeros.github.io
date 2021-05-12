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
    if (window.location.href.indexOf('ambient=dev') > -1) {
        freteGratis();
    }
});

$(document).ajaxStop(function() {
    var inputCupom = document.getElementById ("cart-coupon");
        inputCupom.placeholder = "Cupom de desconto";
    
    $( ".coupon-fields" ).append( "<p class='text-cupon'>Se você possui um Vale-troca ou Cartão Presente eles devem ser informados na etapa de pagamento do seu pedido.</p>" );
});


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

const freteGratis = () => {
    $(window).on('orderFormUpdated.vtex', function () {

        try {
            $( "#freteGratis" ).remove();
            $( ".falta-frete" ).remove();
            $( ".barra-frete" ).remove();

            var valorProduto = vtexjs.checkout.orderForm.value;
            var f = (10000 - valorProduto);

            console.log(valorProduto);
            if (f <= 0) {

                $(".summary-totalizers .accordion-group").after('<div id="freteGratis" class="wrap-frete"></div>');
                $("#freteGratis").append('<div class="falta-frete"> <img src="/arquivos/caminhao-frete.png" alt="caminhao frete"> Você ganhou <strong> Frete Grátis</strong></div>');
                $("#freteGratis").append('<div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">  </div> </div>');
                $("#freteGratis").find('.progress-bar').css('width', '100%').attr('aria-valuenow', '100');
                
            } else {
                
                var faltaFreteGratis = (f / 100);
                var valor = valorProduto.toString();
                var len = valor.length;
                console.log(valor);
                console.log(len);
                var percent = valor.substring(0, len - 2) + "." + valor.substring(len - 2);

                faltaFreteGratis = faltaFreteGratis.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                
                console.log("valor da inteiro " + valorProduto);
                console.log("valor da barra " + percent)
                $(".summary-totalizers .accordion-group").after('<div id="freteGratis" class="wrap-frete"></div>');
                $("#freteGratis").append('<div class="falta-frete"> <img src="/arquivos/caminhao-frete.png" alt="caminhao frete"> Faltam só <strong>' + faltaFreteGratis + '</strong> para seu <strong> Frete Grátis</strong></div>');
                $("#freteGratis").append('<div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">  </div> </div>');
                $("#freteGratis").find('.progress-bar').css('width', percent + '%').attr('aria-valuenow', percent);
                $('.monetary.form-postal-code').show();

            }

            console.log('Checkout atualizado');
        } catch (error) {
            console.log(error);
        }
    });
}