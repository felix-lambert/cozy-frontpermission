exports.config = {
    "modules": {
        "definition": false,
        "wrapper": false
    },
    "files": {
        "javascripts": {
            "defaultExtension": 'js',
            "joinTo": {
                'scripts/app.js': /^app/,
                'scripts/vendor.js': /^vendor/
            },
            "order": {
                "before": [
                  'vendor/scripts/angular.js',
                  'vendor/scripts/angular-resource.js',
                  'vendor/scripts/angular-route.js'
                ]
            }
        },
        "templates": {
            "defaultExtension": 'html',
            "joinTo": 'scripts/app.js'
        },
        "stylesheets" : {
            "joinTo": {'css/app.css': /^app/}
        }
    },
    "paths": {
        "public": "."
    },
    "plugins": {
        "browsefiry": {
            "bundles": {
                'scripts/app.js': {
                    'entry': "app/app.module.js",
                    'matcher': '/^app/',
                    onBrowserifyLoad: function(bundler) {
                        console.log('onWatchifyLoad');
                    },
                    onBeforeBundle: function(bundler) {
                        console.log('onBeforeBundle');
                    },
                    onAfterBundle: function(error, bundleContents) {
                        console.log('onAfterBundle');
                    }
                }
            }
        }
    }
};