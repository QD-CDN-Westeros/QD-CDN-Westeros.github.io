/* DESKTOP-H5GU4NO - 29/05/2023 11:37:26 GMT */
function variationsButton(){$(".buy-button").on("click",function(){var selectedSize=$(".dimension-Tamanho.sku-picked").length;var selectedColor=$(".dimension-Cor.sku-picked").length;if(selectedSize==0||selectedColor==0){handleShowSkuAlertModal()}});if(!href)return;const query=href.split("?")[1],_getQueryParameters=rex.utils.getQueryParameters(query),id=_getQueryParameters.sku,quantity=_getQueryParameters.qty,seller=_getQueryParameters.seller,jssalesChannel=window.jssalesChannel||_getQueryParameters.sc||"",items=[{id:id,quantity:quantity,seller:seller}];addToCard({items:items,jssalesChannel:jssalesChannel})}function addToCard({items,jssalesChannel}){vtexjs.checkout.addToCart(items,null,jssalesChannel).done(function(orderForm){$("body").removeClass("product--show-info product--show-size-selector");rex.modules.get("minicart")[0].open()})}function createAlertSkuModal(){const bodyContainer=document.querySelector("body");const modalElementHTML=`
    <div class="sku-alert-wrapper">
      <div class="sku-alert-modal">
        <header>
          <h1>Por favor, selecione uma das opções disponíveis!</h1>

          <button type="button" onclick="handleClickCloseSkuAlertModal()"><i></i></button>
        </header>

        <button type="button" onclick="handleClickCloseSkuAlertModal()">OK</button>
      </div>
    </div>
  `;bodyContainer.insertAdjacentHTML("afterbegin",modalElementHTML)}function handleShowSkuAlertModal(){const modal=document.querySelector(".sku-alert-wrapper");if(!modal.classList.contains("visible")){modal.classList.add("visible")}}function handleClickCloseSkuAlertModal(){const modal=document.querySelector(".sku-alert-wrapper");modal.classList.remove("visible")}createAlertSkuModal();variationsButton();