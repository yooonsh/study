function get_main_list(_t_name, _page, _element, _page_html, _row) {
    $.ajax({
        url: '/m/product_list.action.html?r=' + Math.random(),
        type: 'POST',
        dataType: 'json',
        data: {
            action_mode: 'GET_MAIN_PRODUCT_LIST',
            tag_name: _t_name,
            page: _page
        },  
        success: function(res) {

            var dom = $('<div>').html(res.html);
                 if ($('ul.items:only-child', $(_element)).length == 0) {
       $(_element).append($('<ul class="items"></ul>'));
   }
            $('ul.items', _element).append($('ul.items', dom).html());

            if (res.is_page_end == true) {
               $('.' + _page_html).hide();
            } else {
                _page++;
                $('.' + _page_html + ' > a').prop('href', "javascript:get_main_list('"+_t_name+"', " + _page + ", '" + _element + "', '" + _page_html + "', '" + _row + "');");
            }   
            dom = null;    
        }
    }); 
}


$(function() {
    get_main_list('block_special_product', 1, '.MK_block_special_product', 'btn-special_product', '1'); //스페셜 상품
    get_main_list('block_recmd_product', 1, '.MK_block_recmd_product', 'btn-recmd_product', '1');  //추천 상품
    get_main_list('block_new_product', 1, '.MK_block_new_product', 'btn-new_product', '1');  //신규상품
    get_main_list('block_add1_product', 1, '.MK_block_add1_product', 'btn-add1_product', '1');  //추가상품1
    get_main_list('block_add2_product', 1, '.MK_block_add2_product', 'btn-add2_product', '1');  //추가상품2
    get_main_list('block_add3_product', 1, '.MK_block_add3_product', 'btn-add3_product', '1');  //추가상품3
    get_main_list('block_add4_product', 1, '.MK_block_add4_product', 'btn-add4_product', '1');  //추가상품4
    get_main_list('block_add5_product', 1, '.MK_block_add5_product', 'btn-add5_product', '1');  //추가상품5
    
    
});



var z=sessionStorage;
 $(window).click(function() {
 z.setItem("position",$(window).scrollTop());
 $(document).unbind('ajaxStop').bind('ajaxStop', function(){
 $('a[href*="get_main_list"]').each(function(){
 var t=$(this).attr("href").replace(/'|btn-|\s/g,'').split(",");
 z.setItem(t[3], $(this).parent('.btn-'+t[3]).is(':visible')? t[1]:Number(t[1])+1);
 });
 });
 });
 var ajaxCount=0,arr=[],len=0;
 $(document).ajaxStop(function() {
 if (ajaxCount==0) {
 $('a[href*="get_main_list"]').each(function(){
 var n=$(this).attr("href").replace(/'|btn-|\s/g,'').split(",")[3];
 var a=z.getItem(n);
 if(a>2)for(var o=2;a>o;o++) arr.push(n+'|'+o);
 });
 len = arr.length;

 if ( len > 0 ) {
 var a=arr[ajaxCount].split('|');
 get_main_list("block_"+a[0],a[1],".MK_block_"+a[0],"btn-"+a[0],"1");

 $(document).unbind('ajaxStop').bind('ajaxStop', function() {
 ajaxCount++;
 if(len>0 && ajaxCount<len){
 var a=arr[ajaxCount].split('|');
 get_main_list("block_"+a[0],a[1],".MK_block_"+a[0],"btn-"+a[0],"1");
 $.event.trigger('ajaxSend');
 } else if (len>0&&len==ajaxCount) {
 $(window).scrollTop(z.getItem("position")).trigger('scroll');
 }
 });
 $.event.trigger('ajaxSend');
 } else {
 ajaxCount++;
 }
 }
 });



    jQuery(".specialSlider ul").each(function(){
        if(jQuery(this).find('li').length < 1) {
            jQuery(this).remove();
        }
    });
    
    
    jQuery(".rpPrd ul").each(function(){
        if(jQuery(this).find('li').length < 1) {
            jQuery(this).remove();
        }
    });

    jQuery('.best_cont_div .swiper-container .swiper-slide').each(function(){
        if(jQuery(this).find('li').length < 1) {
            jQuery(this).remove();
        }
    });


    // 브랜드 영역
	var brand = new Swiper('.brand-container', {
        
        pagination: '.brand-container .swiper-scrollbar',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });	
    
    
    var coming = new Swiper('.coming-container', {
        
        pagination: '.coming-container .swiper-scrollbar',
        slidesPerView: 'auto',
        loopAdditionalSlides: 20,
        loopedSlides: 20,
        paginationClickable: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop:true,
    });	
    
    

    //베스트 영역
    var best_menu = new Swiper('.best_cate_menu', {
            
        slidesPerView: 'auto',
                    
    });
    
    
    var cate_slider01 = new Swiper('.cate_slider01', {
        loop: false, 
        pagination: '.cate_slider01 .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        simulateTouch:false,
        
    });
    
    
    var cate_slider02 = new Swiper('.cate_slider02', {
        loop: false, 
        pagination: '.cate_slider02 .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        
    });
    
    
    var cate_slider03 = new Swiper('.cate_slider03', {
        loop: false, 
        pagination: '.cate_slider03 .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        
    });
    
    
    var cate_slider04 = new Swiper('.cate_slider04', {
        loop: false, 
        pagination: '.cate_slider04 .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        
    });
    
    
    var cate_slider05 = new Swiper('.cate_slider05', {
        loop: false, 
        pagination: '.cate_slider05 .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        
    });
    
    
    var cate_slider06 = new Swiper('.cate_slider06', {
        loop: false, 
        pagination: '.cate_slider06 .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        
    });
    
    
    var cate_slider07 = new Swiper('.cate_slider07', {
        loop: false, 
        pagination: '.cate_slider07 .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        
    });
    
    
    var cate_slider08 = new Swiper('.cate_slider08', {
        loop: false, 
        pagination: '.cate_slider08 .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        
    });
    
    
    jQuery('.best_cont_div .swiper-container').hide();
    jQuery('.best_cont_div .swiper-container').eq(0).show();
    jQuery('.best_cate_menu ul li').bind('click',function(){
        jQuery('.best_cate_menu ul li').removeClass('tab_on');
        jQuery(this).addClass('tab_on');
        jQuery('.best_cont_div .swiper-container').hide();
        var _idxz = jQuery(this).index();
        jQuery('.best_cont_div .swiper-container').eq(_idxz).show();
        cate_slider01.init();
        cate_slider02.init();
        cate_slider03.init();
        cate_slider04.init();
        cate_slider05.init();
        cate_slider06.init();
        cate_slider07.init();
        cate_slider08.init();
        jQuery('.best_cate_menu ul li').each(function(i){    
     
             if(jQuery(this).hasClass('tab_on')){
                 best_menu.slideTo(jQuery(this).index());

             }

        }); 
    });
    
    
    var startX,startY, endX,endY;
    jQuery(".best_cont_div .swiper-container .swiper-slide:last-of-type").on('touchstart',function(event){
        startX = event.originalEvent.changedTouches[0].screenX;
        startY = event.originalEvent.changedTouches[0].screenY;
    });
    
    jQuery('.best_cont_div .swiper-container .swiper-slide:last-of-type').bind('touchend', function (event) {
            
            endX=event.originalEvent.changedTouches[0].screenX;
            endY=event.originalEvent.changedTouches[0].screenY;
            
            if(startX-endX>50){
        
            var idx_t = jQuery('.best_cate_menu ul li.tab_on').index();
            
            
            if(idx_t == 7) {
                
                jQuery('.best_cate_menu ul li').removeClass('tab_on');
                jQuery('.best_cate_menu ul li').eq(0).addClass('tab_on');
                jQuery('.cate_slider08').hide();
                jQuery('.best_cont_div .swiper-container').eq(0).show();
                //cate_slider01.init();
                cate_slider01.slideTo(0);
                console.log(idx_t);
            } else {
            
                jQuery('.best_cate_menu ul li').removeClass('tab_on');
                jQuery('.best_cate_menu ul li').eq(idx_t + 1).addClass('tab_on');
                jQuery('.cate_slider0' + (idx_t + 1)).hide();
                jQuery('.best_cont_div .swiper-container').eq(idx_t + 1).show();
                cate_slider01.slideTo(0);
                cate_slider02.slideTo(0);
                cate_slider03.slideTo(0);
                cate_slider04.slideTo(0);
                cate_slider05.slideTo(0);
                cate_slider06.slideTo(0);
                cate_slider07.slideTo(0);
                cate_slider08.slideTo(0);
        
            }
            
            jQuery('.best_cate_menu ul li').each(function(i){    
     
                 if(jQuery(this).hasClass('tab_on')){
                     best_menu.slideTo(jQuery(this).index());

                 }

            });
            
            }

    });
    
    var startX2,startY2, endX2,endY2;
    jQuery(".best_cont_div .swiper-container .swiper-slide:first-of-type").on('touchstart',function(event){
        startX2 = event.originalEvent.changedTouches[0].screenX;
        startY2 = event.originalEvent.changedTouches[0].screenY;
    });
    
    jQuery('.best_cont_div .swiper-container .swiper-slide:first-of-type').bind('touchend', function (event) {
            
            endX2=event.originalEvent.changedTouches[0].screenX;
            endY2=event.originalEvent.changedTouches[0].screenY;
            
            if(endX2-startX2>50){
        
            var idx_t2 = jQuery('.best_cate_menu ul li.tab_on').index();
            
            
            if(idx_t2 == 0) {
                
                jQuery('.best_cate_menu ul li').removeClass('tab_on');
                jQuery('.best_cate_menu ul li').eq(7).addClass('tab_on');
                jQuery('.cate_slider01').hide();
                jQuery('.best_cont_div .swiper-container').eq(7).show();
                //cate_slider08.init();
                cate_slider08.slideTo(2);
                console.log(idx_t2);
            } else {
            
                jQuery('.best_cate_menu ul li').removeClass('tab_on');
                jQuery('.best_cate_menu ul li').eq(idx_t2 - 1).addClass('tab_on');
                jQuery('.cate_slider0' + (idx_t2 + 1)).hide();
                jQuery('.best_cont_div .swiper-container').eq(idx_t2 - 1).show();
                cate_slider01.slideTo(2);
                cate_slider02.slideTo(2);
                cate_slider03.slideTo(2);
                cate_slider04.slideTo(2);
                cate_slider05.slideTo(2);
                cate_slider06.slideTo(2);
                cate_slider07.slideTo(2);
                cate_slider08.slideTo(2);
        
            }
            
            jQuery('.best_cate_menu ul li').each(function(i){    
     
                 if(jQuery(this).hasClass('tab_on')){
                     best_menu.slideTo(jQuery(this).index());

                 }

            });
            
            }

    });





    
    //콜라보
    if(jQuery('.collabo_banner a').length > 1 ) {
    
    
    
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
    
        jQuery('.collabo_banner .swiper-button-next, .collabo_banner .swiper-button-prev').css('opacity','1');
        
    } else {
    
        jQuery('.collabo_banner .swiper-button-next, .collabo_banner .swiper-button-prev').css('opacity','0');
    
    }
    
    
    
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
    
    

