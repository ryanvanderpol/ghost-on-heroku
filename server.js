var path = require('path');
var ghost = require('ghost');
var errors  = require('./node_modules/ghost/core/server/errors'),
    storage = {};

var ghostStorage = require('./node_modules/ghost/core/server/storage');
ghostStorage.getStorage = function getStorage(storageChoice) {
    // TODO: this is where the check for storage apps should go
    // Local file system is the default.  Fow now that is all we support.
    storageChoice = 'local-file-store';

    if (storage[storageChoice]) {
        return storage[storageChoice];
    }

    try {
        // TODO: determine if storage has all the necessary methods.
        //storage[storageChoice] = require('./' + storageChoice);
        storage[storageChoice] = require('./s3')({
          errors: errors,
            config: require('./config').production.aws
        });
    } catch (e) {
        errors.logError(e);
    }

    // Instantiate and cache the storage module instance.
    storage[storageChoice] = new storage[storageChoice]();

    return storage[storageChoice];
};

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  ghostServer.start();
});
