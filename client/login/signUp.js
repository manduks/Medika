Template.signUp.events({
    "submit [data-action=sign-up]": function (e) {
        var form, email, password;
        form = $(e.target);

        if (form[0].valid) {
            email = form.find("#email").val();
            password = form.find("#password").val();
            return Accounts.createUser({
                email   : email,
                password: password
            }, function (error) {
                if (error) {
                    return Toaster.show('Error',error.reason);
                } else {
                    document.getElementById('login-overlay').toggle();
                    return Router.go("home");
                }
            });
        }
    }
});
