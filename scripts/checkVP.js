(function (window) {
  'use strict';

  var Doc = window.document || {};

  function CheckViewport(ud) {

      var deviceWidth = Doc.documentElement.clientWidth;

      if(deviceWidth >= 768) {
          console.log("The viewport is larger than a standrd mobile phone: " + deviceWidth);

      } else if (deviceWidth < 768) {
          console.log("The viewport is equal to a standrd mobile device: " + deviceWidth);

      } else {
          console.log("The viewport is unknown, it may be a lamp. ");
      };

  };

  Doc.CheckViewport = CheckViewport;
  window.Doc = Doc;

})(window);
