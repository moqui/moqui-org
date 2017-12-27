</div>
<!--End wrapper -->

<script src="/external/jquery/jquery-1.11.0.min.js"></script>                <!--Script jQuery-->
<script src="/external/jquery/jquery-migrate-1.2.1.min.js"></script>			<!--Script jQuery for old version jQuery-->
<script src="/external/bootstrap/js/bootstrap.min.js"></script>				<!--Bootstrap JavaScript-->
<script src="/external/jquery-event/jquery.event.drag-2.2.js"></script>		<!--Script jquery event Drag-->
<script src="/external/jquery-event/jquery.event.drop-2.2.js"></script>		<!--Script jquery event Drop-->
<script src="/external/jquery-easing/jquery.easing.1.3.js"></script>			<!--Script jquery Easing-->
<script src="/external/swiper/idangerous.swiper.min.js"></script>			<!--Script Swiper slider -->
<script src="/external/gozha-nav/jquery.mobile.menu.js"></script>			<!--Script Mobile menu-->
<script src="/external/modernizr/modernizr.custom.91224.js"></script>		<!--Script Modernizr-->
<script src="/external/colorbox/jquery.colorbox.js"></script>				<!--Script Colorbox-->
<!-- <script src="/js/form.js"></script>											Script Forms -->
<script src="/js/custom.js"></script>										<!--Script Custom-->

<script>
$(document).ready(function() {
    <#if menu_active = "home">
        //Swiper
        init_DecoratedSlider();
        // init_QoutationSlider();
        //Services hover
       	init_ServicesInfo();
    </#if>

    init_ButtonInfo();
    init_Button();
});
</script>

</body>
</html>
