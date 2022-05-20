const path = require('path');
const fs = require('fs');

fs.access(path.join(__dirname, 'files-copy'), function(err) {
  if (err && err.code === 'ENOENT') {
    fs.readdir(path.join(__dirname, 'styles'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          if (file.isFile() === true && path.extname(file.name) === '.css') {
            fs.readFile((path.join(__dirname, 'styles', file.name)), (err, data) => {
              if (err) {
                console.log(err);
              } else {
                fs.writeFile(
                  path.join(__dirname, 'project-dist', 'bundle.css'),
                  '',
                  (err) => {
                    if (err) throw err;
                  }
                );
                
                fs.appendFile(
                  path.join(__dirname, 'project-dist', 'bundle.css'),
                  data.toString(),
                  (err) => {
                    if (err) throw err;
                  }
                );
              }
            });
          }
        });
      }
    });
  } else {
    fs.readdir(path.join(__dirname, 'styles'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          if (file.isFile() === true && path.extname(file.name) === '.css') {
            fs.readFile((path.join(__dirname, 'styles', file.name)), (err, data) => {
              if (err) {
                console.log(err);
              } else {
                fs.appendFile(
                  path.join(__dirname, 'project-dist', 'bundle.css'),
                  data.toString(),
                  (err) => {
                    if (err) throw err;
                  }
                );
              }
            });
          }
        });
      }
    });
  }
});