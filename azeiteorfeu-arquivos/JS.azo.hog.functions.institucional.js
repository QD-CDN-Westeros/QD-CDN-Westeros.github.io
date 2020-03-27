var Institutional = {
    init: function () {
        Institutional.sideMenuToggle();   
        Home.videoPlay();

    },
    ajaxStop: function () { },
    windowOnload: function () { },
    sideMenuToggle: function () {
        $('.institucional-qd-v1-menu-toggle-wrap a').click(function (evt) {
            evt.preventDefault();
            $(document.body).addClass('qd-sn-on');
        });

        $('.institucional-qd-v1-side-menu-wrap-close').click(function () {
            $(document.body).removeClass('qd-sn-on');
        });
    }
};