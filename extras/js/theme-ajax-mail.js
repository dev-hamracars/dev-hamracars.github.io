// Content Contact Form
// ---------------------------------------------------------------------------------------
$(function () {
    $("#contact-form .form-control").tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $('#contact-form .form-control').blur(function () {
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    $("#contact-form #submit_btn").click(function () {
        // validate and process form
        // first hide any error messages
        $('#contact-form .error').hide();

        var name = $("#contact-form input#name").val();
        if (name == "" || name == "Name..." || name == "Name" || name == "Name *" || name == "Type Your Name...") {
            $("#contact-form input#name").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $("#contact-form input#name").focus();
            return false;
        }
        var email = $("#contact-form input#email").val();
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $("#contact-form input#email").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $("#contact-form input#email").focus();
            return false;
        }
        var subject = $("#contact-form input#subject").val();
        if (subject == "" || subject == "Subject") {
            $("#contact-form input#subject").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $("#contact-form input#subject").focus();
            return false;
        }
        var message = $("#contact-form #input-message").val();
        if (message == "" || message == "Message..." || message == "Message" || message == "Message *" || message == "Type Your Message...") {
            $("#contact-form #input-message").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $("#contact-form #input-message").focus();
            return false;
        }

        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
        //alert (dataString);return false;

        $.ajax({
            type:"POST",
            url:"src/assets/php/contact-form.php",
            data:dataString,
            success:function () {
                $('#contact-form').append("<div class=\"alert alert-success fade in\"><button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button><strong>Contact Form Submitted!</strong> We will be in touch soon.</div>");
                $('#contact-form')[0].reset();
            }
        });
        return false;
    });
});

// Subscribe Form
// ---------------------------------------------------------------------------------------
$(function () {
    $(".form-subscribe .form-control").tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $('.form-subscribe .form-control').blur(function () {
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    $(".form-subscribe .btn-submit").click(function () {
        // validate and process form
        // first hide any error messages
        $('.form-subscribe .error').hide();

        var email = $(".form-subscribe input#formSubscribeEmail").val();
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $(".form-subscribe input#formSubscribeEmail").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $(".form-subscribe input#formSubscribeEmail").focus();
            return false;
        }

        var dataString = 'email=' + email + '';
        //alert (dataString);return false;

        $.ajax({
            type:"POST",
            url:"src/assets/php/subscribe-form.php",
            data:dataString,
            success:function () {
                $('.form-subscribe').append("<div class=\"alert alert-success fade in\"><button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button><strong>Reservation Submitted!</strong></div>");
                $('.form-subscribe')[0].reset();
            }
        });
        return false;
    });
});

// Booking Form
// ---------------------------------------------------------------------------------------
$(function () {

    $(".form-additional .form-control, .form-delivery .form-control").tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $('.form-additional .form-control, .form-delivery .form-control').blur(function () {
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    //$(window).load(function () {});

    // ON CLICK
    $(".reservation-now .btn-reservation-now").click(function () {
        // validate and process form
        // first hide any error messages
        //$('.form-subscribe .error').hide();

        // Extras & Frees
      
        // Car information

        // Customer information
        
        var fdmrms = '';
        var fdradio = $(".form-delivery .radio");
        $(fdradio).each(function(index, value){
            if($(this).find('input').is(':checked')){
                //console.log($(this).find('input').attr('value'));
                fdmrms = $(this).find('input').attr('value');
            }
        });

        var fdname = $(".form-delivery input#fd-name").val();
        if (fdname == "" || fdname == "Name..." || fdname == "Name" || fdname == "Name *" || fdname == "Type Your Name...") {
            $(".form-delivery input#fd-name").tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $(".form-delivery input#fd-name").focus();
            return false;
        }
        var fdsurname = $(".form-delivery input#fd-surname").val();
        if (fdsurname == "" || fdsurname == "Surname..." || fdsurname == "Surname" || fdsurname == "Surname *" || fdsurname == "Type Your Surname...") {
            $(".form-delivery input#fd-surname").tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $(".form-delivery input#fd-surname").focus();
            return false;
        }

        var fdemail = $(".form-delivery input#fd-email").val();
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(fdemail)) {
            $(".form-delivery input#fd-email").tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $(".form-delivery input#fd-email").focus();
            return false;
        }

        var fdphone = $(".form-delivery input#fd-phone").val();
        if (fdphone == "" || fdphone == "Phone..." || fdphone == "Phone" || fdphone == "Phone *" || fdphone == "Type Your Phone...") {
            $(".form-delivery input#fd-phone").tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $(".form-delivery input#fd-phone").focus();
            return false;
        }
        var pick_date = $(".form-delivery input#pick-date").val();
        if (pick_date == "" || pick_date == "Pick..." || pick_date == "Pick" || pick_date == "Pick *" || pick_date == "Pick up date...") {
            $(".form-delivery input#pick-date").tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $(".form-delivery input#pick-date").focus();
            return false;
        }
        var drop_date = $(".form-delivery input#drop-date").val();
        if (drop_date == "" || drop_date == "Drop..." || drop_date == "Drop" || drop_date == "Drop *" || drop_date == "Drop off date...") {
            $(".form-delivery input#drop-date").tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $(".form-delivery input#drop-date").focus();
            return false;
        }
        if (pick_date>drop_date) {
            $(".form-delivery input#drop-date").tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $(".form-delivery input#drop-date").focus();
            return false;
        }
        var pick_loc = $(".form-delivery #pick-loc").val();
        if (pick_loc == "") {
            $(".form-delivery #pick-loc").tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $(".form-delivery #pick-loc").focus();
            return false;
        }
        var drop_loc = $(".form-delivery #drop-loc").val();
        if (drop_loc == "") {
            $(".form-delivery #drop-loc").tooltip({placement: 'top', trigger: 'manual'}).tooltip('show');
            $(".form-delivery #drop-loc").focus();
            return false;
        }
       

        // Payments options


        // Addition Information
        var fadmessage = $(".form-additional textarea#fad-message").val();
        
       
        
        // Check if Accept is checked
        var accept = $("#accept");
        if(!accept.is(':checked')){
            $(accept).focus();
            $(accept).parent().find('label').css('color', 'red');
            return false;
        }
        
        var dataString ='&car-id=' + car_id + '' + '&sex=' + fdmrms + '' + '&name=' + fdname + '' + '&surname=' + fdsurname + '' +'&email=' + fdemail + '' + '&phone=' + fdphone + '' + '&pick-date=' + pick_date + '' + '&drop-date=' + drop_date + '' + '&pick-loc=' + pick_loc + '' + '&drop-loc=' + drop_loc + '' + '&add-message=' + fadmessage + '' ;
        //alert(dataString); return false;
        function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
        }
        $.ajax({
            type:"POST",
            url:"src/assets/php/booking-form.php",
            data:dataString,
            success:function () {
                $('.reservation-now').append("<div style=\"overflow: hidden; clear: both; \"></div><div style=\"overflow: hidden; clear: both; margin-top: 20px; \" class=\"alert alert-success fade in\"><button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button><strong>Reservation Submitted!</strong></div>");
                //$('.reservation-now')[0].reset();
                sleep(2000).then(() => { window.location="car-listing.php"; });
            }
        });
        return false;
    });
});