angular.module('Bookmarks').controller('HomeAngCtrl', HomeAngCtrl);

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
		
		console.log('END SEND USER');
	 	Contact.create(user, function(err, res) {
            if (err) {
                alert(err);
            } else {
            	console.log('///////CONTACT/////////////');
            	console.log(res);
            	console.log('//////////////////////////');
                vm.contact = res;
                console.log('§§§§§§§§§§§§§§');
                console.log(res.fn);
                console.log('$$$$$$$$$$$$$$');
            }
        });
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