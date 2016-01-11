(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.cozydb = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

(function() {
  var cozydb;

  CozyInstance = null;

  CozyUser = null;

  module.exports.setupModels = setupModels = function() {
    module.exports.CozyInstance = CozyInstance = cozydb.getModel('CozyInstance', cozydb.NoSchema);
    module.exports.CozyUser = CozyUser = cozydb.getModel('User', cozydb.NoSchema);
  };

  setupModels();

  })();

  module.exports.setupModels = setupModels;

  module.exports.CozyInstance = CozyInstance;

  module.exports.CozyUser = CozyUser;

}).call(this);

(function() {
cozyDataAdapter = {
	find: function(callback) {
	      var location = window.location;
	      var xhr = new XMLHttpRequest();
	      xhr.open("POST", "/ds-api/request/contact/all/", true);
	      xhr.onload = function() {
	        console.log("ONLOAD");
	        console.log(xhr.response);
	        console.log("ONLOAD");
	        callback(null, xhr.response);
	      }
	      xhr.onerror = function(e) {
	        err = "Request failed : #{e.target.status}";
	        callback(err);
	      }
	      xhr.setRequestHeader("Content-Type", "application/json");
	      xhr.send();
	    },
	    create: function(attributes, callback) {
	      var path;
	      path = "/ds-api/data/";
	      console.log(attributes);
	      var location = window.location;
	      var xhr = new XMLHttpRequest();
	      console.log(xhr);
	      xhr.open("POST", path, true);
	      xhr.onload = function() {
	        callback(null, xhr.response);
	      }
	      xhr.onerror = function(e) {
	        err = "Request failed : #{e.target.status}";
	        callback(err);
	      }
	      xhr.setRequestHeader("Content-Type", "application/json");
	      xhr.setRequestHeader("Authorization", "Basic " + btoa("frontpermission:" + "password"));
	      xhr.send(JSON.stringify(attributes));
	    }
    };



}).call(this);

(function() {
  module.exports.getModel = function(name, schema) {
    console.log('GET MODEL');
    var ClassFromGetModel, klass;
    klass = ClassFromGetModel = (function(_super) {
      console.log('************************');
      __extends(ClassFromGetModel, _super);

      function ClassFromGetModel() {
        console.log('ClassFromGetModel');
        return ClassFromGetModel.__super__.constructor.apply(this, arguments);
      }

      ClassFromGetModel.schema = schema;

      return ClassFromGetModel;

    })(CozyModel);
    klass.displayName = klass.name = name;
    console.log('klass.displayName');

    klass.toString = function() {
      return "" + name + "Constructor";
    };
    klass.docType = name;
    return klass;
  };

}).call(this);
},{}]},{},[4])(4)
});