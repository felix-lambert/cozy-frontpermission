var url = String;
var request = String;

(function (window) {
  
  'use strict'
  
  var eventTracker = {

    retVal: false,

    retEvt: true,

      trigger: function(event) {
        console.log('INSIDE TRIGGER');
        console.log(event);
        console.log(window.event);
        // some code here
      }

    };

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

      function someFn(event) {

        // Some code here
        eventTracker.retVal = true;
        eventTracker.trigger.call(event || window.event);
      }

// Bind the event in all browsers
if (window.addEventListener) {
    window.addEventListener("message", someFn, false);
} else if (window.attachEvent) {
  console.log("attach event");
    window.attachEvent('onload', someFn);
} else {
    window.onload = someFn;
}
    Cozy.getData = function(accessType, type, appName) {
      url = location.protocol + "//" + location.host + "/" + accessType + "/" + type + "/" + appName + "/all/";
      request = 'POST';
      


      window.parent.postMessage({action: 'getToken'}, '*');
      console.log('get data');
      console.log(window);
    };
    return Cozy;

  };

  if (typeof(Cozy) === 'undefined') {
    window.Cozy = defineCozy();
  }



})(window);

