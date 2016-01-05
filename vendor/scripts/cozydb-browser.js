
(function (window) {
  
  'use strict'
  function defineCozy() {
    var Cozy = {};
    var url = String;
    var request = String;
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
      request = 'POST'
      window.parent.postMessage({action: 'getToken'}, '*');
    };
    return Cozy;

  };

  if (typeof(Cozy) === 'undefined') {
    window.Cozy = defineCozy();
  }

})(window);

window.addEventListener("message", function(event) {
  intent = event.data;
  if (intent.token) {
    location = window.location;
    
    xhr = new XMLHttpRequest();
    xhr.open(request, url, true);
    xhr.onload = function() {
        console.log(xhr.response);
        return (xhr.response);
        // $rootScope.contacts = xhr.response;
        // $rootScope.$apply();
    }
    xhr.onerror = function(e) {
        err = "Request failed : #{e.target.status}";
        console.log(err);
        }
        xhr.setRequestHeader('Content-Type', 'application/json');
        token = btoa(intent.appName + ":" + intent.token);
        authorization = "Basic " + token;
        xhr.setRequestHeader("Authorization", authorization);
        xhr.send();
    } else {
        console.log("Weird intent, cannot handle it", intent);
        window.onerror("Error handling intent: " + intent, "MainRouter.initialize", null, null,
            new Error()
        );
    }
}, true);