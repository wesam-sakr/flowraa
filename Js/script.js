$('body').prepend(`<a aria-label="developer portfolio" href="https://wesam-sakr.github.io/Portfolio/" accesskey="w" target="_blank"></a>`)
$('body').prepend(`<svg id=svg>
<defs>
<g id="flower">
    <path class="fc1" fill="none" stroke="#333333" stroke-width="1" 
          d="M0,0 q50,-25 100,0 q-50,25 -100,0 q-50,25 -100,0 q50,-25 100,0"/>	
    <path class="fc2" fill="none" stroke="#333333" stroke-width="1"
                d="M0,0 q53.03,-17.68 70.71,-70.71 q-53.03,17.68 -70.71,70.71 q-53.03,17.68 -70.71,70.71 q53.03,-17.68 70.71,-70.71"/>
    <path class="fc3" fill="none" stroke="#333333" stroke-width="1"
              d="M0,0 q25,-50 0,-100 q-25,50 0,100 q-25,50 0,100 q25,-50 0,-100"/>
    <path class="fc4" fill="none" stroke="#333333" stroke-width="1"
              d="M0,0 q-17.68,-53.03 -70.71,-70.71 q17.68,53.03 70.71,70.71 q17.68,53.03 70.71,70.71 q-17.68,-53.03 -70.71,-70.71"/>
</g>
</defs>
</svg>`)
N=15
w3="http://www.w3.org/"
svgNS=w3+"2000/svg"
xlinkNS=w3+"1999/xlink"
with(Math)R=random,S=sin,C=cos

w=svg.width=innerWidth
h=svg.height=innerHeight
this.onresize=function(){
	if(w==innerWidth)return
	w=svg.width=innerWidth
	h=svg.height=innerHeight
	svg.setAttribute("viewBox", [0,0,w,h])
}

Flower=function(x, y, r, dx, dy) {
	this.x=x
	this.y=y
	this.r=0
	this.dx=dx
	this.dy=dy
	var el=this.element=document.createElementNS(svgNS, 'use')
	this.setTransforms()
	el.setAttributeNS(xlinkNS, "href", "#flower")
	svg.appendChild(el)
}

Flower.prototype.setTransforms = function () {
	with(this)element.setAttribute("transform", "translate("+x+","+y+") rotate("+r+")")
};
$(document).ready(function () {
    $('#svg').fadeOut(500);
})
flowers=[]
for(i=N;i--;)
	flowers.push(new Flower((w*R())|0,(h*R())|0,360*R(),((R()*5)|0)-2,1))

~function L(t){
	t/=1e3
	for(i=N;i--;){
		f=flowers[i]
		f.r+=1
		f.x+=f.dx
		f.y+=f.dy
		if(f.x>w+200)f.x-=w+400
		if(f.x<-200)f.x+=w+400
		if(f.y>h+200)f.y-=h+400
		if(f.y<-200)f.y+=h+400
		f.setTransforms()
	}
	
	requestAnimationFrame(L)
}(0)

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
let parent
let $input
let available
let val = 1
function name(params) {
    
}
$('.quantity').each(function (key) {
    subTotal = Number($('.Subtotal')[0].innerHTML)
    $(this).click(function(k){
        let target = $(k.currentTarget)
        finalPrice = 0
        if(target.hasClass('qtyplus')){
            parent = target.parents().find('.cart-product-item .total')[key/2]
            available = Number(target.parents().find('.cart-product-item .availableCount')[key/2].innerHTML)
            console.log(available);
            const price = Number(($(parent)).attr('data-target'))
            $input =  $(this).next('input.qty');
            if ($input.val() < available) {
                val = parseInt($input.val())+ 1;
                parent.innerHTML = val * price
                $input.val(val)
            }
        }
        else{
            parent = target.parents().find('.cart-product-item .total')[(key-1)/2]
            const price = Number(($(parent)).attr('data-target'))
            $input =  $(this).prev('input.qty');
            if ($input.val() > 1) {
                val = parseInt($input.val())- 1;
                parent.innerHTML = val * price
                $input.val(val)
            } 
        }
        calcTotal()
    })
})
function calcTotal() {
    $('.total').each(function(i){
        finalPrice += Number($('.total')[i].innerHTML)
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