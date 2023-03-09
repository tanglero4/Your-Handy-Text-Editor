const path = require('path');

module.exports = (application) =>
application.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
