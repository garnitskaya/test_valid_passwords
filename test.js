const arr = [
    ['a', 1, 5, 'abcdj'],
    ['z', 2, 4, 'asfalseiruqwo'],
    ['b', 3, 6, 'bhhkkbbjjjb'],
]

const array = arr => {
    let lengthvalidPasswords = 0;
    arr.map(item => {
        const [l, from, before, password] = item;
        validPasswords(l, from, before, password) ? lengthvalidPasswords++ : 0;
    });
    return lengthvalidPasswords;
};

function validPasswords(l, from, before, password) {
    const obj = {};
    let key = '';

    for (let i = 0; i < password.length; i++) {
        key = password[i];
        if (obj[key]) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }

    if (obj[l] >= from && obj[l] <= before) {
        return true;
    } else {
        return false;
    }
};

console.log(array(arr));