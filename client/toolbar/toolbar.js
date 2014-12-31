Template.toolbar.helpers({
    isAdmin: Helpers.isAdmin
});
Template.toolbar.events({
    'click .login-options': function () {
        document.getElementById('login-overlay').toggle();
    },
    'click .logout': function() {
        Meteor.logout(function(err) {
            if (err) {
                alert('Error', 'No pudimos cerrar sesión intentalo de nuevo :)');
            }
        });
    }
});