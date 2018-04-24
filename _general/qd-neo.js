$( document ).ready(function() {
    $('.open-search-modal-qd-v1').click(function(){
        $('.search-modal').modal("toggle");
    });

    $(".closeFiltros").click(function () {
        $(".filter-qd-v1").removeClass(".ativo");
    });

    $(".active.title").each(function(){
        $(".active.title").click(function () {
            $(this).next().toggleClass('qd-active-menu');
        });
    })
});

function createSearchModal() {
    $('#search-qd-v1-modal').modal();
};

