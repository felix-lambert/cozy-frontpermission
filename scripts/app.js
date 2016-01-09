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
;angular.module('Bookmarks').controller('HomeAngCtrl', HomeAngCtrl);

HomeAngCtrl.$inject = ['$scope', '$injector', '$rootScope'];

function HomeAngCtrl($scope, $injector, $rootScope) {

	var vm        = this;
	vm.getContact = getContact;
	vm.create = create;
	var data = {};

	function create(user) {
		console.log('create contact');
		console.log('contact');
		// console.log(contact);
		console.log('user');
		console.log(user);

		Contact = cozydb.getModel('Contact', {
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
		console.log('second user');
		console.log(user);
		// console.log(Contact);
		// console.log('................SEND USER.........');
		// var contact = {
		// 	fn 			  : user.fn,
		// 	n             : user.n,
	 //        org           : user.org,
	 //        title         : user.title,
	 //        department    : user.department,
	 //        bday          : user.bday,
	 //        nickname      : user.nickname,
	 //        url           : user.url,
	 //        note          : user.note
		// };
		
		// console.log('END SEND USER');
	 // 	Contact.create(user, function(err, res) {
  //           if (err) {
  //               alert(err);
  //           } else {
  //           	console.log('///////CONTACT/////////////');
  //           	console.log(res);
  //           	console.log('//////////////////////////');
  //               $scope.contact = res;
  //           }
  //       });
		// Contact.create(user, function(err, contact) {
		// 	console.log('/////contact////////////////');
		// 	if (err) {
		// 		alert(err);
		// 	} else {
		// 		$scope.contact = contact;
		// 	}
		// });
		console.log('//////////////////');
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