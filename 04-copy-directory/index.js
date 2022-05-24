const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;

fs.access(path.join(__dirname, 'files-copy'), function(err) {
  if (err && err.code === 'ENOENT') {
    fsPromises.mkdir(path.join(__dirname, 'files-copy'));
    
    fs.readdir(path.join(__dirname, 'files'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.copyFile((path.join(__dirname, 'files', file.name)), (path.join(__dirname, 'files-copy', file.name)))
            .then( function () {
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });
  } else {
    fs.readdir(path.join(__dirname, 'files-copy'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.unlink((path.join(__dirname, 'files-copy', file.name)))
            .then( function () {
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });
  

    fs.readdir(path.join(__dirname, 'files'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.copyFile((path.join(__dirname, 'files', file.name)), (path.join(__dirname, 'files-copy', file.name)))
            .then( function () {
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });
  }
});