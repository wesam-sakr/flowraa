function toggle(){
    var blur = document.getElementById("blur")
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
}

var like=0;
document.getElementById('like').innerHTML= like;
function addLike(){
    if (like==0)
    {
        like=like+1;
        var x =document.getElementsByClassName('fa-heart');
        x[1].style.color="#fe81ac";
    }
    else if (like==1)
    {like=0;
        var x =document.getElementsByClassName('fa-heart');
        x[1].style.color="white";}
    document.getElementById('like').innerHTML= like;
}

var cart=0;
document.getElementById('cart').innerHTML= cart;
function addCart(){
    if (cart==0)
    {
        cart=cart+1;
        document.getElementById('cart').innerHTML= cart; 
        var x =document.getElementsByClassName('cart');
        x[0].innerHTML="Remove From Cart";
        alert("one item added to cart successfully");
    }
    else if (cart==1)
    {  
        cart=0;
        document.getElementById('cart').innerHTML= cart; 
        var x =document.getElementsByClassName('cart');
        x[0].innerHTML="Add To Cart";

    }
    document.getElementById('cart').innerHTML= cart; 
    document.querySelector('trend trending trendBtn cart').innerHTML="Remove From Cart";
}

var price=125.00;
document.getElementById('price').innerHTML= price;

var amount=1;
document.getElementById('amount').innerHTML= amount;
function add(){
    amount=amount+1;
    document.getElementById('amount').innerHTML= amount;
    document.getElementById('price').innerHTML= price * amount;   
}
function sub(){
    if(amount>1){
        amount=amount-1;
    }
    document.getElementById('amount').innerHTML= amount;
    document.getElementById('price').innerHTML= price * amount;
}

var footerHeight= $('footer').height()
$('body').css("margin-bottom", footerHeight)

$(window).resize(function() {
    $('body').css("margin-bottom", footerHeight)
})