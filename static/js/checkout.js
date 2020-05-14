var rotation = 0
$("#checkout_cart").click(function(){
    document.getElementById("your_cart").classList.toggle('d-none')
    rotation += 180
    document.getElementById("cart_down").style.transform = "rotate("+rotation+"deg)"
    document.getElementById("cart_down").style.transition = "all 0.5s"
})
items_added = JSON.parse(localStorage.getItem("array"))
if (items_added != null ){
    for (var i = 0; i < items_added.length; i++){
        if (localStorage.getItem("language") == "ar") {
            var html = '<div class="col-12 mb-3">'+
                            '<div class="d-flex w-100 mt-2">'+
                                '<div class="image-space"><img src="/static/img/'+items_added[i].img+'.jpg" class="img-fluid rounded" width="100px" height="100px"></div>'+
                                '<span class="your-cart-number">'+items_added[i].qty+'</span>'+
                                '<div class="d-flex flex-column justify-content-center">'+
                                    '<h6 class="lang" key="'+items_added[i].name_ar+'">'+items_added[i].name_ar+'</h6>'+
                                    '<h6 class="d-flex lang" key="'+items_added[i].color_ar+'" style="color:grey;font-size:0.8rem;">اللون / '+items_added[i].color_ar+'</h6>'+
                                '</div>'+
                                '<div class="align-self-center checkout-price">'+
                                    '<h6 class="reset-margin">'+items_added[i].new_price+'.00 L.E</h6>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
            $("#your_cart").append(html)
        }
        else {
            var html = '<div class="col-12 mb-3">'+
                            '<div class="d-flex w-100 mt-2">'+
                                '<div class="image-space"><img src="/static/img/'+items_added[i].img+'.jpg" class="img-fluid rounded" width="100px" height="100px"></div>'+
                                '<span class="your-cart-number">'+items_added[i].qty+'</span>'+
                                '<div class="d-flex flex-column justify-content-center">'+
                                    '<h6 class="lang" key="'+items_added[i].name_en+'">'+items_added[i].name_en+'</h6>'+
                                    '<h6 class="d-flex lang" key="'+items_added[i].color_en+'" style="color:grey;font-size:0.8rem;">Color / '+items_added[i].color_en+'</h6>'+
                                '</div>'+
                                '<div class="align-self-center checkout-price">'+
                                    '<h6 class="reset-margin">'+items_added[i].new_price+'.00 L.E</h6>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
            $("#your_cart").append(html)
        }
    }
    $("#your-cart-number").html(items_added.length)
}