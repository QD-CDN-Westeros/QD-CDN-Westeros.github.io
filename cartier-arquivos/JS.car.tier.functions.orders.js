var Orders = {
    init: function() {
        Orders.bootstrapCssFix();
    },
    ajaxStop: function() {
        Orders.bootstrapCssFix();
    },
    windowOnload: function() {},
    bootstrapCssFix: function() {
        var styleSheets = document.styleSheets;
        for (var i = 0; i < styleSheets.length; i++) {
            if ((styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css') > -1 || (styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css') > -1) {
                styleSheets[i].disabled = true;
            }
        }
    }
};