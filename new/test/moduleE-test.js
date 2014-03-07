suite('ModuleE_REPLACECHILD', function () {
  var module,
      url = 'src/moduleE.js';

  suiteSetup(function () {
    module = new ModuleE_REPLACECHILD();
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
