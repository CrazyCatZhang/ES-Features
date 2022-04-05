const p = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        // let data = '数据库中的用户数据';
        // resolve(data);
        let err =  '数据读取失败';
        reject(err);
    },1000);
});

p.then(value => {
    console.log(value);
},reason=>{
    console.log(reason);
});