function one() {
    setTimeout(() => {
        console.log(111);
        iterator.next();
    }, 1000);
    return 1;
}

function two() {
    setTimeout(() => {
        console.log(222);
        iterator.next();
    }, 2000);
    return 1;
}

function three() {
    setTimeout(() => {
        console.log(333);
        iterator.next();
    }, 3000);
    return 1;
}

function *gen(){
    yield one();
    yield two();
    yield three();
}

let iterator = gen();
iterator.next();