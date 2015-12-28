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
;angular.module('Bookmarks').factory('Bookmark', Bookmark);

Bookmark.$inject = ['$http'];

function Bookmark($http) {

  var Bookmark = function() {
    this._id;
    this._bookmark = {};
    this._bookList = [];
  };

  Bookmark.prototype = {
    constructor: Bookmark,
    setId: setId,
    setBookmark: setBookmark,
    deleteBookmark: deleteBookmark,
    addBookmark: addBookmark,
    getBookmarks: getBookmarks
  };

  return Bookmark;

  function setBookmark(bookmark) {
    this._bookmark = bookmark;
  }

  function setId(id) {
    this._id = id;
  }
  // Define your route depended to the name of your app
  function deleteBookmark() {
    var self = this;
    return $http.get('/api/delete/' + self._id).then(function(response) {
      return response;
    });
  }

  // Define your route depended to the name of your app
  function addBookmark() {
    var self = this;
    return $http.post('/api/bookmark', self._bookmark).then(function(response) {
      self._bookmark = response.data;
      return response;
    });
  }
  
  // Define your route depended to the name of your app
  function getBookmarks() {
    var self = this;
    return $http.get('/api/bookmarks').then(function(response) {
      self._bookList = response.data;
      return response;
    });
  }
}
;angular.module('Bookmarks').controller('HomeAngCtrl', HomeAngCtrl);

HomeAngCtrl.$inject = ['$scope', '$injector'];

function HomeAngCtrl($scope, $injector) {

	var vm        = this;
	vm.getContact = getContact;

  	function getContact() {
  		console.log('Get contact');
  		window.parent.postMessage({
  			action: 'getToken',
            id: app.get 'id',
            name: "frontpermission"
  		}, '*');

		iframeWin = document.getElementById("frontpermission-frame").contentWindow;
        iframeWin.addEventListener("message", function(event) {
        	console.log(event);
        	intent = event.data;
            if (intent.token) {
                location = window.location;
                url = location.protocol + "//" + location.host + "/ds-api/request/contact/all/";
                xhr = new XMLHttpRequest();
                xhr.open 'POST', url, true;
                xhr.onload = function() {
                    console.log 'onload';
                    console.log xhr.response;
                }
                xhr.onerror = function(e) {
                    err = "Request failed : #{e.target.status}";
                    console.error err;
                }
                xhr.setRequestHeader 'Content-Type', 'application/json';
                token = btoa("frontpermission":intent.token);
                authorization = "Basic " + token;
                xhr.setRequestHeader("Authorization", authorization);
                xhr.send();
            } else {
                console.log("Weird intent, cannot handle it", intent);
                window.onerror("Error handling intent: " + intent, \
                    "MainRouter.initialize", null, null, \
                    new Error()
                );
            }
        }, false);
  	}
}
;
//# sourceMappingURL=app.js.map