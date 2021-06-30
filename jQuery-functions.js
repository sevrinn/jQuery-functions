$(document).ready(function() {
  console.log('document ready!');
  //click button makes p turn red
  $('#click').click(function() {
    $('.click').css({"color": "red", "font-weight": "900"});
  });
  //hide button makes p disappear
  $('#hide').click(function() {
    $('.hide').hide();
  });
  //hide button makes p disappear slowly
  $('#hide-slow').click(function() {
    $('.hide-slow').hide('slow');
  });
  //show button makes p appear
  $('.show').hide();
  $('#show').click(function() {
    $('.show').show();
  });
  //show button makes p appear quickly
  $('.show-fast').hide();
  $('#show-fast').click(function(){
    $('.show-fast').show('slow');
  });
  //toggle button makes p toggle between showing and hiding
  $('#toggle').click(function() {
    $('.toggle').toggle();
  });
  //slideDown button makes .box hide by animating height property
  $('.slideDown').hide();
  $('#slideDown').click(function() {
    $('.slideDown').slideDown('slow');
  });
  //slideUp button makes .box show by animating height property
  
  $('#slideUp').click(function() {
    $('.slideUp').slideUp('slow');
  });
  
  //slidetoggle button reveals/conceals .box
  $('#slideToggle').click(function() {
    $('.slideToggle').slideToggle('fast');
  });
  
  //fadeIn button fades in hidden .box to opaque
  $('.fadeIn').hide();
  $('#fadeIn').click(function() {
    $('.fadeIn').fadeIn('slow');
  });

  //fadeOut button fades .box to nothing
  $('#fadeOut').click(function() {
    $('.fadeOut').fadeOut();
  });

  //addClass button adds a class to target element. making the new color cadet blue.
  $('#addClass').click(function() {
    $('.addClass').addClass('box-blue');
  });

  //before button inserts a blue box before the yellow box
  $('#before').click(function() {
    $('.before').before('<div class="box box-blue"></div>');
  });

  //after button inserts a box after the yellow box
  $('#after').click(function() {
    $('.after').after('<div class="box box-blue"></div>')
  });

  //append button appends bottom part of nametag to the last child of the div-group
  $('#append').click(function() {
    $('.p-group').append('<div class="name">Sev</div>')
  });

  //html button adds a paragraph below the existing one
  $('#html').click(function() {
    $('.change-me').html('<p class="changed">I\'ve changed!</p>');
  });

  //attr button adds alt and title attributes and their respective properties
  $('#attr').click(function() {
    $('#macdonal').attr({
      alt: 'katy and i at the macdonalds on macdonal',
      title: 'photo by katy k'
    });
  });

  //here, when you type into input area, result is reproduced on page
  $('#val').keyup(function() {
    let value = $(this).val(); //gets value of keypressed and sets it to variable 'value'
    $('.result').text(value);
  });
});