Helpers = function () {
    return {
        isAdmin    : function () {
            return Meteor.user() && Meteor.user().profile && Meteor.user().profile.admin;
        },
        showToaster: function (text) {
            var element = document.getElementById('toast');
            element.text = text;
            element.show();
        }
    }
}
();