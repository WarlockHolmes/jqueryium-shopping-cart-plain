var itemTotal = function (row) {
  var total = row.children('.item-total');
  var quantity = Number(row.find('.item-quantity input').val());
  var price = Number(row.children('.item-price').text().slice(1));
  var amount = quantity * price;
  total.text('$'+amount);
  return amount;
}

var updateItemTotal = function () {
  var arr = [];
  $('tbody tr').each(function(i, row){
    itemTotal($(row));
    arr.push(itemTotal($(row)));
  })
  var total = arr.reduce(function(sum, val){
    return sum += val;
  });
  $('#cart-total').text('Cart Total: $'+total);
}

$(document).ready(function(){

  updateItemTotal();

  var timeout;
  $(document).on('input', '.item-quantity input', function(){
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateItemTotal();
    }, 500);
  })

  $(document).on('submit', '#add-item', function(){
    event.preventDefault();
    var item = $('#add-item input').first().val();
    var price = $('#add-item input').last().val();
    if (item !== undefined && name !== undefined){
      $('tbody').append('<tr>'+
        '<td class="item-name">'+item+'</td>'+
        '<td class="item-price">$'+price+'</td>'+
        '<td class="item-quantity"><input name="name" type="number" value="1"/></td>'+
        '<td class="item-total"></td>'+
        '<td><button class="btn btn-outline-secondary">remove</button></td>'+
      '</tr>');
      $('#add-item input').first().val('');
      $('#add-item input').last().val('');
    }
    updateItemTotal();
  });
  $(document).on('click', 'td > button', function(){
    $(this).closest('tr').remove();
    updateItemTotal();
  });
});
