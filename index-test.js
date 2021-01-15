'use strict';

class Member {
    constructor(boke, tsukkomi){
        this.boke = boke,
        this.tsukkomi = tsukkomi;
    }

    firstMessage() {
       document.getElementById("firstText");
    }

    secondMessage() {
        document.getElementById("secondText");
    }

    thirdMessage() {
        document.getElementById("thirdText");
    }

}

const a = Member.firstMessage.innerHTML = 'ちんこ';

const ang = new Member('山根', '田中');
// console.log(a);

console.log(a);