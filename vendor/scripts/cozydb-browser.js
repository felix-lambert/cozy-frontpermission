var url = String;
var request = String;
var eventTracker = {
  retVal: false,
  retEvt: false,

  trigger: function(e) {
    e = e || window.event;
    console.log('INSIDE TRIGGER');
    console.log(e);
    // some code here
  }
};

(function (window) {
  
  'use strict'
  function defineCozy() {
    var Cozy = {};
    
    Cozy.alert = function() {
      alert("This is a test message from the cozy framework");
    };

    Cozy.checkExists = function(id) {
      
      url = location.protocol + "//" + location.host + "/data/exist/" + id;
      request = 'GET';
      window.parent.postMessage({action: 'getToken'}, '*');
    };

    Cozy.getData = function(accessType, type, appName) {
      url = location.protocol + "//" + location.host + "/" + accessType + "/" + type + "/" + appName + "/all/";
      request = 'POST';
      window.parent.postMessage({action: 'getToken'}, '*');
    };
    return Cozy;

  };

  if (typeof(Cozy) === 'undefined') {
    window.Cozy = defineCozy();
  }

})(window);

