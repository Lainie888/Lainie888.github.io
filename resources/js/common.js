function getPageView(url, target) {
    $(target).load('resources/view/' + url);
}

$(function(){

    $(document).on("click", ".navbar_toggler", function(){//漢堡選單
        $(".mobile_nav_group").slideToggle();
        $(".navbar_toggler").toggleClass("is_active");
    });

    $(document).on("click", ".btn_close, .button_close", function(){ //關閉lightBox
        $(".lightBox").hide();
    });

    $(document).on("click", ".portfolio_txt_group_box li a", function(){ //移除active
        $(this).addClass("active");
        $(".portfolio_txt_group_box li a.active").removeClass("active");
    });

    $(document).on("click", ".txt_web_design", function(){
        $(".porfolio_inner.web_design").show().siblings().hide();
    });

    $(document).on("click", ".txt_app_ui", function(){
        $(".porfolio_inner.app_ui").show().siblings().hide();
    });

    $(document).on("click", ".txt_logo", function(){
        $(".porfolio_inner.logo").show().siblings().hide();
    });

    $(document).on("click", ".txt_icon", function(){
        $(".porfolio_inner.icon").show().siblings().hide();
    });

    $(document).on("click", ".txt_banner", function(){
        $(".porfolio_inner.banner").show().siblings().hide();
    });

    $(document).on("click", ".txt_edm", function(){
        $(".porfolio_inner.edm").show().siblings().hide();
    });

    $(document).on("click", ".txt_dm", function(){
        $(".porfolio_inner.dm").show().siblings().hide();
    });

    $(document).on("click", ".txt_business_card", function(){
        $(".porfolio_inner.business_card").show().siblings().hide();
    });

    $(document).on("click", ".txt_output", function(){
        $(".porfolio_inner.output").show().siblings().hide();
    });

    $(document).on("click", ".txt_bus_advertising", function(){
        $(".porfolio_inner.bus_advertising").show().siblings().hide();
    });

    $(document).on("click", ".txt_character_design", function(){
        $(".porfolio_inner.character").show().siblings().hide();
    });

    $(document).on("click", ".txt_stickers", function(){
        $(".porfolio_inner.stickers").show().siblings().hide();
    });

    $(document).on("click", ".txt_creative_product", function(){
        $(".porfolio_inner.creative_product").show().siblings().hide();
    });

    $(document).on("click", ".txt_exhibition", function(){
        $(".porfolio_inner.exhibition").show().siblings().hide();
    });

    $(document).on("click", ".btn_click_01", function(){
        $(".lightBox_01").fadeIn(1000).sibling().hide();
    });

    $(document).on("click", ".btn_click_02", function(){
        $(".lightBox_02").fadeIn(1000).sibling().hide();
    });

    $(document).on("click", ".btn_click_03", function(){
        $(".lightBox_03").fadeIn(1000).sibling().hide();
    });

    $(document).on("click", ".btn_click_04", function(){
        $(".lightBox_04").fadeIn(1000).sibling().hide();
    });

    $(document).on("click", ".btn_click_06", function(){
        $(".lightBox_06").fadeIn(1000).sibling().hide();
    });

    $(document).on("click", ".btn_click_07", function(){
        $(".lightBox_07").fadeIn(1000).sibling().hide();
    });

    $(document).on("click", ".btn_click_08", function(){
        $(".lightBox_08").fadeIn(1000).sibling().hide();
    });

    $(document).on("click", ".btn_click_09", function(){
        $(".lightBox_09").fadeIn(1000).sibling().hide();
    });

    $(document).on("click", ".btn_click_app_ui_01", function(){
        $(".lightBox_app_ui_01").fadeIn(1000).sibling().hide();
        $(".app_ui").show();
        $(".web_design").hide();
    });

    $(document).on("click", ".btn_click_app_ui_02", function(){
        $(".lightBox_app_ui_02").fadeIn(1000).sibling().hide();
    });

    $(document).on("click", ".btn_click_app_ui_03", function(){
        $(".lightBox_app_ui_03").fadeIn(1000).sibling().hide();
    });

    $(document).on("click", ".btn_click_app_ui_04", function(){
        $(".lightBox_app_ui_04").fadeIn(1000).sibling().hide();
    });

})