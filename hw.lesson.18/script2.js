Array.prototype.max = max;

function max() {
    let max = this[0];

    for (let i = 1; i < this.length; i++) {
        if (this[i] > max) {
            max = this[i];
        }
    }

    return max;
}

const value = [6, 5, 8, 7].max();
console.log(value);

