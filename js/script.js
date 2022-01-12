
var $grid = $('.grid').isotope({
  itemSelector: '.gallery-item'
});

$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});

var $buttonGroup = $('.filters');
$buttonGroup.on( 'click', 'li', function( event ) {
  $buttonGroup.find('.is-checked').removeClass('is-checked');
  var $button = $( event.currentTarget );
  $button.addClass('is-checked');
  var filterValue = $button.attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// filter .childhood items
$grid.isotope({ filter: '.childhood' });

// filter .doodle items
$grid.isotope({ filter: '.doodle’' });

// filter .college items
$grid.isotope({ filter: '.college' });

// filter .video items
$grid.isotope({ filter: '.video' });

// show all items
$grid.isotope({ filter: '*' });

Fancybox.bind('[data-fancybox="single"]', {
  groupAttr: false
});
