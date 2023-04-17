//const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    myChain: [],
    getLength() {
        //throw new NotImplementedError('Not implemented');
        return this.myChain.length;
    },
    addLink(value) {
        // throw new NotImplementedError('Not implemented');
        this.myChain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        //throw new NotImplementedError('Not implemented');
        if (!this.myChain[position - 1] || !Number.isInteger(position)) {
            this.myChain = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.myChain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        //throw new NotImplementedError('Not implemented');
        this.myChain.reverse();
        return this;
    },
    finishChain() {
        //throw new NotImplementedError('Not implemented');
        const result = this.myChain.join("~~");
        this.myChain = [];
        return result;
    }
};

module.exports = {
    chainMaker
};
