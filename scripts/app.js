angular.module('Bookmarks', [
  'ngResource',
  'ngRoute'
]).config(appConfig);

var routeObject = {
  '/': {
    templateUrl: 'partials/home.html',
    controller: 'HomeAngCtrl',
    controllerAs: 'home'
  }
};

appConfig.$inject = ['$httpProvider', '$routeProvider'];

function appConfig($httpProvider, $routeProvider) {
  for (var path in routeObject) {
    $routeProvider.when(path, routeObject[path]);
  }
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}
;angular.module('Bookmarks').controller('HomeAngCtrl', HomeAngCtrl);

HomeAngCtrl.$inject = ['$scope', '$injector', '$rootScope'];

function HomeAngCtrl($scope, $injector, $rootScope) {

	var vm        = this;
	vm.getContact = getContact;

  	function getContact() {
  		console.log('Get contact');
  		window.parent.postMessage({
  			action: 'getToken',
            name: "frontpermission"
  		}, '*');

        window.addEventListener("message", function(event) {
        	console.log(event);
        	intent = event.data;
            if (intent.token) {
                location = window.location;
                url = location.protocol + "//" + location.host + "/ds-api/request/contact/all/";
                xhr = new XMLHttpRequest();
                xhr.open('POST', url, true);
                xhr.onload = function() {

                    $rootScope.$broadcast('clickEvent', xhr.response);
                    console.log(xhr.response);
                    $scope.contacts = xhr.response;
                    console.log('____response_____________')
                }
                xhr.onerror = function(e) {
                    err = "Request failed : #{e.target.status}";
                    console.log(err);
                }
                xhr.setRequestHeader('Content-Type', 'application/json');
                token = btoa("frontpermission:" + intent.token);
                authorization = "Basic " + token;
                xhr.setRequestHeader("Authorization", authorization);
                xhr.send();
            } else {
                console.log("Weird intent, cannot handle it", intent);
                window.onerror("Error handling intent: " + intent, "MainRouter.initialize", null, null,
                    new Error()
                );
            }
        }, false);
        $rootScope.$on('clickEvent', function(a, b) {
            //a,b - event object details
            console.log(a);
            console.log(b);
        });
  	}
}
;
//# sourceMappingURL=app.js.map