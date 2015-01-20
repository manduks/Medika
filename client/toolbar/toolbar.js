Template.toolbar.helpers({
    isAdmin: Helpers.isAdmin,
    toolbarClass :  function () {
        return Meteor.user() ? 'green-toolbar' : 'blue-toolbar';
    }
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