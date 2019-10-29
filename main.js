(function() {

    const $carousel = $('.project-carousel-container')
    const $cell = $('.is-selected')

    const $desktopOnlyBtn = $('.desktop-only')
    let $screenSize = $(window).width()
    const $smScreenMsg = $('.non-desktop-msg')

    if ($screenSize < 1000) {
        $desktopOnlyBtn.hide()
        $smScreenMsg.show()
    }



    $carousel.on('mouseenter', function(e) {
        if(e.target.type !== 'button') {
            $('.is-selected .project-description').fadeIn()
        }
    })

    $carousel.on('mouseleave', function() {
        $('.is-selected .project-description').fadeOut()
    })



    $carousel.flickity({
        // options
        cellAlign: 'left',
        contain: true,
        draggable: false,
        accessible: true
      });


})(jQuery);