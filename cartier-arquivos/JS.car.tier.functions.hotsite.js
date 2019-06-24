var Hotsite = {
    init: function() {
        Hotsite.addGridClass();
    },
    ajaxStop: function() {},
    windowOnload: function() {},
    addGridClass: function() {
        $('.QD__b--responsive > *').QD_mosaicBanners({
            classTwoColumn: "col-xs-12 col-sm-12 col-md-6",
            classFourColumn: "col-xs-12 col-md-6"
        });
    }
};