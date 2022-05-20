const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');

stdout.write('Данный скрипт записывает в файл любой введённый текст. Для завершения процесса нажмите комбинацию клавиш ctrl + c или введите слово exit.\n');
fs.writeFile(
  path.join(__dirname, 'text.txt'),
  '',
  (err) => {
    if (err) throw err;
  }
);
process.on('SIGINT', () => {
  stdout.write('Завершение процесса');
  process.exit();
});

stdin.on('data', data => {
  const text = data.toString();
  if (data.toString().trim() === 'exit') {
    stdout.write('Завершение процесса');
    process.exit();
  } else {
    fs.appendFile(
      path.join(__dirname, 'text.txt'),
      text,
      (err) => {
        if (err) throw err;
      }
    );
  }
});