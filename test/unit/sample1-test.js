describe('Sample1', function () {

  describe('target div should be exist', function () {
    var target = document.querySelector('#sample1');

    assert(target !== null);
  });

  describe('target should append a label with "Hello World!"', function () {
    var label = document.querySelector('#sample1 label');

    assert(label !== null);
    assert(label.innerHTML === 'Hello World!');
  });

});
