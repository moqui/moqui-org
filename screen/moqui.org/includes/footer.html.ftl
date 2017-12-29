</div>
<!--End wrapper -->

<script>
$(document).ready(function() {
    <#if menu_active! == "home">
        //Swiper
        init_DecoratedSlider();
        // init_QoutationSlider();
        //Services hover
       	init_ServicesInfo();
    </#if>

    init_ButtonInfo();
    init_Button();

    SyntaxHighlighter.config.tagName = "code";
    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.all();
});
</script>

</body>
</html>
