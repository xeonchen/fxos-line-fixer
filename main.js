'use strict';

(function(){
  const LINE_MANIFEST =
    'https://marketplace.firefox.com/app/' +
    '8bcde521-3e5b-4e0c-879d-26eccfa0b607/manifest.webapp';

  function init() {
    var layer = document.getElementById('_wrap_profile_layer');
    if (!layer) {
      window.setTimeout(init, 500);
      return;
    }

    layer.addEventListener('touchend', function(e) {
      e.target.click();
    });
  }

  navigator.mozApps.getSelf().onsuccess = function(e) {
    if (e.target.result.manifestURL === LINE_MANIFEST) {
      init();
    }
  };
})();
