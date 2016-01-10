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
    console.log(path);

    $routeProvider.when(path, routeObject[path]);
  }
  $routeProvider.otherwise({
    redirectTo: '/'
  });
  console.log('app config');
}
;
angular.module('Bookmarks').factory('Contact', Contact);

Contact.$inject = ['$http'];

function Contact($http) {

  var Contact = function() {
    this._fn = String;
    this._n = String;
    this._org = String;
    this._title = String;
    this._department = String;
    this._bday = String;
    this._nickname = String;
    this._url = String;
    this._note = String;
    this._contact = {};
    this._contacts;
    this._contactList = [];
  };

  Contact.prototype = {
    constructor: Contact,
    setId: setId,
    setContact: setContact,
    deleteBookmark: deleteBookmark,
    addContact: addContact,
    getBookmarks: getBookmarks
  };

  return Contact;

  function setContact(contacts) {
    this._contacts = contacts;
    this._contact = cozydb.getModel('Contact', {
		fn            : String,
        n             : String,
        org           : String,
        title         : String,
        department    : String,
        bday          : String,
        nickname      : String,
        url           : String,
        note          : String
	});
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
  function addContact() {
    var self = this;
    return self._contact.create(self._contacts).then(function(err, res) {
        if (err) {
            alert(err);
        } else {
        	console.log('///////CONTACT/////////////');
        	console.log(res);
            self._contactList = res;
            return (res);
        }
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

HomeAngCtrl.$inject = ['$scope', '$injector', '$rootScope'];

function HomeAngCtrl($scope, $injector, $rootScope) {

	var vm        = this;
	vm.getContact = getContact;
	vm.add = add;
	var data = {};
	var Contact = $injector.get('Contact');
	var contact = new Contact; 
	function add(user) {
		console.log('create contact');
		console.log('contact');
		// console.log(contact);
		console.log('user');
		console.log(user);
		var defaultForm = {
          fn : "",
          n : "",
            org           : "",
	        title         : "",
	        department    : "",
	        bday          : "",
	        nickname      : "",
	        url           : "",
	        note          : ""
      	};
		
		contact.setContact(user);
		contact.addContact().then(function() {
			vm.contacts = contact._contactList;
			console.log(vm.contacts);
      		console.log('END SEND USER');
      		// $scope.form.$setPristine();	
      	});
		
	 	
	}

  	function getContact() {
    	console.log('_____________Get contact_____________');
        Cozy.getData('ds-api', 'request', 'contact', function(data) {
        	console.log('YEEEEEEEEEEAAAAAAAAAAAAAAAAAAAAH !!!!')
        	console.log(data);
        	console.log('////////////////////////////////////')
        });
        console.log('End get contact');
    }
}
;
//# sourceMappingURL=app.js.map