const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;

fs.access(path.join(__dirname, 'project-dist'), function(err) {
  if (err && err.code === 'ENOENT') {
    fsPromises.mkdir(path.join(__dirname, 'project-dist'));

    fs.readFile((path.join(__dirname, 'template.html')), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const template = data.toString();

        fs.writeFile(
          path.join(__dirname, 'project-dist', 'index.html'),
          template,
          (err) => {
            if (err) throw err;
          }
        );

        fs.readFile((path.join(__dirname, 'project-dist', 'index.html')), (err, data) => {
          if (err) {
            console.log(err);
          } else {
            const newTemplate = data.toString();

            fs.readFile((path.join(__dirname, 'components', 'header.html')), (err, data) => {
              if (err) {
                console.log(err);
              } else {
                const tamplateWithHeader = newTemplate.replace(/{{header}}/g, data);
                fs.writeFile(
                  path.join(__dirname, 'project-dist', 'index.html'),
                  tamplateWithHeader,
                  (err) => {
                    if (err) throw err;
                  }
                );

                fs.readFile((path.join(__dirname, 'components', 'articles.html')), (err, data) => {
                  if (err) {
                    console.log(err);
                  } else {
                    const tamplateWithArticles =  tamplateWithHeader.replace(/{{articles}}/g, data);
                    fs.writeFile(
                      path.join(__dirname, 'project-dist', 'index.html'),
                      tamplateWithArticles,
                      (err) => {
                        if (err) throw err;
                      }
                    );

                    fs.readFile((path.join(__dirname, 'components', 'footer.html')), (err, data) => {
                      if (err) {
                        console.log(err);
                      } else {
                        const tamplateWithFooter = tamplateWithArticles.replace(/{{footer}}/g, data);
                        fs.writeFile(
                          path.join(__dirname, 'project-dist', 'index.html'),
                          tamplateWithFooter,
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
      }
    });

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
                  path.join(__dirname, 'project-dist', 'style.css'),
                  '',
                  (err) => {
                    if (err) throw err;
                  }
                );
                fs.appendFile(
                  path.join(__dirname, 'project-dist', 'style.css'),
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

    fsPromises.mkdir(path.join(__dirname, 'project-dist', 'assets'));

    fsPromises.mkdir(path.join(__dirname, 'project-dist', 'assets', 'fonts'))
      .then( function () {
      })
      . catch ( function (error) {
        console.log(error);
      });

    fsPromises.mkdir(path.join(__dirname, 'project-dist', 'assets', 'img'))
      .then( function () {
      })
      . catch ( function (error) {
        console.log(error);
      });

    fsPromises.mkdir(path.join(__dirname, 'project-dist', 'assets', 'svg'));

    fs.readdir(path.join(__dirname, 'assets', 'fonts'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.copyFile((path.join(__dirname, 'assets', 'fonts', file.name)), (path.join(__dirname, 'project-dist', 'assets', 'fonts', file.name)))
            .then( function () {
    
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });

    fs.readdir(path.join(__dirname, 'assets', 'img'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.copyFile((path.join(__dirname, 'assets', 'img', file.name)), (path.join(__dirname, 'project-dist', 'assets', 'img', file.name)))
            .then( function () {
    
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });

    fs.readdir(path.join(__dirname, 'assets', 'svg'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.copyFile((path.join(__dirname, 'assets', 'svg', file.name)), (path.join(__dirname, 'project-dist', 'assets', 'svg', file.name)))
            .then( function () {
    
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });
  } else {
    fs.readdir(path.join(__dirname, 'project-dist', 'assets', 'fonts'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.unlink((path.join(__dirname, 'project-dist', 'assets', 'fonts', file.name)))
            .then( function () {
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });

    fs.readdir(path.join(__dirname, 'project-dist', 'assets', 'img'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.unlink((path.join(__dirname, 'project-dist', 'assets', 'img', file.name)))
            .then( function () {
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });

    fs.readdir(path.join(__dirname, 'project-dist', 'assets', 'svg'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.unlink((path.join(__dirname, 'project-dist', 'assets', 'svg', file.name)))
            .then( function () {
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });

    fs.readdir(path.join(__dirname, 'project-dist'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.unlink((path.join(__dirname, 'project-dist', file.name)))
            .then( function () {
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });

    fs.readFile((path.join(__dirname, 'template.html')), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const template = data.toString();
  
        fs.writeFile(
          path.join(__dirname, 'project-dist', 'index.html'),
          template,
          (err) => {
            if (err) throw err;
          }
        );
  
        fs.readFile((path.join(__dirname, 'project-dist', 'index.html')), (err, data) => {
          if (err) {
            console.log(err);
          } else {
            const newTemplate = data.toString();
  
            fs.readFile((path.join(__dirname, 'components', 'header.html')), (err, data) => {
              if (err) {
                console.log(err);
              } else {
                const tamplateWithHeader = newTemplate.replace(/{{header}}/g, data);
                fs.writeFile(
                  path.join(__dirname, 'project-dist', 'index.html'),
                  tamplateWithHeader,
                  (err) => {
                    if (err) throw err;
                  }
                );
  
                fs.readFile((path.join(__dirname, 'components', 'articles.html')), (err, data) => {
                  if (err) {
                    console.log(err);
                  } else {
                    const tamplateWithArticles =  tamplateWithHeader.replace(/{{articles}}/g, data);
                    fs.writeFile(
                      path.join(__dirname, 'project-dist', 'index.html'),
                      tamplateWithArticles,
                      (err) => {
                        if (err) throw err;
                      }
                    );
  
                    fs.readFile((path.join(__dirname, 'components', 'footer.html')), (err, data) => {
                      if (err) {
                        console.log(err);
                      } else {
                        const tamplateWithFooter = tamplateWithArticles.replace(/{{footer}}/g, data);
                        fs.writeFile(
                          path.join(__dirname, 'project-dist', 'index.html'),
                          tamplateWithFooter,
                          (err) => {
                            if (err) throw err;
                          }
                        );

                        fs.readFile((path.join(__dirname, 'components', 'about.html')), (err, data) => {
                          if (err) {
                            console.log(err);
                          } else {
                            const tamplateWithAbout = tamplateWithFooter.replace(/{{about}}/g, data);
                            fs.writeFile(
                              path.join(__dirname, 'project-dist', 'index.html'),
                              tamplateWithAbout,
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
          }
        });
      }
    });

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
                  path.join(__dirname, 'project-dist', 'style.css'),
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

    fs.readdir(path.join(__dirname, 'assets', 'fonts'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.copyFile((path.join(__dirname, 'assets', 'fonts', file.name)), (path.join(__dirname, 'project-dist', 'assets', 'fonts', file.name)))
            .then( function () {
    
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });

    fs.readdir(path.join(__dirname, 'assets', 'img'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.copyFile((path.join(__dirname, 'assets', 'img', file.name)), (path.join(__dirname, 'project-dist', 'assets', 'img', file.name)))
            .then( function () {
    
            })
            . catch ( function (error) {
              console.log(error);
            });
        });
      }
    });

    fs.readdir(path.join(__dirname, 'assets', 'svg'), {withFileTypes: true}, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fsPromises.copyFile((path.join(__dirname, 'assets', 'svg', file.name)), (path.join(__dirname, 'project-dist', 'assets', 'svg', file.name)))
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