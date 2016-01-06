var url = String;
var request = String;

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


function someFn(event) {

  e = event || window.event;

  // Some code here

  eventTracker.retVal = true;

  eventTracker.trigger.call( e );

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
      var eventTracker = {

        retVal: false,

        retEvt: true,

        trigger: function( e ) {

          e = e || window.event;
          console.log('INSIDE TRIGGER');
          console.log(e);
          console.log(window.event);
          // some code here
        }

      };
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

