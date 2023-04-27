$(function(){

    /**
     * .sc-visual .main-slide 무한 재생
     */
    const mainSlide = new Swiper('.main-slide',{
        simulateTouch:false,
        speed : 1000,
        loop:true,
        autoplay:{
            delay:5000,
            disableOnInteraction:false
        }
    })

    /**
     * .nav 커서올릴시 .sub-list 펼쳐짐
     */
    $('.gnb .nav-list .nav-item').hover(function(){
        if ($(this).find('.sub-list').length > 0) {
            
            $(this).children('.sub-list').addClass('show');
            $('.gnb').addClass('on');
        }

    },function(){
        $('.sub-list').removeClass('show');
        $('.gnb').removeClass('on');
    })

    /**
     * lang 화살표 변경, 박스 열기
     */
    $('.lang').click(function(){

        $('.lang-list').toggleClass('on');
        $('.select-lang').toggleClass('on');
    })

    /**
     * search-box 선택시 화살표, 폰트설정
     */
    $('.search-box').click(function(){
        $(this).toggleClass('on');
    })

    $('.select-search').change(function(){
        $(this).css('color','#000');
    })
    
    /**
     * select 선택시 focus 처리
     */
    // $("select").bind ("selectmenucreate", function (){
    //     $("select").selectmenu ("open");
    // })

    /**
     * sc-people, sc-benefits 슬라이드
     */
    const peopleSlide = new Swiper('.people-slide',{
        spaceBetween:30,
        slidesPerView: "auto",
        navigation:{
            nextEl:'.next',
            prevEl:'.prev',
        },

        
    })
    const benefitsSlide = new Swiper('.benefits-slide',{
        spaceBetween:30,
        slidesPerView:1,
        navigation:{
            nextEl:'.next',
            prevEl:'.prev',
        },
        breakpoints:{
            768:{
                slidesPerView:2,
            },
            1025:{
                slidesPerView:3
            }
        }
    })

    /**
     * footer 관련사이트 열고닫기
     */
    $('.link-related').click(function(){
        $(this).toggleClass('on');
        $('.related-list').toggleClass('on');
    })

    /**
     * slide 처음. 마지막 화살표 회색으로 변경
     */

    /**
     * (반응형) 모바일 메뉴 열고 닫기
     */
    $('.gnb .btn-menu').click(function(){
        $(this).toggleClass('on');
        $('.side-nav').toggleClass('on');
    })

    $('.side-nav .side').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).siblings('.sub-list').removeClass('on');
            
          } else {
            $(this).addClass('on');
            $(this).siblings('.sub-list').addClass('on');
      
          }
    })

    $('.side-nav .lang').click(function(){

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).siblings('.lang').addClass('active');
        } else {
            $(this).addClass('active');
            $(this).siblings('.lang').removeClass('active');
            
        }

    })


    /**(모바일)group-filter input focus시 밑줄 색 변화 */
    
    $('.input-search').click(function(){
        $('.input-box').addClass('on');
    })
    
    
    $('.group-filter').click(function(e){

        if ($(e.target).hasClass('on')) {
            $('.input-box').removeClass('on');
        }
        
    })

    /**
     * (모바일)group-filter 탭 열고닫기
     */
    $('.sc-search .btn-jobs').click(function(){
        $('.group-filter').addClass('on');
    })
    $('.group-filter .btn-close').click(function(){
        $('.group-filter').removeClass('on');
    })

    $('.filter-item .filter').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('on')) {

            $(this).removeClass('on');
            $(this).siblings('.sub-list').removeClass('on');
            $(this).siblings('.chk-wrap.all').removeClass('on');
            
            
          } else {
            
            $(this).addClass('on');
            $(this).siblings('.sub-list').addClass('on');
            $(this).siblings('.chk-wrap.all').addClass('on');
          }
    })
    $('.filter-item .btn-sub').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('on')) {

            $(this).removeClass('on');
            $(this).siblings('.sub-wrap').removeClass('on');
            
          } else {
            
            $(this).addClass('on');
            $(this).siblings('.sub-wrap').addClass('on');
      
          }
    })
    $('.allchk').click(function(){
        target = $(this).data('target');

        if ($(this).prev().prop('checked')) {
            $(target).find('input').prop('checked',false);
        } else {
            $(target).find('input').prop('checked',true);
            
        }

    })
    $('.btn-clear').click(function(e){
        e.preventDefault();

        $('input').prop('checked',false);
        
    })








})