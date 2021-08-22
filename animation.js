$(document).ready(function () {
  var citem=0;
  $('.btn-buy').on('click',function(e){
    
    
    if($(this).hasClass('disable')==false)
    {
      citem++;
      $('#cart').text(citem+'Item').data('count','item');
      $(this).addClass('disable');
    }
    else{
      alert('Đã tồn tại trong giỏ hàng')
      return false;
    }
    
    
    
  })
});