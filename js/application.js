var updateItemTotal = function (row) {
  var total = row.children('.item-total');
  var quantity = Number(row.find('.item-quantity input').val());
  var price = Number(row.children('.item-price').text());
  var amount = quantity * price;
  total.text(amount);
  return amount;
}


$(document).ready(function(){

  $('tbody tr').each(function(i, row){
    updateItemTotal($(row));
  })

  var timeout;
  $(document).on('input', '.item-quantity input', function(){
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateItemTotal();
    }, 1000);
  })
});
