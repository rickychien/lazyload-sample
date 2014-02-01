(function () {
  var xhr = XMLHttpRequest();

  xhr.open('GET', 'js/sample4.js');

  xhr.onload = function () {
    // Execute response script
    eval(xhr.response);
  };

  xhr.send();

})();
