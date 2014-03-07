suite('ModuleC_APPENDCHILD', function () {
  var module,
      url = 'src/moduleC.js';

  suiteSetup(function () {
    module = new ModuleC_APPENDCHILD();
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
