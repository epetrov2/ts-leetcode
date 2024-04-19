import * as fs from 'fs';

const words = fs.readFileSync('./sub.txt', 'utf-8');

words.split(/\r?\n/).forEach(line => {

    const space = line.indexOf(' <');
    let name = line.substring(1, space);
    let email = line.substring(space + 2);
    email = email.substring(0, email.length - 2);

    const start = name.indexOf('=?utf-8?B?');
    if (start != -1) {
        name = name.substring(10);
        name = name.substring(0, name.length - 2);
        name = Buffer.from(name, 'base64').toString('utf8')
    }
    console.log(name + ';' + email);
});





