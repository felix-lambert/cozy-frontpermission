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

    Cozy.getData = function(accessType, type, appName, callback) {
      url = location.protocol + "//" + location.host + "/" + accessType + "/" + type + "/" + appName + "/all/";
      request = 'POST';
      window.parent.postMessage({action: 'getToken'}, '*');
      window.addEventListener("message", function(event) {
        var intent = event.data;
        if (intent.token) {
          var location = window.location;
          
          var xhr = new XMLHttpRequest();
          xhr.open(request, url, true);
          xhr.onload = function() {
            callback(xhr.response);
          }
          xhr.onerror = function(e) {
              err = "Request failed : #{e.target.status}";
              console.log(err);
              }
              xhr.setRequestHeader('Content-Type', 'application/json');
              var token = btoa(intent.appName + ":" + intent.token);
              var authorization = "Basic " + token;
              xhr.setRequestHeader("Authorization", authorization);
              xhr.send();
          } else {
              console.log("Weird intent, cannot handle it", intent);
              window.onerror("Error handling intent: " + intent, "MainRouter.initialize", null, null,
                  new Error()
              );
          }
      }, true);

    };
    return Cozy;

  };

  if (typeof(Cozy) === 'undefined') {
    window.Cozy = defineCozy();
  }

})(window);

