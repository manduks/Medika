/**
 * This how we use the toaster
 * Toaster.show('warning',warningMsg);
 * Toaster.show('success',successMsg);
 * Toaster.show('error',errorMsg);
 */


Session.setDefault(TOASTER_TYPE, null);
var TOASTER_TYPE = 'toaster_type',
    toasterTypes = {
        'error'  : 'clear',
        'warning': 'info',
        'success': 'check'
    };
Toaster = {
    show   : function (type, msg) {
        Session.set(TOASTER_TYPE, type);
        var toaster = document.getElementById('toast');
        toaster.text = msg;
        toaster.show();
    },
    getType: function () {
        return Session.get(TOASTER_TYPE);
    }
}
Template.toaster.helpers({
    type: function () {
        return Toaster.getType();
    },
    icon: function () {
        return toasterTypes[Toaster.getType()];
    }
});