$( function() {
    var $signupForm = $( '#SignupForm' );
    $signupForm.validate();
    $signupForm.formToWizard({
        submitButton: 'SaveAccount',
        showProgress: true, //default value for showProgress is also true
        nextBtnName: 'Продолжить <span class="arrow"><img src="assets/img/Arrow.png"></span>',
        showStepNo: true,
        validateBeforeNext: function() {
            return $signupForm.valid( 'validate' );
        }

    });
    $(function() {
        $("#stepDesc0").click(function () {
            if ($('#stepDesc1').hasClass("current")) {
                $signupForm.formToWizard('GotoStep', 1);
            }
            else {}
        });
    });
    $( "#surname" ).rules( "add", {
        required: true,
        regexp: /^[А-Яа-яЁё\s\-]+$/,
        minlength: 2,
        messages: {
            required: "Это поле обязательное для заполнения",
            regexp: jQuery.validator.format("Допустимые символы а-я, пробел и дефиз"),
            minlength: jQuery.validator.format("Пожалуйста, введите минимум {0} символа")
        }
    });
    $( "#user-name" ).rules("add", {
        required: true,
        regexp: /^[А-Яа-яЁё\s\-]+$/,
        minlength: 2,
        messages: {
            required: "Это поле обязательное для заполнения",
            regexp: jQuery.validator.format("Допустимые символы а-я, пробел и дефиз"),
            minlength: jQuery.validator.format("Пожалуйста, введите минимум {0} символа")
        }
    });
    $( "#patronymic" ).rules( "add", {
        required: true,
        regexp: /^[А-Яа-яЁё\s\-]+$/,
        minlength: 2,
        messages: {
            required: "Это поле обязательное для заполнения",
            regexp: jQuery.validator.format("Допустимые символы а-я, пробел и дефиз"),
            minlength: jQuery.validator.format("Пожалуйста, введите минимум {0} символа")
        }
    });
    $("#datePick").rules("add", {
        required: true,
        date: true,
        messages: {
            required: "Это поле обязательное для заполнения",
            date: "Пожалуйста выберете дату"
        }
    });
    $( "#agreeParticipation, #userPhone").rules( "add", {
        required: true,
        messages: {
            required: "Это поле обязательное для заполнения",
        }
    });
    $('#Email').rules("add", {
        required: true,
        email: true,
        regexp: /^[a-z0-9_-]+@([a-z0-9-]{2,5})+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i,
        messages: {
            required: "Это поле обязательное для заполнения",
            email: "Пожалуйста введите ваш Email",
            regexp: "Пожалуйста введите действительный Email"
        }
    });
    $('#password').rules("add", {
        required: true,
        regexp: /^[а-яА-ЯёЁa-zA-Z0-9]+$/,
        minlength: 6,
        messages: {
            required: "Это поле обязательное для заполнения",
            minlength: jQuery.validator.format("Пожалуйста, введите минимум {0} символов"),
            regexp: "разрешены только буквы и цифры"
        }
    });
    $('#password_again').rules("add", {
        required: true,
        messages: {
            required: "Это поле обязательное для заполнения",
        }
    });
    $( '#txt_stepNo' ).change( function() {
        $signupForm.formToWizard( 'GotoStep', $( this ).val() );
    });
    $( '#btn_next' ).click( function() {
        $signupForm.formToWizard( 'NextStep' );
    });
    $( '#btn_prev' ).click( function() {
        $signupForm.formToWizard( 'PreviousStep' );
    });
});
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});
$.validator.addMethod('regexp', function(value, element, params) {
    var expression = new RegExp(params);
    return this.optional(element) || expression.test(value);
});
$(function(){
    $("input[type='text']").keyup(function(){
        $(this).css('background-color', '#E6DFDB');
    });

    $("#userPhone").mask("+375 (99) 999-99-99").val('Телефон');

    $("#submitFrom, .code-reset").hide();
    $("#step1Next").click(function() {
        var userPhone = $("#userPhone").val();
        if ($('#stepDesc2').hasClass("current")){
          $(".user-phone").text(userPhone);
            $("#submitFrom, .code-reset").show();
        }
        else {}
        if ($('#stepDesc2').hasClass("current")){
            setTimeout(
                function() {
                    function randomInteger(min, max) {
                        var rand = min - 0.5 + Math.random() * (max - min + 1)
                        rand = Math.round(rand);
                        return rand;
                    }
                    alert( randomInteger(100, 1000) );
                },
                500);
        }
        else {}
        $(".code-reset").click(function() {
            function randomInteger(min, max) {
                var rand = min - 0.5 + Math.random() * (max - min + 1)
                rand = Math.round(rand);
                return rand;
            }
            alert( randomInteger(100, 1000) );
        });
    });
});
$(function () {
    $("#surname").blur(function () {
        if ($(this).hasClass("error")) {
            $(this).after('<img class="danger-img" src="assets/img/danger.png" />');
        }
    });
});





