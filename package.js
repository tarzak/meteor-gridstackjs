Package.describe({
    name: 'tarzak:gridstackjs',
    summary: ' gridstack.js re-packaged meteorjs ',
    version: '0.2.3'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0.2.1');

    api.use('jquery', 'client');
    api.use('linto:jquery-ui@1.0.0', 'client');
    api.use('underscore@1.0.0')

    api.addFiles('0.2.2/gridstack.js', 'client');
    api.addFiles('0.2.2/gridstack.css', 'client');
});
