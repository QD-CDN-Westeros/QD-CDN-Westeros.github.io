
actionListMenu = function(){
    var $listMenu    = $('.mx_menuMobile .menu li a');
    $($listMenu).click(function(e) {
        $($listMenu).not(this).parent().removeClass('mx-active');
        $(this).parent().toggleClass('mx-active');
        $($listMenu).not(this).next().slideUp();
        $(this).next().slideToggle();
        return false;
    });
};

showContent = function() {
    $('.close, .btn-link').click(function(){
        $('.modal').hide();
    });

    $('#edit-data-link, #mx-preview_contact').click(function(){
        $('#editar-perfil').show();
        $('#editar-perfil').removeClass('hide');
    });

    $('.delete').click(function(){
        $('#address-remove').show();
        $('#address-remove').removeClass('hide');
    });

    $('#address-update, .address-update, #mx-preview_addres').click(function(){
        $('#address-edit').show();
        $('#address-edit').removeClass('hide');
    });

    $('#business-toggle').click(function(){
       $('#business-data').slideToggle();
    });
};

notChangeEmail = function(){
    $('.control-group.form-contact-data-email input').on('focus', function(){
        alert('NÃƒÆ’Ã‚Â£o ÃƒÆ’Ã‚Â© possivel mudar o endereÃƒÆ’Ã‚Â§oo de e-mail');
        $(this).blur();
    });
};

$(window).load(function(){  
});

$(document).ready(function() {
    actionListMenu();
    if ($('body').hasClass('conta') || $('body').hasClass('account'))  {
        showContent();
        notChangeEmail();
    }
});