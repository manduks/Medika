Template.signIn.events({
    'submit [data-action=sign-in]': function (e) {
        var form, email, password;
        form = $(e.target);
        if (form[0].valid) {
            email = form.find("#email").val();
            pass = form.find("#password").val();

            Meteor.loginWithPassword(email, pass, function (error) {
                if (error) {
                    return Toaster.show('error',error.reason);
                } else {
                    document.getElementById('login-overlay').toggle();
                    return Router.go("home");
                }
            });
        }
    }
});