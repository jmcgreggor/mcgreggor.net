(function (window) {
  'use strict';

  var App = window.App || {};

  function CheckViewport(deviceWidth) {

      if(deviceWidth >= 420) {
          console.log("The viewport is larger than a standrd mobile phone: " + deviceWidth);
          return "large-viewport";

      } else if (deviceWidth < 420) {
          console.log("The viewport is equal to a standrd mobile device: " + deviceWidth);
          return "small-viewport";

      } else {
          console.log("The viewport is unknown, it may be a lamp. ");
          return "unknown-viewport";
      };

  };

  App.CheckViewport = CheckViewport;
  window.App = App;

})(window);
