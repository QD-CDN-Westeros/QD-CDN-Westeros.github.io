var Institutional = {
    init: function() {
        Institutional.toogleInstitucionalMenu();
        Institutional.applyAccordionBooking();
        Institutional.applyDateBooking();
        Institutional.handleBooking();
    },
    ajaxStop: function() {},
    windowOnload: function() {},
    toogleInstitucionalMenu: function() {
        $('.QDi__sm--nav > ul > li > .qd_am_text').click(function (e) {
            var $t = $(this);
            
            $t.toggleClass('qd-is-active');
            $t.next('ul').slideToggle();
        });        
    },
    applyAccordionBooking: function() {
        var wrapper = $('.QDbooking');
        wrapper.find('.QDb__accordion > ul > li').on('click', function(e) {
            e.preventDefault();

            if($(this).is('.active'))
                return;

            wrapper.find('.QDb__accordion > ul > li').removeClass('active');
            $(this).addClass('active');
        });

        wrapper.find('.QDb__accordion li li').on('click', function() {
            $(this).find('input').attr('checked', 'checked');
        });
    },
    applyDateBooking: function() {
        var wrapper = $('#step-data');
        var today = new Date();
        var months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
        var weekDays = ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"];

        $.datepicker.setDefaults({
            changeMonth: true, 
            showOtherMonths: true,
            selectOtherMonths: true,
            dayNamesMin: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]
        });
        wrapper.find(".days").datepicker({
            onSelect: function() {
                var selectedDay = wrapper.find(".days").datepicker("getDate");
                wrapper.find(".date input.weekday").val(weekDays[selectedDay.getDay()]);
                wrapper.find(".date span.weekday").text(weekDays[selectedDay.getDay()]);
                wrapper.find(".date input.selecteddate").val(selectedDay.getDate() + " " + months[selectedDay.getMonth()]);
                wrapper.find(".date span.selecteddate").text(selectedDay.getDate() + " " + months[selectedDay.getMonth()]);

                wrapper.find('.date').removeClass('active');
                wrapper.find('.time').addClass('active');
                wrapper.find('.month').hide();
                wrapper.find('.day').hide();
                wrapper.find('.hour').show();
            }
        });
        

        for(var i = 0; i < 7; i++) {
            var m = today.getMonth()+i;
            wrapper.find('.months table thead tr').append('<th data-val="'+ m +'">' + months[m] + '</th>');
        }
        wrapper.find('.months th').first().addClass('active');
        wrapper.find('.months th').on('click', function() {
            wrapper.find('.months th').removeClass('active');
            $(this).addClass('active');
            wrapper.find(".day select.ui-datepicker-month").val($(this).attr('data-val')).change();
        });

        wrapper.find('.hours td').on('click', function() {
            wrapper.find(".time input.selectedtime").val($(this).text());
            wrapper.find(".time span.selectedtime").text($(this).text());
        });

        wrapper.find('.date').on('click', function() {
            wrapper.find('.time').removeClass('active');
            wrapper.find('.date').addClass('active');
            wrapper.find('.month').show();
            wrapper.find('.day').show();
            wrapper.find('.hour').hide();
        });

    },
    handleBooking: function() {
        var dataReturn = {};
        $('.QDb__actions--next').on('click', function(e) {
            e.preventDefault();

            var actualForm =  $('.QDbooking form.QDform');
            if(!isValidForm(actualForm)) {
                $('<button type="submit"></button>').appendTo(actualForm).click().remove();
                return;
            }

            if($('.QDform > .active').next().length) {
                $('.QDform > .active').removeClass('active').next().addClass('active');
                $('.QDb__tabs li.active').last().next().addClass('active');
            
            } else {
                sendForm(actualForm);
            }
        });
        
        $('.QDb__actions--back').on('click', function(e) {
            e.preventDefault();
            $('.QDform > .active').removeClass('active').prev().addClass('active');
            $('.QDb__tabs li.active').last().removeClass('active');
        });

        function isValidForm(form) {
            var ret = true;
            form.find('input:visible, select:visible, textarea:visible').each(function(){
                if(this.checkValidity())
                    return;

                ret = false;
                return false;
            });

            return ret;
        }

        function sendForm(form) {
            var formData = {};

            form.serializeArray().forEach(function(elem) {
                if(elem.name == "g-recaptcha-response" ||   elem.name == "googlecheck")
                    return;

                formData[elem.name] = elem.value;
            });

            $.ajax({
				url: "//api.vtexcrm.com.br/cartier/dataentities/AG/documents",
				type: "PATCH",
				dataType: "json",
				headers: { "Accept": "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json; charset=utf-8" },
				data: JSON.stringify(formData)
            })
            .done(function() {
                var msg = "<h6>SEU AGENDAMENTO FOI FEITO COM SUCESSO</h6>";
                form.parent().parent().addClass('success').html(msg);
            });
        }
    }
};