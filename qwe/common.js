
    
    //콜라보
    
    
    
    
    var collaboSwiper = new Swiper('.collabo_banner', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation : { // 네비게이션 설정
            nextEl : '.collabo_banner .swiper-button-next', // 다음 버튼 클래스명
            prevEl : '.collabo_banner .swiper-button-prev', // 이번 버튼 클래스명
        },
        loop: true,
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 3000,
		speed: 700,
        loopedSlides: 1,        
        freeMode : true,
    });

   
    
    
    
    var collabo = new Swiper('.collabo-container', {
        
        fadeEffect: {
            crossFade: true
        },
        scrollbar: '.collabo-container .swiper-scrollbar',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        freeMode : true,
    });
    
    
    
    
    var special = new Swiper('.specialSlider', {
        loop: true, 
        pagination: '.specialSlider .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    
    
    var imgSlide = new Swiper('#rpVisual', {
        nextButton: '#rpVisual .swiper-button-next',
		prevButton: '#rpVisual .swiper-button-prev',
        effect: 'fade',
		loop: true,       
        paginationClickable: false,
        spaceBetween: 0,
        
    });
    
    
    var rpSlider = new Swiper('.rpSlider', {
        loop: true, 
        pagination: '.rpSlider .swiper-scrollbar',
        paginationClickable: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loopAdditionalSlides : 1,
    });
    
    /*
    jQuery('.hsSlider ul').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        infinite:true,
        centerMode: true,
        centerPadding: '60px', 
        
        

    });
    */
    
    
    var swiper1111 = new Swiper('.hsSlider .swiper-container', {
      slidesPerView: 'auto',
      loopAdditionalSlides: 20,
        loopedSlides: 20,
      centeredSlides: true,
      spaceBetween: 0,
      pagination: '.hsSlider .swiper-scrollbar',
      loop:true,
      autoplay: 3000,
			speed: 700,
    });
    
    
    if(jQuery('.hans_banner a').length > 1 ) {
   
    
    var collabo2 = new Swiper('.hans_banner', {
        
        nextButton: '.hans_banner .swiper-button-next',
		prevButton: '.hans_banner .swiper-button-prev',
        loop: true, 
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 3000,
			speed: 700,
        
    });
    
        jQuery('.hans_banner .swiper-button-next, .hans_banner .swiper-button-prev').css('opacity','1');
        
    } else {
    
        jQuery('.hans_banner .swiper-button-next, .hans_banner .swiper-button-prev').css('opacity','0');
    
    }
    
    

