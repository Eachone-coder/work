$(function () {
    layui.use(['form', 'laytpl', 'layer'], function () {
        var form = layui.form,
            laytpl = layui.laytpl,
            layer = layui.layer;

        var swiper = new Swiper('.swiper-container', {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        $(window).bind("scroll", function () {
            if ($(document).scrollTop() > 500) {
                $('.nav-fixed').show();
            } else {
                $('.nav-fixed').hide();
            }
        });
    });
});