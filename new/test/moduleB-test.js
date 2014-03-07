suite('ModuleB_XHR', function () {
  var module,
      url = 'src/moduleB.js';

  suiteSetup(function () {
    module = new ModuleB_XHR();
  });

  suite('#show', function () {
    test('should return "Hello!"', function (done) {
      module.load(url, function () {
        assert(module.show() === 'Hello!');
        done();
      });
    });
  });
});
