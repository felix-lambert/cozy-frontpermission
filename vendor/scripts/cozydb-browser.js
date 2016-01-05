
(function (window) {
  window.parent.postMessage({action: 'getToken'}, '*');

  function defineCozy() {
    Cozy.alert = function() {
      alert("This is a test message from the cozy framework");
    };
    return Cozy;
  }

  if (typeof(Cozy) === 'undefined') {
    window.Cozy = defineCozy();
  }

  window.addEventListener("message", function(event) {
    intent = event.data;
    if (intent.token) {
      location = window.location;
      url = location.protocol + "//" + location.host + "/ds-api/request/contact/all/";
      xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.onload = function() {
          console.log(xhr.response);
          // $rootScope.contacts = xhr.response;
          // $rootScope.$apply();
      }
      xhr.onerror = function(e) {
          err = "Request failed : #{e.target.status}";
          console.log(err);
          }
          xhr.setRequestHeader('Content-Type', 'application/json');
          token = btoa("frontpermission:" + intent.token);
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
})(window);
