var footerHeight= $('footer').height()
$('body').css("margin-bottom", footerHeight)

$(window).resize(function() {
    $('body').css("margin-bottom", footerHeight)
})
function toggle(){
    var popupContainer = document.querySelector('.popup-container')
    popupContainer.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("blur");
}

var like = Number(document.getElementById('like').innerHTML);
$(".fav").click(function() {
    $(this).toggleClass("far fas");
    if ($(this).hasClass( "fas" )){
        like += 1;
    }
    else {
        like -=1
    }

    document.getElementById('like').innerHTML= like;
    console.log(like)
})

$('.addFav').click(function(){
    like = Number(document.getElementById('like').innerHTML)
    var x = $(this).find(".fa-heart");
    
    if (like==0)
    {
        like=like+1;
        x[0].style.color="#fe81ac";
    }
    else if (like==1)
    {like=0;
        x[0].style.color="white";}
    document.getElementById('like').innerHTML= like;

})

// ADD AND REMOVE CART
var cart = Number(document.getElementById('cart').innerHTML);
$('.cart').click(function(){
    var cartTxt = this.innerHTML
    if( cartTxt == 'Add To Cart'){
        cartTxt = 'Remove From Cart';
        cart = cart+1;
        this.innerHTML = cartTxt
    }
    else {
        this.innerHTML = 'Add To Cart';
        cart = cart-1;
    }
    document.getElementById('cart').innerHTML= cart;
})

var price= Number(document.getElementById('price').innerHTML);
// alert(price)

var amount= Number(document.getElementById('amount').value);
$('#amount').change(function(){
    amount= Number(document.getElementById('amount').value);
    document.getElementById('price').innerHTML= price * amount;
    // alert( amount +"           "+ price)
})
function add(){
    amount=amount+1;
    document.getElementById('amount').value= amount;
    document.getElementById('price').innerHTML= price * amount;   
}
function sub(){
    if(amount>1){
        amount=amount-1;
    }
    document.getElementById('amount').value= amount;
    document.getElementById('price').innerHTML= price * amount;
}
$('.quantity.plus').click(function(e) {
    let $input = $(this).next('input.qty');
    let val = parseInt($input.val());
    $input.val( val+1 ).change();

  });
  
$('.quantity.minus').click(function(e) {
  let $input = $(this).prev('input.qty');
  var val = parseInt($input.val());
  if (val > 1) {
      $input.val( val-1 ).change();
  } 
});
$( ".fav-container .nav-link" ).each(function() {
    var colNum = $(this).attr('data-target');
    for(x=0 ; x < colNum ; x++){
        $(this).append(`<div class="colNum"></div>`)
    }
  });
$('.fav-container .nav-link').attr('data-target')
$('.fav-container .nav-link').click(function(){
    // if ($(this).hasClass("active")){
    var colNum = $(this).attr('data-target')
    $('.fav-grid-container').css('grid-template-columns' ,'repeat('+colNum+', 1fr)')
})

$('.carousel-main').flickity();
$('.carousel-nav').flickity({
    asNavFor: '.carousel-main',
    contain: true,
    pageDots: false
});