const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testando uppercase, transforma as letras de uma palavra em letras maiúsculas', (done) => {
  uppercase('apple', (result) => {
    try {
      expect(result).toBe('APPLE');
      done();
    } catch (error) {
      done(error);
    }
  });
});