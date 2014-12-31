Template.loginOverlay.events({
    'core-select paper-tabs': function () {
        var pages = document.querySelector('core-pages');
        var tabs = document.querySelector('paper-tabs');
        pages.selected = tabs.selected;
    }
});