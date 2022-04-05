const banji = {
    name: '终极一班',
    stus: [
        'xiaoming',
        'xiaotiao',
        'xiaoning',
        'knight'
    ],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.stus.length) {
                    return {value: this.stus[index++], done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        }
    }
};

for (const banjiElement of banji) {
    console.log(banjiElement);
}