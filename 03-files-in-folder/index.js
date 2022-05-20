const path = require('path');
const fs = require('fs');

fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if (file.isFile() === true) {
        const name = file.name;
        fs.stat(path.join(__dirname, 'secret-folder', name), (err, stats) => {
          const size = stats.size;
          console.log(path.basename(file.name, path.extname(file.name)), '-', path.extname(file.name), '-', size);
        });
      }
    });
  }
});