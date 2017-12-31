<div id="browser-warning" class="hidden text-center" style="margin-bottom: 80px;">
    <h4 class="text-danger">Your browser is not supported, please use a recent version of one of the following:</h4>
    <div class="row" style="font-size: 4em;">
        <div class="col-sm-2"></div>
        <div class="col-sm-2"><a href="https://www.google.com/chrome/"><i class="fa fa-chrome"></i></a></div>
        <div class="col-sm-2"><a href="https://www.mozilla.org/firefox/"><i class="fa fa-firefox"></i></a></div>
        <div class="col-sm-2"><a href="https://www.apple.com/safari/"><i class="fa fa-safari"></i></a></div>
        <div class="col-sm-2"><a href="https://www.microsoft.com/windows/microsoft-edge"><i class="fa fa-edge"></i></a></div>
        <div class="col-sm-2"></div>
    </div>
</div>
<!-- currently general/common HTML5 and ES5 support is currently required, so check for IE and older browsers -->
<!-- TODO: check for older versions of various browsers, or for HTML5 features like input/etc.@form attribute, ES5 stuff -->
<script>
    var UA = window.navigator.userAgent.toLowerCase();
    var isIE = UA && /msie|trident/.test(UA);
    if (isIE) $("#browser-warning").removeClass("hidden");
</script>

<div class="text-center">
    <h4>Login to access <span class="text-info">HiveMind PM</span> for Moqui</h4>
    <p>An account is required to view issues (requests), projects, and tasks. Create a <a class="text-success" href="#new-account" data-toggle="tab">New Account</a> to get access immediately.</p>
    <p>Your account will initially have full access to the My Account app for requests, messages, etc and view-only access for the HiveMind PM app to view all requests, tasks, etc.</p>
</div>
<div class="tab-content">
    <div id="login" class="tab-pane active">
        <form method="post" action="${sri.buildUrl("login").url}" class="form-signin" id="login_form">
            <p class="text-muted text-center">Enter your username and password to sign in</p>
            <#-- not needed for this request: <input type="hidden" name="moquiSessionToken" value="${ec.web.sessionToken}"> -->
            <input type="text" name="username" value="${(ec.getWeb().getErrorParameters().get("username"))!""}" placeholder="Username" required="required" class="form-control top" id="login_form_username">
            <input type="password" name="password" placeholder="Password" required="required" class="form-control bottom">
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        <script>$("#login_form_username").focus();</script>
    </div>
    <div id="reset" class="tab-pane">
        <form method="post" action="${sri.buildUrl("resetPassword").url}" class="form-signin" id="reset_form">
            <p class="text-muted text-center">Enter your username to reset and email your password</p>
            <input type="hidden" name="moquiSessionToken" value="${ec.web.sessionToken}">
            <input type="text" name="username" placeholder="Username" required="required" class="form-control">
            <button class="btn btn-lg btn-danger btn-block" type="submit">Reset &amp; Email Password</button>
        </form>
    </div>
    <div id="change" class="tab-pane">
        <form method="post" action="${sri.buildUrl("changePassword").url}" class="form-signin" id="change_form">
            <p class="text-muted text-center">Enter details to change your password</p>
            <input type="hidden" name="moquiSessionToken" value="${ec.web.sessionToken}">
            <input type="text" name="username" value="${(ec.getWeb().getErrorParameters().get("username"))!""}" placeholder="Username" required="required" class="form-control top">
            <input type="password" name="oldPassword" placeholder="Old Password" required="required" class="form-control middle">
            <input type="password" name="newPassword" placeholder="New Password" required="required" class="form-control middle">
            <input type="password" name="newPasswordVerify" placeholder="New Password Verify" required="required" class="form-control bottom">
            <button class="btn btn-lg btn-danger btn-block" type="submit">Change Password</button>
        </form>
    </div>
    <div id="new-account" class="tab-pane">
        <form name="createAccount" id="createAccount" method="post" class="form-signin" action="${sri.buildUrl("createAccount").url}">
            <p class="text-muted text-center">Enter details to create a new account</p>
            <input type="hidden" name="moquiFormName" value="createAccount">
            <input type="text" name="firstName" value="${(ec.getWeb().getErrorParameters().get("firstName"))!""}" placeholder="First Name" class="form-control top required" required="required">
            <input type="text" name="lastName" value="${(ec.getWeb().getErrorParameters().get("lastName"))!""}" placeholder="Last Name" class="form-control middle required" required="required">
            <input type="email" name="emailAddress" value="${(ec.getWeb().getErrorParameters().get("emailAddress"))!""}" placeholder="Email" class="form-control middle email required" required="required">
            <input type="text" name="username" value="${(ec.getWeb().getErrorParameters().get("username"))!""}" placeholder="Username (please use GitHub ID)" class="form-control middle">
            <input type="password" class="form-control middle required" name="newPassword" placeholder="Password" required="required">
            <input type="password" class="form-control bottom required" name="newPasswordVerify" placeholder="Verify Password" required="required">
            <button class="btn btn-lg btn-success btn-block" type="submit">Create Account</button>
        </form>
    </div>
</div>
<div class="text-center">
    <ul class="list-inline">
        <li><a class="text-muted" href="#login" data-toggle="tab">Login</a></li>
        <li><a class="text-muted" href="#reset" data-toggle="tab">Reset Password</a></li>
        <li><a class="text-muted" href="#change" data-toggle="tab">Change Password</a></li>
        <li><a class="text-muted" href="#new-account" data-toggle="tab">New Account</a></li>
    </ul>
</div>
