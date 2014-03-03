suite('ModuleB_XHR', function () {
  var target,
      url = 'src/moduleB-xhr.js';

  suiteSetup(function () {
    target = new ModuleB_XHR();
  });

  suite('#show', function () {
    test('should return "Hello!"', function (done) {
      target.load(url, function () {
        assert(target.show() === 'Hello!');
        done();
      });
    });
  });
});
