document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function(){
  console.log('custom JS');
  const product_detail = document.querySelector('.product-detail');
  if(Boolean(product_detail)){
    const product_detail_js_price_area = product_detail.querySelector('.price-area.js-price[data-price]');
    if(Boolean(product_detail_js_price_area)){
      const product_detail_quantity_input = product_detail.querySelector('.quantity-wrapper input[name="quantity"]');
      const product_detail_js_price = product_detail_js_price_area.querySelector('.current-price');
      const product_detail_js_wasprice = product_detail_js_price_area.querySelector('.was-price');

      function product_money_format(price, quantity){
        if(!Boolean(quantity)){
          quantity = 1;
        }
        var product_price_summ = (price / 100 * quantity).toFixed(2).toString().replace('.',',');
        var product_price_summ_money_format = theme.money_format.replace('{{amount_with_comma_separator}}', product_price_summ);
        
        return product_price_summ_money_format;
      }
      
        if(Boolean(product_detail_js_price) && Boolean(product_detail_quantity_input) ){
          
          var product_price = product_detail_js_price_area.dataset.price;
          var product_quantity = product_detail_quantity_input.value;
          product_detail_js_price.textContent = product_money_format(product_price, product_quantity);

          if(Boolean(product_detail_js_wasprice)){
            var product_wasprice = product_detail_js_price_area.dataset.wasprice;
            product_detail_js_wasprice.textContent = product_money_format(product_wasprice, product_quantity)
          }

          product_detail_quantity_input.addEventListener('change', function(){
          
            var product_price = product_detail_js_price_area.dataset.price;
            var product_quantity = product_detail_quantity_input.value;
              
            product_detail_js_price.textContent = product_money_format(product_price, product_quantity);

            if(Boolean(product_detail_js_wasprice)){
            var product_wasprice = product_detail_js_price_area.dataset.wasprice;
            product_detail_js_wasprice.textContent = product_money_format(product_wasprice, product_quantity)
            }
            
          })
          
        }
    }
  }
    }, 1000)
}, false);