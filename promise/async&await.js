const fs = require("fs");

function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/为学.md", (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

function readChaYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/插秧诗.md", (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

function readGuanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/观书有感.md", (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}


async function main() {
    let weiXue = await readWeiXue();
    let chaYang = await readChaYangShi();
    let guanShu = await readGuanShu();
    console.log(weiXue.toString());
    console.log(chaYang.toString());
    console.log(guanShu.toString());
}

main().then(r => {
    console.log(r);
});