// Form Validation
var form = document.querySelector(".needs-validation")
if(form) {
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() == false) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (form.checkValidity() == true) {
            $(document).ready(function() {
                $.ajax ({
                data : {
                name : $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val(),
                },
                type : 'POST',
                url : "/form",
                success: function(resp){
                    $("#alert").empty();
                    $("#alert").removeClass();
                    console.log(resp)
                    if(resp['message'] == "Message is too long!"){
                        className = "alert alert-danger text-center";
                        if (!$("#alert").hasClass(className)) {
                            $("#alert").addClass(className).prepend(resp['message']);
                        }
                    }
                    else if (resp['success'] == "Thanks for your message, We will reply to you shortly."){
                        className = "alert alert-success text-center";
                        if (!$("#alert").hasClass(className)) {
                            $("#alert").addClass(className).prepend(resp['success']);
                        }
                    }
			    }
                });
                form.reset();
                form.classList.remove("was-validated");
            });
        }
        event.preventDefault();
        form.classList.add("was-validated");
    });
}
// Login Validation
var login_form = document.getElementById("login_form");
if (login_form) {
    login_form.addEventListener('submit', function(event){
        if (login_form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        login_form.classList.add("was-validated");
    })
}
// Sign up Validation
var signup_form = document.getElementById("signup_form");
if (signup_form) {
    signup_form.addEventListener('submit', function(event){
        if (signup_form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        signup_form.classList.add("was-validated");
    })
}
// Log in & Sign up
var login_btn = document.getElementById("login_btn");
var signup_btn = document.getElementById("signup_btn");
if (signup_btn || login_btn) {
    signup_btn.addEventListener('click', () => {
        document.getElementById("login_form").style.display = "none";
        document.getElementById("signup_form").style.display = "grid";
        signup_btn.classList.remove("signup-inactive");
        signup_btn.classList.add("signup-active");
        login_btn.classList.remove("login-active");
        login_btn.classList.add("login-inactive");
    })
    login_btn.addEventListener('click', () => {
        document.getElementById("login_form").style.display = "grid";
        document.getElementById("signup_form").style.display = "none";
        login_btn.classList.add("login-active");
        login_btn.classList.remove("login-inactive");
        signup_btn.classList.add("signup-inactive");
        signup_btn.classList.remove("signup-active");
    })
}
// this one is just to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    // on themeToggle click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {

        // Toggle class on click
        document.body.classList.toggle('dark');
        // if body contains a class named dark set the local storage theme to it
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        if (localStorage.getItem('theme') === 'dark') {
            document.get
            document.querySelector("nav").classList.add('navbar-dark','bg-black');
            document.querySelector("nav").classList.remove("navbar-light","bg-light");
        }
        else {
            document.querySelector("nav").classList.add("navbar-light",'bg-light');
            document.querySelector("nav").classList.remove('navbar-dark','bg-black');
        }
        });
        // Global changes
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark');
            document.querySelector("nav").classList.add('navbar-dark','bg-black');
            themeToggle.checked = true;
        }
        else {
            document.querySelector("nav").classList.add("navbar-light",'bg-light');
        }
    }})
// active navbar link
jQuery(function($) {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('ul a').each(function() {
    if (this.href === path) {
    $(this).addClass('active');
    }
    });
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});