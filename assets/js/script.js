
  var main = new Splide( '#main', {
    
    type: 'loop',
    pagination: false,
    arrows: false
  } ).mount();

   var thumbnails = new Splide( '#thumbnail-carousel',
   {
    fixedWidth: 100,
    gap       : 10,
    rewind    : true,
    pagination: false,
    isNavigation: true,
    padding: 50,
   

   } ).mount();

   main.sync( thumbnails );

   var reviews = new Splide( '#reviews', {
    padding: 50,
    type: 'loop',


  } ).mount();