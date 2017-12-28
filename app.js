const fs = require('fs');

fs.readdir('./', function(err, data) {
  if (err) throw err;
  let names = data.join(' ');
  fs.writeFile('./listFile.txt', names, function(err){
    if (err) throw err;
  })
  process.stdout.write('Zapisano!\n')
})
 