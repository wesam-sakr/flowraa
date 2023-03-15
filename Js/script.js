$('body').prepend(`<a aria-label="developer portfolio" href="https://wesam-sakr.github.io/Portfolio/" accesskey="w" target="_blank"></a>`)
// MARGIN BODY TO DISPLAY FOOTER
var footerHeight= $('footer').height()
$('body').css("margin-bottom", footerHeight)
$(window).resize(function() {
    $('body').css("margin-bottom", footerHeight)
})

// ADD AND REMOVE LIKES
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


// calc price in cart
let subTotal
let finalPrice = 0
$('.quantity.plus').each(function (key) {
    let $input = $(this).next('input.qty');
    let parent = ($(this).parents().find('.cart-product-item .total'))[key]
    const price = Number(($(parent)).attr('data-target'))
    subTotal = Number($('.Subtotal')[0].innerHTML )
    $(this).click(function(){
        finalPrice = 0
        let val = parseInt($input.val())+ 1;
        $input.val(val)
        parent.innerHTML = val * price
        calcTotal()
    })
    
})
$('.quantity.minus').each(function (key) {
    let $input = $(this).prev('input.qty');
    let parent = ($(this).parents().find('.cart-product-item .total'))[key]
    const price = Number(($(parent)).attr('data-target'))
    $(this).click(function(){
        finalPrice = 0
        let val = parseInt($input.val())
        if (val > 1) {
            val -= 1 ;
            $input.val(val);
            parent.innerHTML = val * price;
        } 
        calcTotal()
    })
})
function calcTotal() {
    $('.total').each(function(i){
        console.log( Number($('.total')[i].innerHTML));
        finalPrice += Number($('.total')[i].innerHTML)
        console.log(finalPrice);
        $('.Subtotal')[0].innerHTML = finalPrice
    });
}
calcTotal()

// FAV PAGE
$( ".fav-container .nav-link" ).each(function() {
    var colNum = $(this).attr('data-target');
    for(x=0 ; x < colNum ; x++){
        $(this).append(`<div class="colNum"></div>`)
    }
});
$('.fav-container .nav-link').click(function(){
    var colNum = $(this).attr('data-target')
    $('.fav-grid-container').css('grid-template-columns' ,'repeat('+colNum+', 1fr)')
})


// FLICKITY SLIDER -> PRODUCT PAGE
$('.carousel-main').flickity();
$('.carousel-nav').flickity({
    asNavFor: '.carousel-main',
    contain: true,
    pageDots: false
});

// POPUP
function popupToggle(){
    var popupContainer = document.querySelector('.popup-container')
    popupContainer.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("blur");
}
var price= Number(document.getElementById('price').innerHTML);
var amount= Number(document.getElementById('amount').value);
$('#amount').change(function(){
    amount= Number(document.getElementById('amount').value);
    document.getElementById('price').innerHTML= price * amount;
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