/*
 * 1. 借用构造函数继承（借助call）。
 *
 * 缺点：只是继承了父类实例的属性和方法，不能继承父类的原型属性和方法；无法实现复用，每个子类都有父类实例函数的副本，影响性能。
 * */
function Parent1() {
    this.name = 'p1';
    this.say = () => {
        console.log('I am F');
    };
}
Parent1.prototype.pName = 'prototype name p1';
Parent1.prototype.pSay = () => console.log('pSay');
function Child1() {
    Parent1.call(this);
    this.skill = 'bb';
}
const child1 = new Child1();
console.log(child1);
child1.say();
// TypeError: child1.pSay is not a function
// child1.pSay();

// ————————————————————————————————————————————————————————————————————————————————————————————

/*
 * 2. 原型链继承。
 * 缺点：子类实例对父类引用属性的修改会污染其它子类。
 * */
function Parent2() {
    this.p = 'p';
    this.arr = [1, 2, 3];
}
Parent2.prototype.say = function () {
    console.log('p', this.p);
};

function Child2() {
    this.p = 'cp';
}
Child2.prototype = new Parent2();
// eslint-disable-next-line camelcase
const child2_1 = new Child2();
console.log(child2_1);
child2_1.say();

// eslint-disable-next-line camelcase
const child2_2 = new Child2();

// 子类实例对父类引用属性的修改会污染其它子类。
child2_1.arr.push(4);
console.log(child2_1.arr);
console.log(child2_2.arr);

// ————————————————————————————————————————————————————————————————————————————————————————————

/*
 * 3.组合继承。
 * 结合使用1，2方法。
 *
 * 缺点：创建子类实例时，赋予重复的属性来屏蔽父类的属性，造成了存在两份相同属性的问题。
 *
 * */
console.log('---------------------');
console.log(3);
function Parent3() {
    this.p = 'p';
    this.arr = [1, 2, 3];
}
Parent3.prototype.say = function () {
    console.log(this.p);
};

function Child3() {
    Parent3.call(this);
    this.p = 'cp';
}
Child3.prototype = new Parent3();

const child3 = new Child3();
const child32 = new Child3();
console.log(child3);
child3.say();
child3.arr.push(4);
// 解决了引用类型属性污染问题
console.log(child3.arr);
console.log(child32.arr);

// ————————————————————————————————————————————————————————————————————————————————————————————

/*
 * 4.原型式继承
 * 利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型。（实际上就是Object.create方法）
 * 缺点：通过原型链继承的多个实例，它们通过继承得到的引用属性指向相同，修改时会存在污染问题。无法传递参数。
 * */
function myCreate(object) {
    function F() {}
    F.prototype = object;
    return new F();
}

console.log('---------------------------');
console.log(4);
const parent4 = {
    p: 'p',
    arr: [1, 2, 3],
    say() {
        console.log(this.p);
    },
};
const child41 = myCreate(parent4);
const child42 = myCreate(parent4);
child41.arr.push(4);
child42.arr.push(5);
console.log(child41.arr);
console.log(child42.arr);
console.log(parent4);

// ————————————————————————————————————————————————————————————————————————————————————————————

/*
 * 5. 寄生式继承。
 * 跟原型式继承很像，只是在函数中可为对象添加属性和方法来增强对象。
 * 缺点（与原型式继承一样）：通过这种方式继承的多个实例，它们通过继承得到的引用属性指向相同，修改时会存在污染问题。无法传递参数。
 * */

function myCreateAnother(object) {
    const obj = myCreate(object);
    obj.sing = function (song) {
        console.log(`sing ${song}`);
    };
    return obj;
}

console.log('------------------');
console.log(5);

const parent5 = {
    p: 'p',
    say() {
        console.log(this.p);
    },
};
const child5 = myCreateAnother(parent5);
console.log(child5);
child5.sing('love song');

// ————————————————————————————————————————————————————————————————————————————————————————————

/*
 * 6. 寄生组合式继承
 * 通过借用构造函数和寄生模式实现继承。
 * 优点：
 * - 高效，实例化子类时只调用了一次父类构造函数，从而避免创建重复的属性。
 * - 保持了原型链不变，因此能够正常使用 instanceOf 操作符和isPrototypeOf方法。
 *
 * 这是最成熟的方法，也是现在库实现的方法。
 * 在此例中，原型链时这样的：
 * child6的原型对象 = Child.prototype -> Parent.prototype的浅拷贝 -> Parent.prototype -> Object.prototype -> null.
 *
 * 注意：子类修改其原型对象上通过拷贝得到的引用属性时仍然会修改父类的原型对象上的这一引用属性，因为Object.create是浅拷贝的。
 * */

function inheritPrototype(Parent, Child) {
    // or myCreate
    const prototype = Object.create(Parent.prototype);
    // prototype.constructor = Child;
    Child.prototype = prototype;
}

function Parent6(p) {
    this.p = p;
    this.arr = [1, 2, 3];
    this.say = function () {
        console.log(this.p);
    };
}

function Child6(p) {
    Parent6.call(this, p);
    this.sing = function (song) {
        console.log(`sing ${song}`);
    };
}

inheritPrototype(Parent6, Child6);
const child6 = new Child6('cp');
const child62 = new Child6('cp2');
child6.arr.push(4);
// child62.arr.push(5);
console.log(child6.arr);
console.log(child62.arr);

console.log('~~~~~~~~');
// 尝试下更优雅的写法
function myExtend(Parent, constructor) {
    const prototype = Object.create(Parent.prototype);
    prototype.constructor = constructor;
    constructor.prototype = prototype;
    return constructor;
}

const Child62 = myExtend(Parent6, function (p) {
    Parent6.call(this, p);
    this.p = p;
    this.cSay = function () {
        console.log(this.p);
    };
});

const child63 = new Child62('child63 p');
const child64 = new Child62('child64 p');
child63.arr.push(63);
child64.arr.push(64);
console.log(child63);
console.log(child64);
console.log(child63.arr);
console.log(child64.arr);
child63.cSay();
child64.cSay();

// ————————————————————————————————————————————————————————————————————————————————————————————

console.log('---------------------------');
console.log(7);

/*
 * 7.混入方式继承多对象
 * */

function myMultiExtend(Parents, constructor) {
    if (!Parents || !Parents.length) return constructor;
    const { prototype } = Parents[0];
    prototype.constructor = constructor;
    constructor.prototype = prototype;
    Parents.slice(1).forEach((P) => Object.assign(constructor.prototype, P.prototype));
    return constructor;
}

function Parent71() {
    this.say = function () {
        console.log(`P1 say ${this.p1}`);
    };
}
Parent71.prototype.p1 = 1;

function Parent72() {
    this.say = function () {
        console.log(`P2 say ${this.p2}`);
    };
}
Parent72.prototype.p2 = 2;

const Parents = [Parent71, Parent72];
const Child7 = myMultiExtend(Parents, function () {
    Parents.forEach((P) => P.call(this));
    this.cp = 3;
});

const child7 = new Child7();
console.log(child7.p1, child7.p2, child7.cp);
child7.say();

// ————————————————————————————————————————————————————————————————————————————————————————————

console.log('------------------');
console.log(8);

/*
 * 8. ES6 Class extends
 * extends关键字主要用于类声明或者类表达式中，以创建一个类，该类是另一个类的子类。
 * 其中constructor表示构造函数，一个类中只能有一个构造函数，有多个会报出SyntaxError错误,
 * 如果没有显式指定构造方法，则会添加默认的 constructor方法，使用例子如下。
 *
 * */

class Parent8 {
    p = 1;

    age = 99;

    say() {
        console.log(this.p);
        console.log(this.name);
        console.log(this.age);
    }

    name;

    constructor(name) {
        this.name = name;
    }
}

class Child8 extends Parent8 {
    skill = 'coding';

    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

const child8 = new Child8('Channing', 45);
console.log(child8);
console.log(child8.skill);
child8.say();

// 99
// eslint-disable-next-line no-proto
console.log(new child8.__proto__.__proto__.constructor().age);
console.log(Parent8);
console.log(Child8.prototype);
// eslint-disable-next-line no-proto
console.log(Child8.__proto__);
console.log(Object.getPrototypeOf(Child8));
// eslint-disable-next-line no-proto
console.log(child8.__proto__);

// extends核心代码：
// eslint-disable-next-line no-underscore-dangle
function _inherits(subType, superType) {
    // 创建对象，创建父类原型的一个副本
    // 增强对象，弥补因重写原型而失去的默认的constructor 属性
    // 指定对象，将新创建的对象赋值给子类的原型
    subType.prototype = Object.create(superType && superType.prototype, {
        constructor: {
            value: subType,
            enumerable: false,
            writable: true,
            configurable: true,
        },
    });

    // 指定子类构造函数的原型为父类构造函数
    if (superType) {
        Object.setPrototypeOf
            ? Object.setPrototypeOf(subType, superType)
            : // eslint-disable-next-line no-proto
              (subType.__proto__ = superType);
    }
}

// eslint-disable-next-line no-proto
console.log(Child8.__proto__ === Parent8);
// eslint-disable-next-line no-proto
console.log(Child8.prototype.__proto__ === Parent8.prototype);
// eslint-disable-next-line no-proto
console.log(Object.__proto__ === Function.prototype);

// yue了，看看https://cnodejs.org/topic/59f3a1663bc022103e741c68 这里面的讨论吧～～～

// ————————————————————————————————————————————————————————————————————————————————————————————
