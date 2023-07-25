$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })
})
$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 200 ){
        $('.nav-menu').addClass('custom-navbar')
    }else{
        $('.nav-menu').removeClass('custom-navbar')
    }
})
$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 700 ){
        $('.awards-img').addClass('ani-img')
        $('.awards-text').addClass('ani-text')
    }else{
        $('.awards-img').removeClass('ani-img')
        $('.awards-text').removeClass('ani-text')
    }
})
$('.gallery-list-item').click(function(){
    let value = $(this).attr('data-filter');
    $(this).addClass('active-item').siblings().removeClass('active-item')

    if(value === 'all'){
        $('.filter').show(300)
    }else{
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
    }
})
$(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position)
    if(position >= 4400 ){
        $('.card-1').addClass('membership-right')
        $('.card-2').addClass('membership-bottom')
        $('.card-3').addClass('membership-left')

    }else{
        $('.card-1').removeClass('membership-right')
        $('.card-2').removeClass('membership-bottom')
        $('.card-3').removeClass('membership-left')

    }
})




