(function() {

    const $carousel = $('.project-carousel-container')

    const $desktopOnlyBtn = $('.desktop-only')
    let $screenSize = $(window).width()
    const $smScreenMsg = $('.non-desktop-msg')
    const $projectNav = $('.project-nav li')
    

    $projectNav.on('click', function() {
        $('html, body').animate({
            scrollTop: $carousel.offset().top
        })
    })

    if ($screenSize < 1000) {
        $desktopOnlyBtn.hide()
        $smScreenMsg.show()
    }

    $(window).resize(function() {
        $screenSize = $(window).width();
        if ($screenSize < 1000) {
            $desktopOnlyBtn.hide()
            $smScreenMsg.show()
        }
        else {
            $desktopOnlyBtn.show()
            $smScreenMsg.hide()
        }
    })



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
        accessible: true,
        hash: true
      });



})(jQuery);