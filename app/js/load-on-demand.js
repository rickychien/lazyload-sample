(function () {
  document.querySelector('#sample6 button').onclick = function onClick () {
    var script = document.createElement('script');
    script.src = 'js/sample6.js';
    document.querySelector('head').appendChild(script);
  };
})();
