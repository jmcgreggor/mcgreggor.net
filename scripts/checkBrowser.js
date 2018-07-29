(function (window) {
  'use strict';

  var App = window.App || {};

  function CheckBrowser(clientBrowser) {

      var browser = {
            Chrome: /Chrome/.test(clientBrowser),
            Firefox: /Firefox/.test(clientBrowser),
            Safari: /Safari/.test(clientBrowser),
            IntExplr: /MSIE/.test(clientBrowser),
            Opera: /Opera/.test(clientBrowser)
      };

      if(browser.Chrome) {
        console.log("Browser is Chrome");
        return "Chrome";
      }

      else if(browser.Firefox) {
        console.log("Browser is Firefox");
        return "Firefox";
      }

      else if(browser.Safari) {
        console.log("Browser is Safari");
        return "Safari";
      }

      else if(browser.IntExplr) {
        console.log("Browser is IE");
        return "IE";
      }

      else if(browser.Opera) {
        console.log("Browser is Opera");
        return "Opera";
      }

      else {
        console.log("Browser is unknown");
        return "Lamp";
      };
  };

  App.CheckBrowser = CheckBrowser;
  window.App = App;

})(window);
