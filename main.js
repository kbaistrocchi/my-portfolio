(function() {

    const $carousel = $('.project-carousel-container')

    // $carousel.on('mouseenter.flickity', function() {
    //     console.log('mouse has entered carousel')
    // })



    $carousel.flickity({
        // options
        cellAlign: 'left',
        contain: true
      });

    //   $('.project-cell').on('mouseenter', (e) => {
    //       console.log(e)
    //       $(e).hide()
    //       $('.project-description').show();
    //   })


})(jQuery);