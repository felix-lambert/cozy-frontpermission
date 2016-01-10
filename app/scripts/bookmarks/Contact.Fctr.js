
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
    this._contact;
    this._contacts = {};
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