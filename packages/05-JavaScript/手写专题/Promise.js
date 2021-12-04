async function p1() {
    console.log('p1');
    await new Promise((r) => setTimeout(r, 1000));
    console.log('p1 end');
}

async function p2() {
    console.log('p2');
    await new Promise((r) => setTimeout(r, 1000));
    console.log('p2 end');
}

await p1();
const t1 = await '111';
console.log(t1);
p2();
