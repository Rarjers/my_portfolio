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
}); 