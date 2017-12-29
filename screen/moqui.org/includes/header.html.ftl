<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${head_description!""}">
    <meta name="keywords" content="${head_keywords!""}">
    <title>${head_title!"Moqui Ecosystem"}</title>

    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link href="/css/style_blue.css" rel="stylesheet">
    <link href="/css/override.css" rel="stylesheet">

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

    <script type="text/javascript" src="/js/shCore.js"></script>
    <script type="text/javascript" src="/js/shBrushXml.js"></script>
    <script type="text/javascript" src="/js/shBrushGroovy.js"></script>
    <link href="/css/shCoreDefault.css" rel="stylesheet" type="text/css"/>

    <script type="text/javascript" src="/libs/jstree/jstree.min.js"></script>
    <link href="/libs/jstree/themes/default/style.min.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div class="wrapper">
    <header>
        <div class="presentation">
            <div class="top-info">
                <div class="container">
                    <p class="top-info__text pull-left hidden-xs small">
                        <a href="https://demo.moqui.org">Try the demo!</a> See POP Commerce, HiveMind, System, Tools, etc
                    </p>
                    <p class="top-info__text pull-right small">
                        Comments? <a href="http://www.linkedin.com/groups?gid=4640689">LinkedIn Group</a>
                        Questions? <a href="http://stackoverflow.com/questions/tagged/moqui">Stack Overflow</a>
                    </p>
                </div>
            </div>
            <div class="main-nav fixed-pos">
                <div class="divider-circle"></div>
                <nav class="container">
                    <div class="logo pull-left">
                        <a href="/index.html"><img class="logo-img moqui-logo" src="/MoquiLogoNew.png" alt="Moqui Logo"></a>
                    </div>
                    <div class="pull-right" id="navigation-box">
                        <a id="navigation-toggle" href="#"><span class="menu-icon"></span></a>
                        <ul id="navigation">
                            <li<#if menu_active! == "framework"> class="active-item"</#if>>
                                <span class="sub-nav-toggle plus"></span>
                                <a href="/framework.html">Framework</a>
                                <ul>
                                    <li><a href="/framework.html">Home</a></li>
                                    <li><a href="/docs/framework/Run+and+Deploy">Run/Deploy</a></li>
                                    <li><a href="/docs/framework/Quick+Tutorial">Tutorial</a></li>
                                    <li><a href="/docs/framework/Framework+Features">Features</a></li>
                                    <li><a href="/javadoc/index.html" target="_blank">API JavaDoc</a></li>
                                </ul>
                            </li>
                            <li<#if menu_active! == "mantle"> class="active-item"</#if>>
                                <a href="/mantle.html">Business Artifacts</a></li>
                            <li<#if menu_active! == "applications"> class="active-item"</#if>>
                                <a href="/applications.html">Applications</a></li>
                            <li<#if menu_active! == "addons"> class="active-item"</#if>>
                                <a href="/addons.html">Add ons</a></li>
                            <li<#if menu_active! == "service"> class="active-item"</#if>>
                                <a href="/service.html">Service Providers</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
