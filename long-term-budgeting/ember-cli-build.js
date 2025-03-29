module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Import any additional libraries or assets here

  return app.toTree();
};