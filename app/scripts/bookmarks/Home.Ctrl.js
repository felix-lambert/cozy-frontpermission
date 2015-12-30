var cozydb = require('cozydb-browser');

angular.module('Bookmarks').controller('HomeAngCtrl', HomeAngCtrl);


HomeAngCtrl.$inject = ['$scope', '$injector', '$rootScope'];

function HomeAngCtrl($scope, $injector, $rootScope) {

	var vm        = this;
	vm.getContact = getContact;

  	function getContact() {
  		console.log('_____________Get contact_____________');
        cozydb.escape();
    }
}