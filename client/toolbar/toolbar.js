Template.toolbar.helpers({
    isAdmin: Helpers.isAdmin
});
Template.toolbar.events({
    'click .login-options': function () {
        document.getElementById('login-overlay').toggle();
    },
    'click .logout'       : function () {
        Meteor.logout(function (err) {
            if (err) {
                return Toaster.show('error', 'No pudimos cerrar sesión intentalo de nuevo :)');
            }
        });
    },
    'click #search-btn'   : function (e) {
        var input = document.getElementById('search-input');
        if (e) { // comes first
            e.stopPropagation();
        }
        input.classList.toggle('input-show');
        input.focus();
    },
    'keyup #search-input' : function (e, tmpl) {
        if (e.keyCode == 27) {
            document.getElementById('search-input').classList.toggle('input-show');
        }
        var value = tmpl.find('#search-input').value;
        Session.set('filter', value);
    }
});