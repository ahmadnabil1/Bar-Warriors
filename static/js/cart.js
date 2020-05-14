var array = []
total = 0
function dothis(result){
	cartshow()
	cart = {}
    cart.id = result.id, cart.name_en = result.name_en,cart.name_ar = result.name_ar,
    cart.in_stock = result.in_stock, cart.color_en = result.color_en,cart.color_ar = result.color_ar,
    cart.discount = result.discount, cart.old_price = result.old_price,
    cart.new_price = result.new_price, cart.img = result.img, cart.qty = 1;
    flag = false
    items_added = JSON.parse(localStorage.getItem("array"))
    if (items_added != null ){
        array = items_added
    }
    if (array.length != 0) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].id == cart.id){
                array[i].qty += 1
                localStorage.setItem("array", JSON.stringify(array))
                document.getElementById("number"+cart.id).innerHTML = array[i].qty
                flag = true
            }
        }
    }
    if (flag == false) {
        array.push(cart)
        localStorage.setItem("array", JSON.stringify(array))
        if (localStorage.getItem("language") == "ar") {
        var html =  '<div id="image'+cart.id+'"style="background-image:url(/static/img/'+cart.img+'.jpg);margin-top:0.4rem;background-size:100% 100%;background-repeat:no-repeat;"></div>' +
                		'<div class="second-2nd">' +
                        '<h5 class="d-flex lang" key="'+cart.name_ar+'">'+cart.name_ar+'</h5>' +
                        '<h6 class="d-flex lang" key="'+cart.color_ar+'">اللون ' +cart.color_ar+'</h6>' +
                        '<div class="price_number d-flex justify-content-between align-items-center">' +
                        '<div class="item-number">' +
                        '<button onclick = "decrement('+result.id+')"class="minus reset-style2">-</button>' +
                        '<div class="input-style" id="number'+cart.id+'"type="number" step="any" value='+cart.qty+' min="0" name="number">1</div>' +
                        '<button onclick = "increment('+result.id+')" class="plus reset-style2">+</button>' +
                        '</div>' +
                        '<h6 class="reset-margin" dir="ltr">'+cart.new_price+'.00 L.E</h6>' +
                        '</div>' +
                        '</div>' +
                		'</div>';
        $("#cart_main").append(html)
        }
        else {
        var html =  '<div id="image'+cart.id+'"style="background-image:url(/static/img/'+cart.img+'.jpg);margin-top:0.4rem;background-size:100% 100%;background-repeat:no-repeat;"></div>' +
                		'<div class="second-2nd">' +
                        '<h5 class="d-flex lang" key="'+cart.name_en+'">'+cart.name_en+'</h5>' +
                        '<h6 class="d-flex lang" key="'+cart.color_en+'">Color ' +cart.color_en+'</h6>' +
                        '<div class="price_number d-flex justify-content-between align-items-center">' +
                        '<div class="item-number">' +
                        '<button onclick = "decrement('+result.id+')"class="minus reset-style2">-</button>' +
                        '<div class="input-style" id="number'+cart.id+'"type="number" step="any" value='+cart.qty+' min="0" name="number">1</div>' +
                        '<button onclick = "increment('+result.id+')" class="plus reset-style2">+</button>' +
                        '</div>' +
                        '<h6 class="reset-margin" dir="ltr">'+cart.new_price+'.00 L.E</h6>' +
                        '</div>' +
                        '</div>' +
                		'</div>';
        $("#cart_main").append(html)
        }
    }
    // Calcualte Subtotal of items
    total = total + cart.qty * cart.new_price
    $(".subtotal").html(total + ".00 L.E")

}
// Increment On (+) button click & Update SubTotal
function increment(id)
{
    for (var i = 0; i < array.length; i++) {
        if (array[i].id == id){
            array[i].qty += 1
            localStorage.setItem("array", JSON.stringify(array))
            total = total + ((array[i].qty + 1 - array[i].qty) * array[i].new_price)
            $(".subtotal").html(total + ".00 L.E")
            document.getElementById("number"+id).innerHTML = array[i].qty
        }
    }
}
// Decrement On (-) button click & Update SubTotal
function decrement(id)
{
    for (var i = 0; i < array.length; i++) {
        if (array[i].id == id){
            array[i].qty -= 1
            total = total - ((array[i].qty + 1 - array[i].qty) * array[i].new_price)
            $(".subtotal").html(total + ".00 L.E")
            if (array[i].qty < 1){
                array.splice(i, 1);
                localStorage.setItem("array", JSON.stringify(array))
                var buttonclicked = event.target
                buttonclicked.parentElement.parentElement.parentElement.remove()
                document.getElementById("image"+id).remove()
                return
            }
            localStorage.setItem("array", JSON.stringify(array))
            document.getElementById("number"+id).innerHTML = array[i].qty
        }
    }
}

// Shows items from the local storage
items_added = JSON.parse(localStorage.getItem("array"))
if (items_added != null ){
    for (var i = 0; i < items_added.length; i++){
        if (localStorage.getItem("language") == "ar") {
            var html =  '<div id="image'+items_added[i].id+'"style="background-image:url(/static/img/'+items_added[i].img+'.jpg);background-size:100% 100%;background-repeat:no-repeat;"></div>' +
                    		'<div class="second-2nd ml-2">' +
                            '<h5 class="d-flex lang" key="'+items_added[i].name_ar+'">'+items_added[i].name_ar+'</h5>' +
                            '<h6 class="d-flex lang" key="'+items_added[i].color_ar+'">اللون ' +items_added[i].color_ar+'</h6>' +
                            '<div class="d-flex justify-content-between align-items-center">' +
                            '<div class="item-number">' +
                            '<button onclick = "decrement1('+items_added[i].id+')" class="reset-style2">-</button>' +
                            '<div class="input-style" id="number'+items_added[i].id+'"type="number" step="any" value='+items_added[i].qty+' min="0" name="number">'+items_added[i].qty+'</div>' +
                            '<button onclick = "increment1('+items_added[i].id+')" class="reset-style2">+</button>' +
                            '</div>' +
                            '<h6 class="reset-margin" dir="ltr">'+items_added[i].new_price+'.00 L.E</h6>' +
                            '</div>' +
                            '</div>' +
                    		'</div>';
            $("#cart_main").append(html)
        }
        else {
            var html =  '<div id="image'+items_added[i].id+'"style="background-image:url(/static/img/'+items_added[i].img+'.jpg);background-size:100% 100%;background-repeat:no-repeat;"></div>' +
                    		'<div class="second-2nd ml-2">' +
                            '<h5 class="d-flex lang" key="'+items_added[i].name_en+'">'+items_added[i].name_en+'</h5>' +
                            '<h6 class="d-flex lang" key="'+items_added[i].color_en+'">Color ' +items_added[i].color_en+'</h6>' +
                            '<div class="d-flex justify-content-between align-items-center">' +
                            '<div class="item-number">' +
                            '<button onclick = "decrement1('+items_added[i].id+')" class="reset-style2">-</button>' +
                            '<div class="input-style" id="number'+items_added[i].id+'"type="number" step="any" value='+items_added[i].qty+' min="0" name="number">'+items_added[i].qty+'</div>' +
                            '<button onclick = "increment1('+items_added[i].id+')" class="reset-style2">+</button>' +
                            '</div>' +
                            '<h6 class="reset-margin" dir="ltr">'+items_added[i].new_price+'.00 L.E</h6>' +
                            '</div>' +
                            '</div>' +
                    		'</div>';
            $("#cart_main").append(html)
            total = total + (items_added[i].qty * items_added[i].new_price)
        }
    }
    if (document.querySelector(".subtotal")) {
    document.querySelector(".subtotal").innerHTML = total + ".00 L.E"
    }
}
function decrement1(id)
{
    for (var i = 0; i < items_added.length; i++) {
        if (items_added[i].id == id){
            items_added[i].qty -= 1
            total = total - ((items_added[i].qty + 1 - items_added[i].qty) * items_added[i].new_price)
            $(".subtotal").html(total + ".00 L.E")
            if (items_added[i].qty < 1){
                items_added.splice(i, 1);
                localStorage.setItem("array", JSON.stringify(items_added))
                var buttonclicked = event.target
                buttonclicked.parentElement.parentElement.parentElement.remove()
                document.getElementById("image"+id).remove()
                return
            }
            localStorage.setItem("array", JSON.stringify(items_added))
            document.getElementById("number"+id).innerHTML = items_added[i].qty
        }
    }
}
function increment1(id)
{
    for (var i = 0; i < items_added.length; i++) {
        if (items_added[i].id == id){
            items_added[i].qty += 1
            total = total + ((items_added[i].qty + 1 - items_added[i].qty) * items_added[i].new_price)
            $(".subtotal").html(total + ".00 L.E")
            localStorage.setItem("array", JSON.stringify(items_added))
            document.getElementById("number"+id).innerHTML = items_added[i].qty
        }
    }
}
function cartshow() {
    $("#cart").css("display", "grid");
    $(".cart-background").css("display", "block");
    $("body").css("overflow", "hidden");
}
function carthide(){
    $("#cart").css("display", "none");
    $(".cart-background").css("display", "none");
    $("body").css("overflow", "auto");
}
// Hides the cart
$(".cart-background").click(function(){
    carthide()
})