'use strict';

(function(){
  const LINE_MANIFEST =
    'https://marketplace.firefox.com/app/' +
    '8bcde521-3e5b-4e0c-879d-26eccfa0b607/manifest.webapp';

  function fix() {
    var layer = document.getElementById('_wrap_profile_layer');
    if (!layer) {
      window.setTimeout(fix, 500);
      return;
    }

    layer.addEventListener('touchend', function(e) {
      e.target.click();
    });
  }

  function init() {
    if (document.documentElement.dataset.lineFixer) {
      return;
    }

    navigator.mozApps.getSelf().onsuccess = function(e) {
      if (document.documentElement.dataset.lineFixer) {
        return;
      }

      if (e.target.result.manifestURL === LINE_MANIFEST) {
        fix();
      }

      document.documentElement.dataset.lineFixer = true;
    };
  }

  if (document.documentElement) {
    init();
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }

})();
