$('#slider').nivoSlider({
    effect: 'random',                 // Specify sets like: 'fold,fade,sliceDown'
    slices: 3,                     // For slice animations
    boxCols: 8,                     // For box animations
    boxRows: 4,                     // For box animations
    animSpeed: 500,                 // Slide transition speed
    pauseTime: 11000,                 // How long each slide will show
    startSlide: 0,                     // Set starting Slide (0 index)
    directionNav: true,             // Next & Prev navigation
    controlNav: false,                 // 1,2,3... navigation
    controlNavThumbs: false,         // Use thumbnails for Control Nav
    pauseOnHover: true,             // Stop animation while hovering
    manualAdvance: false,             // Force manual transitions
    prevText: '<i class="fa fa-arrow-left "></i>',                 // Prev directionNav text
    nextText: '<i class="fa fa-arrow-right "></i>',                 // Next directionNav text
    randomStart: false,             // Start on a random slide
       // Triggers when slider has loaded
});