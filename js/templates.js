angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("templates/app/_partials/navigation.tpl.html","<md-list>\n    <md-list-item ng-repeat=\"state in navigationStates | orderBy:orderMenuItems\" >\n        <md-button ng-click=\"toggleLeftNav()\" ui-sref=\"{{state.name}}\" ui-sref-active=\"selected\">\n            <md-icon>{{state.data.icon}}</md-icon>\n            {{state.data.title}}\n        </md-button>\n    </md-list-item>\n</md-list>\n");
$templateCache.put("templates/app/_layouts/default.tpl.html","<md-sidenav\n        class=\"site-sidenav md-sidenav-left md-whiteframe-z2\"\n        md-component-id=\"left\"\n        md-is-locked-open=\"$mdMedia(\'gt-sm\')\"\n        ui-view=\"navigation\">\n</md-sidenav>\n\n<div flex layout=\"column\"\n     tabIndex=\"-1\"\n     role=\"main\"\n     class=\"md-whiteframe-z2\"\n >\n\n    <md-toolbar layout=\"row\" class=\"md-whiteframe-z1\">\n        <md-button class=\"menu\" hide-gt-sm ng-click=\"toggleLeftNav()\" aria-label=\"Show User List\">\n            <md-icon>menu</md-icon>\n        </md-button>\n        <h1>I\'m Zak Henry</h1>\n    </md-toolbar>\n\n    <md-content flex id=\"content\" ui-view=\"main\"></md-content>\n</div>");
$templateCache.put("templates/app/public/error/error_template.tpl.html","<div class=\"jumbotron\">\n    <h1><md-icon>error</md-icon> Whoops <small>An error occurred</small> </h1>\n\n    <p>Please report this error, along with the debug output below.</p>\n\n    <md-button class=\"md-raised\" ng-click=\"goBack()\">\n        <md-icon>arrow_back</md-icon>\n        Take me back\n    </md-button>\n    <md-button class=\"md-raised md-primary\" ng-click=\"reload()\">\n        <md-icon>refresh</md-icon>\n        Reload\n    </md-button>\n\n    <h3>{{title}}</h3>\n\n    <div ng-if=\"!!url\">\n        Attempting to access <code>{{url}}</code><span ng-if=\"!!method\">with method <code>{{method}}</code></span>\n    </div>\n\n    <p ng-if=\"!!message\">{{message}}</p>\n\n    <pre ng-if=\"!!details\">{{details}}</pre>\n\n</div>");
$templateCache.put("templates/app/public/home/home.tpl.html","<h2>Success!</h2>\n<h3>Your build of spira has succeeded</h3>\n<md-icon> face </md-icon>");
$templateCache.put("templates/app/public/blog/blog.tpl.html","<h2 class=\"md-flex\">Blog</h2>\n<h3><md-icon>warning</md-icon> @todo</h3>");}]);