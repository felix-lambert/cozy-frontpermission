angular.module('Bookmarks').controller('HomeAngCtrl', HomeAngCtrl);

HomeAngCtrl.$inject = ['$scope', '$injector', '$rootScope'];

function HomeAngCtrl($scope, $injector, $rootScope) {

	var vm        = this;
	vm.getContact = getContact;
	vm.create = create;
	var data = {};

	function create(user) {
		console.log('create contact');
		// console.log(window);
		console.log(cozydb);
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
		console.log(Contact);
	 	Contact.create(user, function(err, contact) {
            if (err) {
                alert(err);
            } else {
                $scope.contact;
            }
        });
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