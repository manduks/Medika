Router.configure({
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate  : 'app',

    // the appNotFound template is used for unknown routes and missing lists
    notFoundTemplate: 'notFound',

    // show the appLoading template whilst the subscriptions below load their data
    loadingTemplate : 'loading',

    // wait on the following subscriptions before rendering the page to ensure
    // the data it's expecting is present
    waitOn          : function () {
    }
});

Router.map(function () {
    this.route('home', {
        path          : '/',
        onBeforeAction: function (pause) {
            if (this.ready()) {
                if (Meteor.user()) {
                    this.render('main');
                } else {
                    this.render('landing');
                }
            } else {
                this.render('loading');
            }
        }
    });
});