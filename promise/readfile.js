//引入fs模块
const fs = require('fs');

const p = new Promise(function (resolve, reject) {
    fs.readFile('./resources/为学.md', (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});

p.then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
});