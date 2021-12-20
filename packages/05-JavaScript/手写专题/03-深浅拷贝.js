/*
 * 简单深拷贝
 * */
function deepClone(target) {
    if (typeof target !== 'object') return target;
    const obj = target instanceof Array ? [] : {};
    const keys = Object.keys(target);
    keys.forEach((key) => {
        obj[key] = deepClone(target[key]);
    });
    return obj;
}

function testDeepClone() {
    const obj = { a: 1, b: 2, c: { name: 'channing', child: { name: 'hyl' } }, d: 3 };
    const cloneObj = deepClone(obj);
    obj.c.name = 'A~~~';
    obj.d = 4;
    console.log(cloneObj);
    console.log(obj);
}
testDeepClone();
