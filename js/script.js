$(function () {
    // Password Eye Start
    $('#password_eye').on('click', function () {
        if (password.type === 'password') {
            password.type = 'text';
            $('#password_eye').addClass('fa-eye')
            $('#password_eye').removeClass('fa-eye-slash')
        }else {
            password.type = 'password'
            $('#password_eye').removeClass('fa-eye')
            $('#password_eye').addClass('fa-eye-slash')
        }
    })
    // Password Eye End

    // DarkMode Start
    $('#mode').on('click', function () {
        $('body').toggleClass('darkMode');
        if ($('#mode').hasClass('fa-moon')) {
            $('#mode').addClass('fa-sun');
            $('#mode').removeClass('fa-moon');
        }else{
            $('#mode').removeClass('fa-sun');
            $('#mode').addClass('fa-moon');
        }
    })
    // DarkMode End

    // SideMenu Toggle Start
    $('#menu_toggle_bar').on('click', function () {
        $('#sideMenu').toggleClass('active');
    })
    // SideMenu Toggle End

    // Menu Fixed Start
    $(window).on('scroll', function () {
        var scrollSize = $(window).scrollTop();

        if (scrollSize > 110) {
            $('nav').addClass('active');
        } else {
            $('nav').removeClass('active');
        }
    })
    // Menu Fixed End

    // Preloader Start
    $(window).on('load', function () {
        $('#preloader').fadeOut(1000);
     })
    // Preloader End
})