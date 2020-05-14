var arrLang = {
    'en': {
        'home': 'Home',
        'shop': "Shop",
        'learn_more': "Learn More ",
        'darkmode': "Dark Mode",
        'add-to-cart': "ADD TO CART",
        'cart': "CART",
        'Red' : "Color / Red",
        'White' : "Color / White",
        'Black': 'Color / Black',
        'subtotal': "SUBTOTAL",
        'Red Hoodie' : "Red Hoodie",
        'White T-shirt': "White T-shirt",
        'Wrist Bands': "Wrist Bands",
        'ask': "Feel free to ask anything",
        'when': "Working Hours",
        'saturday': "Saturday",
        'thursday': "Thursday",
        'friday' : "Friday",
        'alaa' : "Mohammed Alaa",
        'mosab': "Mosab Sarhan",
        'calisthenics' : "Calisthenics Trainer",
        'pm' : "Pm",
        'closed': "Closed",
        'where': "Where you can find us",
        'portsaid': "Port Said Governorate, Egypt",
        'taxes': "Shipping calculated at checkout.",
        'checkout': "Checkout",
        'sendmessage': "Send Message",
        'your-cart': 'Your Cart',
        'shipping' : "Shipping Address",
        'country/region': "Country/region",
        'city' : "City",
        'egypt' : "Egypt",
        'confirm-order':"Confirm Order",
        'سويت شيرت احمر' : "Red Hoodie",
        'تيشرت ابيض': "White T-shirt",
        'ريست باند': "Wrist Bands",
        "احمر":"Color / Red",
        "ابيض":"Color / White",
        'اسود':"Color / Black",
    },
    'ar': {
        'home': 'الصفحة الرئيسية',
        'shop': "المتجر",
        'learn_more': "اعرف المزيد",
        'darkmode': "الوضع الليلي",
        'add-to-cart': "أضف إلي العربة",
        'Red Hoodie' : "سويت شيرت احمر",
        'White T-shirt': "تيشرت ابيض",
        'Wrist Bands': "ريست باند",
        'cart': "عربة التسوق",
        'Red' : "اللون / احمر",
        'White': "اللون / ابيض",
        'Black': 'اللون / اسود',
        'subtotal': "المجموع الكلي",
        'ask': "اسال ما تريد",
        'when': "مواعيد العمل",
        'saturday': "السبت",
        'thursday': "الخميس",
        'friday' : "الجمعة",
        'alaa' : "محمد علاء",
        'mosab': "مصعب سرحان",
        'calisthenics' : "مدرب كاليستنيكس",
        'pm' : "مساءاً",
        'closed': "مغلق",
        'where': "أين تجدنا",
        'portsaid': "محافظة بورسعيد، مصر",
        'taxes': "يحسب الشحن عند تاكيد الطلب",
        'checkout': "الدفع",
        'sendmessage': "ارسل",
        'your-cart': 'قائمة مشترياتك',
        'shipping' : "عنوان الشحن",
        'country/region': "البلد / المنطقة",
        'city':'محافظة',
        'egypt' : "مصر",
        'confirm-order':"تاكيد الطلب",
    }
}
$(function() {
    $(".translate").click(function() {
        // Get the id of the clicked item
        var lang = $(this).attr("id");
        // Store language selection in local storage
        localStorage.setItem("language", lang)
        // For each element that has the class lang
        $(".lang").each(function(index, element) {
            // change the text of that element with the corresponding key from the list
            $(this).text(arrLang[lang][$(this).attr("key")]);
        })
        if (localStorage.getItem("language") == "ar"){
            $("body").attr("dir","rtl")
            document.body.classList.add("translated")
            $("[placeholder='Name']").attr("placeholder", "الاسم")
            $("[placeholder='Email']").attr("placeholder", "الايميل")
            $("[placeholder='Message']").attr("placeholder", "الرسالة")
            $("[placeholder='First Name']").attr("placeholder", "الاسم الاول")
            $("[placeholder='Last Name']").attr("placeholder", "اسم العائلة")
            $("[placeholder='Address']").attr("placeholder", "العنوان");
            $("[placeholder='Apartment, suite, etc. (optional)']").attr("placeholder","رقم العمارة والشقة")
            $("[placeholder='Phone']").attr("placeholder","رقم التليفون")
            your_cart = document.getElementsByClassName("your-cart-number")
            for (var i = 0; i < your_cart.length; i++)
            {
                your_cart[i].style.left = null
                your_cart[i].style.right = "6.5rem"
            }
        }
        else {
            $("body").removeAttr("dir","rtl")
            $("body").attr("dir","ltr")
            document.body.classList.remove("translated")
            $("[placeholder='الاسم']").attr("placeholder", "Name")
            $("[placeholder='الايميل']").attr("placeholder", "Email")
            $("[placeholder='الرسالة']").attr("placeholder", "Message")
            $("[placeholder='الاسم الاول']").attr("placeholder", "First Name")
            $("[placeholder='اسم العائلة']").attr("placeholder", "Last Name")
            $("[placeholder='العنوان']").attr("placeholder", "Address");
            $("[placeholder='رقم العمارة والشقة']").attr("placeholder","Apartment, suite, etc. (optional)")
            $("[placeholder='رقم التليفون']").attr("placeholder","Phone")
            your_cart = document.getElementsByClassName("your-cart-number")
            for (var i = 0; i < your_cart.length; i++)
            {
                your_cart[i].style.right = null
                your_cart[i].style.left = "6.5rem"
            }
        }
    })
})
if (localStorage.getItem("language") == "ar") {
    document.body.setAttribute("dir","rtl")
    document.body.classList.add("translated")
    $("[placeholder='Name']").attr("placeholder", "الاسم")
    $("[placeholder='Email']").attr("placeholder", "الايميل")
    $("[placeholder='Message']").attr("placeholder", "الرسالة")
    $("[placeholder='First Name']").attr("placeholder", "الاسم الاول")
    $("[placeholder='Last Name']").attr("placeholder", "اسم العائلة")
    $("[placeholder='Address']").attr("placeholder", "العنوان");
    $("[placeholder='Apartment, suite, etc. (optional)']").attr("placeholder","رقم العمارة والشقة")
    $("[placeholder='Phone']").attr("placeholder","رقم التليفون")
    $(".lang").each(function(index, element) {
        $(this).text(arrLang["ar"][$(this).attr("key")]);
    })
    your_cart = document.getElementsByClassName("your-cart-number")
    for (var i = 0; i < your_cart.length; i++)
    {
        your_cart[i].style.right = "6.5rem"
    }
}
else {
    document.body.removeAttribute("dir")
    document.body.classList.remove("translated")
    your_cart = document.getElementsByClassName("your-cart-number")
    for (var i = 0; i < your_cart.length; i++)
    {
        your_cart[i].style.left = "6.5rem"
    }
}