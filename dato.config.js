// dato.config.js

module.exports = (dato, root, i18n) => {
    const content = { hello: "world" }
    root.createDataFile("data/foobar.yml", 'yaml', content)
  }