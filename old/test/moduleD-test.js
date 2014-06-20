suite('ModuleD_INSERTBEFORE', function () {
  var module,
      url = 'src/moduleD.js';

  suiteSetup(function () {
    module = new ModuleD_INSERTBEFORE();
  });

  suite('#show', function () {
    test('should return "Hello!"', function (done) {
      module.load(url, function () {
        expect(module.show()).to.equal('Hello!');
        done();
      });
    });
  });
});
