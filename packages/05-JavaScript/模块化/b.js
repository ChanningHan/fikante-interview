let count = 1;
function plusCount() {
    count++;
}

setTimeout(() => {
    console.log('b', count);
}, 1000);

module.exports = {
    // count,
    get count() {
        return count;
    },
    plusCount,
};
