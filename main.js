$(document).ready(function() {
    $('#enter').on('click', () => {
        $("html, body").animate({ scrollTop: 500 }, 600);
        return false;
    })

    $('#about-content').on('mouseenter',function(){
    	$('#item1').addClass('entered')
    });
    $('#about-content').on('mouseleave',function(){
    	$('#item1').removeClass('entered')
    });

    $('#scores-content').on('mouseenter',function(){
    	$('#item2').addClass('entered')
    });
    $('#scores-content').on('mouseleave',function(){
    	$('#item2').removeClass('entered')
    });

    $('#contribution-content').on('mouseenter',function(){
    	$('#item3').addClass('entered')
    });
    $('#contribution-content').on('mouseleave',function(){
    	$('#item3').removeClass('entered')
    });

    $('#awards-content').on('mouseenter',function(){
    	$('#item4').addClass('entered')
    });
    $('#awards-content').on('mouseleave',function(){
    	$('#item4').removeClass('entered')
    });

    $('#Life-Story-content').on('mouseenter',function(){
    	$('#item5').addClass('entered')
    });
    $('#Life-Story-content').on('mouseleave',function(){
    	$('#item5').removeClass('entered')
    });
});
