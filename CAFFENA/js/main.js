$(document).ready(function(){

$('.burger_menu').on('click', function(){
    $(this).css('rotate', function(index,value) {
        if(value == '0deg') {
            $('.burger_meny_list').slideDown('1000');
            return '180deg';
            
        }
        if (value == '180deg') {
            $('.burger_meny_list').slideUp('1000');
            return '0deg';
        }
    });
    
});
// $('.burger_menu').css('rotate', '0deg');
// Block Slider Start
$('.slider_next').on('click', function(e){
  e.preventDefault();
  let currentSlider = $('.slider_content.current'),
      currentSliderIndex = currentSlider.index(),
      nextSlider = currentSlider.next(),
      nextSliderIndex = currentSliderIndex + 1;

      currentSlider.fadeOut(0).removeClass('current');
  if (nextSliderIndex === ($('.slider_content').length)) {
      $('.slider_content:first').fadeIn(1000).addClass('current');
  } else {
    nextSlider.fadeIn(1000).addClass('current');
  }
})
$('.slider_prev').on('click', function(e){
  e.preventDefault();
  let currentSlider = $('.slider_content.current'),
      currentSliderIndex = currentSlider.index(),
      prevSlider = currentSlider.prev(),
      prevSliderIndex = currentSliderIndex - 1;

      currentSlider.fadeOut(0).removeClass('current');
  if (prevSliderIndex === ($('.slider_content:first').index()-1)) {
      $('.slider_content:last').fadeIn(1000).addClass('current');
  } else {
    prevSlider.fadeIn(1000).addClass('current');
  }
})
// Block Slider End
}); 
// Block star ratings start
const stars = document.querySelectorAll('.starZero');
const starsOne = document.querySelectorAll('.starOne');
const starsTwo = document.querySelectorAll('.starTwo');

stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    for (let i = 0; i < index; i++) {
      stars[i].classList.add('active');
    }
  });

});
starsOne.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    for (let i = 0; i < index; i++) {
      starsOne[i].classList.add('active');
    }
  });
});
starsTwo.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    for (let i = 0; i < index; i++) {
      starsTwo[i].classList.add('active');
    }
  });
});
// Block star ratings end